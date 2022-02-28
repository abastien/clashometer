import React, {FunctionComponent, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import attachTheme from './Theme/consumer';
import {ThemeContextType} from './Theme/context';

const Section: FunctionComponent<
  PropsWithChildren<ThemeContextType & {title: String}>
> = ({theme, title, children}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: theme.foreground}]}>
        {title}
      </Text>
      <Text style={[styles.sectionDescription, {color: theme.foreground}]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default attachTheme(Section);
