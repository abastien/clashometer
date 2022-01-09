/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import ParamScreen from './src/screens/Param';

const App = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen name="home" component={HomeScreen} options={{title: 'Home'}} />
        <Screen
          name="params"
          component={ParamScreen}
          options={{title: 'Params'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
