import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import usePokemons from '../hooks/usePokemons';
import PokemonItem from '../components/PokemonItem';

const MainScreen = () => {
    const [offset, setOffset] = useState(0);
    const [getPokemonList, pokemonList, errorMessage] = usePokemons();

    const onEndReached = () => {
        getPokemonList(offset + 20)
        setOffset(offset + 20)
    }

    const renderItem = ({ item, index }) => {
        return (
            <PokemonItem
                index={index}
                item={item}
            />
        )
    }
    return (
        <View>
            <FlatList
                data={pokemonList}
                keyExtractor={(result, index) => index}
                renderItem={renderItem}
                numColumns={3}
                onEndReachedThreshold={0.5}
                onEndReached={() => onEndReached()}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MainScreen;