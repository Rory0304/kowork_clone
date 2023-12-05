import React from "react";
import { AppState } from "react-native";
import { useAuth } from "app/contexts/AuthProvider";
import { getProfileByUserId } from "app/api/profile";
import type { ProfileType } from "app/types/Profile";

interface ProfileProviderProps {
  children: React.ReactNode;
}

interface ProfileContextType {
  profileInfo: ProfileType | null;
}

//
//
//
const ProfileContext = React.createContext<ProfileContextType>({
  profileInfo: null,
});

//
//
//
const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profileInfo, setProfileInfo] = React.useState<ProfileType | null>(
    null
  );
  const appState = React.useRef(AppState.currentState);

  const { authorized, userInfo, signOut } = useAuth();

  //
  //
  //
  const fetchProfileInfo = React.useCallback(async (userId: string) => {
    const { profile } = await getProfileByUserId({ userId });
    setProfileInfo(profile || null);
  }, []);

  //
  //
  //
  React.useEffect(() => {
    if (authorized && userInfo) {
      fetchProfileInfo(userInfo.id);
    } else {
      setProfileInfo(null);
    }
  }, [authorized, userInfo]);

  //
  // when user close app when tyring to enroll profile, then signOut
  //
  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "inactive" || nextAppState === "background") {
        if (!profileInfo) {
          setProfileInfo(null); // reset profile info
          signOut(); // reset auth and userInfo
        }
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [profileInfo]);

  return (
    <ProfileContext.Provider value={{ profileInfo }}>
      {children}
    </ProfileContext.Provider>
  );
};

//
//
//
const useProfile = () => {
  return React.useContext(ProfileContext);
};

export { ProfileContext, ProfileProvider, useProfile };
