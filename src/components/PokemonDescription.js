import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonDescription = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white'
  },
  textStyle: {
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 12
  }
});

export default PokemonDescription;