'use client';

import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';
import { createContext, useContext } from 'react';

import type { User } from '@barba-brutal/core';

import useLocalStorage from '../hooks/useLocalStorage';

interface IUserContext {
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
  user: null | User;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [user, setUser] = useLocalStorage<IUserContext['user']>('user');

  const login: IUserContext['login'] = (user) => {
    setUser(user);
  };

  const logout: IUserContext['logout'] = () => {
    setUser(null);

    router.push('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading: false,
        login,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
