import React, {FunctionComponent} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {COLORS} from '../components/Theme/context';

import Section from '../components/Section';
import Screen from '../components/Screen';

const ParamScreen: FunctionComponent = () => {
  return (
    <Screen>
      <View>
        <Section title="Manage your application">
          Here you can configure the Clashometer
        </Section>
        <TextInput style={styles.input} multiline editable />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 80,
    marginHorizontal: 25,
    marginVertical: 15,
    paddingHorizontal: 7,
    paddingVertical: 0,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
  },
});

export default ParamScreen;
