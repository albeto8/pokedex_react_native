import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import usePokemonDetails from '../hooks/usePokemonDetails';
import PokemonDetailsCell from '../components/PokemonDetailsCell';
import PokemonDescription from '../components/PokemonDescription';
import PokemonStats from '../components/PokemonStats';

const DetailScreen = ({ navigation }) => {
    const pokemon = navigation.getParam('pokemon');
    const [getPokemonDetails, getPokemonDescription, pokemonDetail, pokemonDescription, errorMessage] = usePokemonDetails();

    if (!pokemonDetail) {
        getPokemonDetails(pokemon.name);
        return null;
    }

    if (!pokemonDescription) {
        getPokemonDescription(pokemon.name);
        return null;
    }

    return (
        <View style={styles.background}>
            <PokemonDetailsCell pokemon={pokemonDetail} />
            <PokemonDescription text={pokemonDescription} />
            <PokemonStats stats={pokemonDetail.stats} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    }
});

export default DetailScreen;