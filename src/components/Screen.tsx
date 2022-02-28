import React, {FunctionComponent, PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {ThemeContextType} from '../theme-context';
import attachTheme from '../theme-consumer';

const Screen: FunctionComponent<PropsWithChildren<ThemeContextType>> = ({
  theme,
  children,
}) => (
  <SafeAreaView style={[styles.screen, {backgroundColor: theme.background}]}>
    <StatusBar hidden />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {children}
    </ScrollView>
  </SafeAreaView>
);

Screen.contextTypes;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default attachTheme(Screen);
