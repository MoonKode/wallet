/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, settheme] = useState<ITheme>(() => {
    const savedTheme = localStorage.getItem('@my_wallet:theme');
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    return dark;
  });
  const toggleTheme = () => {
    if (theme.title === 'light') {
      settheme(dark);
      localStorage.setItem('@my_wallet:theme', JSON.stringify(dark));
    } else {
      settheme(light);
      localStorage.setItem('@my_wallet:theme', JSON.stringify(light));
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
