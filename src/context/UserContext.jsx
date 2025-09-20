import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null); // dados do GitHub
  const [theme, setTheme] = useState("light"); // light ou dark

  return (
    <UserContext.Provider value={{ userData, setUserData, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}
