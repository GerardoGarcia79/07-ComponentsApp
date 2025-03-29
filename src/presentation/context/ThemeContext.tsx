import React, {useState} from 'react';
import {createContext, PropsWithChildren} from 'react';
import {
  darkColors,
  desertSand,
  lightColors,
  ThemeColors,
} from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark' | 'desertSand';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors:
          currentTheme === 'light'
            ? lightColors
            : currentTheme === 'dark'
            ? darkColors
            : desertSand,
        isDark: currentTheme !== 'light' ? true : false,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
