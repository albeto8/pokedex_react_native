import { useState } from 'react';
import api from '../api/pokedexApi';

export default () => {
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const getPokemonDetails = async (pokemonName) => {  
        console.log('Api pokemon detail call');
        try {
            const response = await api.get(`/pokemon/${pokemonName}`);
            setPokemonDetail(response.data);
        } catch (err) {
            setErrorMessage('Something went wrong with getPokemonDetails')
            console.log(err)
        }
    }

    const getPokemonDescription = async (pokemonName) => {  
        console.log('Api pokemon description call');
        try {
            const response = await api.get(`/pokemon-species/${pokemonName}`);
            setPokemonDescription(response.data.flavor_text_entries[0].flavor_text);
        } catch (err) {
            setErrorMessage('Something went wrong with getPokemonDescription')
            console.log(err)
        }
    }

    return [getPokemonDetails, getPokemonDescription, pokemonDetail, pokemonDescription, errorMessage];
};