import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('user') || '';
  });
  useEffect(() => {
    localStorage.setItem('user', user);
  }, [user]);
  const contextValue = {
    user,
    setUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}
