import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textStyle = {color: isDarkMode ? 'white' : 'black'};

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, textStyle]}>{title}</Text>
      <Text style={[styles.sectionDescription, textStyle]}>{children}</Text>
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

export default Section;
