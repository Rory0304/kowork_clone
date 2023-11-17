"use client";

import React from "react";
import { User } from "@supabase/supabase-js";
import { supabaseClient } from "app/utils/supabase";

type AuthProviderProps = { children: React.ReactNode };

interface AuthContextType {
  authorized: boolean;
  userInfo: User | null;
}

//
//
//
const AuthContext = React.createContext<AuthContextType>({
  authorized: false,
  userInfo: null,
});

//
//
//
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authorized, setAuthorized] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<User | null>(null);

  //
  //
  //
  const resetUserInfo = () => {
    setAuthorized(false);
    setUserInfo(null);
  };

  //
  //
  //
  const resolveSession = React.useCallback(async () => {
    const {
      data: { session },
      error,
    } = await supabaseClient.auth.getSession();

    if (error) {
      console.error("fail to resolve session key");
      resetUserInfo();
    }

    setAuthorized(Boolean(session?.user));
    setUserInfo(session?.user || null);
  }, []);

  //
  //
  //
  React.useEffect(() => {
    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        console.log(_event);
        setUserInfo(session?.user || null);
        setAuthorized(Boolean(session?.user));
      }
    );

    resolveSession();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, authorized }}>
      {children}
    </AuthContext.Provider>
  );
};

//
//
//
const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
