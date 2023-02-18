'use client';

import { getUser } from '@/hooks/useGetUser';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

type TState = {
  inversSide: boolean;
  isVolume: boolean;
  isBlitz: boolean;
  leverage: number;
};
type UseAuth = {
  user: UserDataState | null;
  signin: ({ username, password }: { username: string; password: string }) => void;
  signout: () => void;
  isLoading: boolean;
};

type UserDataState = {
  email: string;
  password: string;
  name: string;
  role: 'worker' | 'manager';
  id: string;
};

export const AuthContext = createContext({} as UseAuth);

export const useAuth = (): UseAuth => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserDataState | null>(null);

  useEffect(() => {
    if (!user) {
      const localUser = window.localStorage.getItem('user');
      if (localUser) {
        setUser(JSON.parse(localUser));
        setIsLoading(false);
      }
    }
    return () => {
      setIsLoading(true);
    };
  }, []);

  const signin = ({ username, password }: { username: string; password: string }) => {
    console.log('signin', username, password);
    if (!username || !password) return;

    const userData = getUser(username);
    if (!userData) return;

    setUser(userData);
    window.localStorage.setItem('user', JSON.stringify(userData));
    setIsLoading(false);
  };

  const signout = () => {
    setUser(null);
    window.localStorage.removeItem('user');
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
