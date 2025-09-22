import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");

  return (
    <UserContext.Provider value={{ userData, setUserData, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}
