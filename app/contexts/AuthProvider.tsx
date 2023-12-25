import React from 'react';

import { AuthResponse, User } from '@supabase/supabase-js';

import { supabaseClient } from 'app/utils/supabase';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  authorized: boolean;
  userInfo: User | null;
  accessToken: string | null;
  signOut: () => Promise<void>;
  signUp?: (
    email: string,
    password: string,
    prefix: string
  ) => Promise<AuthResponse>;
}

//
//
//
const AuthContext = React.createContext<AuthContextType>({
  authorized: false,
  accessToken: null,
  userInfo: null,
  signOut: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
});

//
//
//
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authorized, setAuthorized] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<User | null>(null);
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  //
  //
  //
  const resetUserInfo = () => {
    setAuthorized(false);
    setUserInfo(null);
    setAccessToken(null);
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
      console.error('fail to resolve session key');
      resetUserInfo();
    }

    setAuthorized(Boolean(userInfo?.role === 'authenticated'));
    setAuthorized(Boolean(session?.user?.role === 'authenticated'));
    setAccessToken(session?.access_token || null);
  }, []);

  //
  //
  //
  const signUp = async (email: string, password: string, prefix: string) => {
    return await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${prefix}email-check/${email}`,
      },
    });
  };

  //
  //
  //
  const signOut = async () => {
    try {
      await supabaseClient.auth.signOut().then(res => {
        if (res.error) {
          throw new Error('fail to sign out');
        }

        resetUserInfo();
      });
    } catch (err) {
      console.error(err);
    }
  };

  //
  //
  //
  React.useEffect(() => {
    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        console.log(_event);
        setUserInfo(session?.user || null);
        setAuthorized(Boolean(session?.user?.role === 'authenticated'));
        setAccessToken(session?.access_token || null);
      }
    );

    resolveSession();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ userInfo, authorized, accessToken, signUp, signOut }}
    >
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
