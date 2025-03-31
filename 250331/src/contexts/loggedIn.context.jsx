import { createContext, useContext, useState } from "react";

const LoggedIncontext = createContext();

export const useLoggedIn = () => useContext(LoggedIncontext);

export function LoggedInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogIn = () => setIsLoggedIn((prev) => !prev);

  const value = { isLoggedIn, toggleLogIn };

  return (
    <LoggedIncontext.Provider value={value}>
      {children}
    </LoggedIncontext.Provider>
  );
}
