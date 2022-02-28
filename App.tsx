/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FunctionComponent} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Themes,
  switchTheme,
  COLOR_SCHEME,
} from './src/components/Theme/context';
import ThemeProvider from './src/components/Theme/provider';

import HomeScreen from './src/screens/Home';
import ParamScreen from './src/screens/Param';
import {ColorSchemeName, useColorScheme} from 'react-native';

const App: FunctionComponent = () => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <ThemeProvider
      value={{
        theme: Themes[colorScheme ?? COLOR_SCHEME.LIGHT],
        switchTheme,
      }}>
      <NavigationContainer>
        <Navigator initialRouteName="home">
          <Screen
            name="home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Screen
            name="params"
            component={ParamScreen}
            options={{title: 'Params'}}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
