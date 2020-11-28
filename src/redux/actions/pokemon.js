import axios from 'axios';
import * as pokemonActionTypes from '../actionTypes/types';

const baseURL = 'https://pokeapi.co/api/v2';

export const fetchGamesGenerations = () => async (dispatch) => {
    axios.get(`${baseURL}/generation`)
        .then((response) => {
            console.log('result: ', response.data.results);
            dispatch({
                type: pokemonActionTypes.FETCH_POKEMON_GAMES_SUCCESS,
                payload: response.data.results,
            });
        })
        .catch(() => {
            dispatch({
                type: pokemonActionTypes.FETCH_POKEMON_GAMES_ERROR,
            });
        });
};
