import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PokemonDetailsCell = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <PokemonDetailsHeader pokemon={pokemon} />
    </View>
  );
};

const PokemonDetailsHeader = ({ pokemon }) => {
  return (
    <View style={styles.pokemonHeaderContainer}>
      <Image
        style={{ width: 80, height: 80 }}
        source={{ uri: pokemon.sprites.front_default }}
        resizeMode='stretch'
      />
      <View>
        <Text style={styles.textStyle}>#{`${pokemon.order}`.padStart(3, '0')}</Text>
        <Text style={styles.textName}>{pokemon.name}</Text>
        <Text style={styles.textMargin}>
          <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Height: </Text>
          <Text style={styles.textStyle}>{pokemon.height / 10}m</Text>
        </Text>
        <Text style={styles.textMargin}>
          <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Weight: </Text>
          <Text style={styles.textStyle}>{pokemon.weight / 10}m</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: 'white'
  },
  textName: {
    textTransform: 'capitalize',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  textStyle: {
    color: '#4A4A4A',
    fontSize: 12
  },
  textMargin: {
    marginTop: 5,
    marginBottom: 5
  }
});

export default PokemonDetailsCell;