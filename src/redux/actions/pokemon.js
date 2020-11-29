import axios from 'axios';
import * as pokemonActionTypes from '../actionTypes/types';

const baseURL = 'https://pokeapi.co/api/v2';

export const fetchGameGenerationData = (url) => async (dispatch) => {
    axios.get(url)
        .then(async (response) => {
            if (response.data) {
                const { pokemon_species: species } = response.data;
                const speciesData = await species.map(async (pokemon) => {
                    const { name } = pokemon;
                    return axios.get(`${baseURL}/pokemon/${name}`)
                        .then((pokemonResponse) => {
                            const {
                                abilities,
                                base_experience: experience,
                                sprites: { other },
                                stats,
                                weight,
                            } = pokemonResponse.data;
                            const pokemonImage = other['official-artwork'].front_default;
                            const [hp, attack, defense] = stats;
                            return {
                                name,
                                abilities: abilities.length,
                                experience,
                                photo: pokemonImage,
                                stats: {
                                    hp: hp.base_stat,
                                    attack: attack.base_stat,
                                    defense: defense.base_stat,
                                },
                                weight,
                            };
                        })
                        .catch(() => null);
                });
                const results = await Promise.all(speciesData);
                dispatch({
                    type: pokemonActionTypes.FETCH_GAME_DATA_SUCCESS,
                    payload: { ...response.data, pokemon_species: results },
                });
            } else {
                dispatch({
                    type: pokemonActionTypes.FETCH_GAME_DATA_ERROR,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: pokemonActionTypes.FETCH_GAME_DATA_ERROR,
            });
        });
};

export const fetchGamesGenerations = () => async (dispatch) => {
    axios.get(`${baseURL}/generation`)
        .then((response) => {
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

export const selectGameGeneration = (game) => async (dispatch) => {
    dispatch({
        type: pokemonActionTypes.SELECT_GAME_GENERATION,
        payload: game,
    });
};
