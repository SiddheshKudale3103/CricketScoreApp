import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScoreDisplay = ({country, average}) => {
  return (
    <View style={styles.container}>
      <Text>{country}</Text>
      <Text>{average >= 0 ? average : '-'}</Text>
      <View style={[styles.bar, {width: average >= 0 ? 2 * average : 0}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  bar: {
    height: 10,
    backgroundColor: 'blue',
    marginTop: 5,
    width: 0,
  },
});

export default ScoreDisplay;
