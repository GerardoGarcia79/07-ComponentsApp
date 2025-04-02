import React, {useEffect, useState} from 'react';
import {createContext, PropsWithChildren} from 'react';
import {
  darkColors,
  desertSand,
  lightColors,
  ThemeColors,
} from '../../config/theme/theme';
import {Appearance, AppState, useColorScheme} from 'react-native';

type ThemeColor = 'light' | 'dark' | 'desertSand';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log({nextAppState});
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
