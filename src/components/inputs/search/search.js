import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debouncer } from '../../../assets/utils/helpers/functions';
import { setFilteredPokemons } from '../../../redux/actions/pokemon';
import './search.scss';

export default function Search() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.PokemonReducer.gameSelectedData);

    const filterPokemons = (keyEvent) => {
        const { target: { value } } = keyEvent;
        if (pokemons && value !== '') {
            const { pokemon_species: pokemonSpecies } = pokemons;
            const filtered = pokemonSpecies.filter((pokemon) => pokemon.name.includes(value.toLowerCase()));
            dispatch(setFilteredPokemons(filtered));
        } else dispatch(setFilteredPokemons([]));
    };

    return (
        <input className="search" type="text" placeholder="Busque pelo nome do Pokémon" onKeyDown={ (event) => debouncer(filterPokemons, 1000, [event]) } />
    );
}
