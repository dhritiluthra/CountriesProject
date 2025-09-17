import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);  // default false first

  useEffect(() => {
    const saved = localStorage.getItem("IsDarkMode");
    if (saved) {
      setIsDark(JSON.parse(saved));
    }
  }, []);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
};
