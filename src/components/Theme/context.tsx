import {Context, createContext} from 'react';

export enum COLORS {
  BLACK = '#000000',
  DARK = '#222222',
  WHITE = '#ffffff',
  LIGHT = '#eeeeee',
}

export type ThemeContextType = {
  theme: {
    background: COLORS;
    foreground: COLORS;
  };
  switchTheme: Function;
};

export enum COLOR_SCHEME {
  LIGHT = 'light',
}

export const Themes = {
  light: {
    foreground: COLORS.BLACK,
    background: COLORS.LIGHT,
  },
  dark: {
    foreground: COLORS.WHITE,
    background: COLORS.DARK,
  },
};

export const switchTheme: Function = () => {};

export const ThemeContext: Context<ThemeContextType> = createContext({
  theme: Themes.light,
  switchTheme,
});
