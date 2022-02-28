import React, {FunctionComponent} from 'react';
import {Button, View} from 'react-native';
import Section from '../components/Section';
import Screen from '../components/Screen';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const HomeScreen: FunctionComponent = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Screen>
      <View>
        <Section title="Welcome to the Clashometer">
          <Button
            title="Go to params"
            onPress={() => navigation.navigate('params')}
          />
        </Section>
      </View>
    </Screen>
  );
};

export default HomeScreen;
