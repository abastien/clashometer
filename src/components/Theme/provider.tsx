import React, {FunctionComponent, PropsWithChildren} from 'react';
import {ThemeContext, ThemeContextType} from './context';

const ThemeProvider: FunctionComponent<
  PropsWithChildren<{value: ThemeContextType}>
> = ({value: {theme, switchTheme}, children}) => (
  <ThemeContext.Provider value={{theme, switchTheme}}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
