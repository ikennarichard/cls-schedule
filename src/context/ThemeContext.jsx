/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 