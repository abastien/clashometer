import React, {FunctionComponent, PropsWithChildren} from 'react';
import {ThemeContext} from './context';

const attachTheme = (
  WrappedComponent: FunctionComponent<PropsWithChildren<any>>,
) => {
  const WithTheme = (props: React.PropsWithChildren<any>) => (
    <ThemeContext.Consumer>
      {({theme, switchTheme}) => (
        <WrappedComponent theme={theme} switchTheme={switchTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
  WithTheme.WrappedComponent = WrappedComponent;
  return WithTheme;
};

export default attachTheme;
