import React from 'react';
import { View} from 'react-native';
import Section from '../components/Section';
import Screen from '../components/Screen';

const ParamScreen: React.FC = () => {
  return (
    <Screen>
      <View>
        <Section title="Manage your application">
          Here you can configure the Clashometer
        </Section>
      </View>
    </Screen>
  );
};

export default ParamScreen;
