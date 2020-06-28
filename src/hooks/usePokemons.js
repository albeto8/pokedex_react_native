import { useState, useEffect } from 'react';
import api from '../api/pokedexApi';

export default () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getPokemonList = async (offset) => {  
        console.log('Api called at: ' + offset);
             
        try {
            const response = await api.get('/pokemon', {
                params: {
                    limit: 20,
                    offset
                }
            });
            setPokemonList(pokemonList.concat(...response.data.results));
        } catch (err){
            setErrorMessage('Something went wrong')
            console.log(err)
        }
    }

    useEffect(() => {
        getPokemonList(0)
    }, []);

    return [getPokemonList, pokemonList, errorMessage];
};