import * as pokemonActionTypes from '../actionTypes/types';

const INITIAL_STATE = {
    fetchError: {
        context: '',
        message: '',
    },
    games: null,
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case pokemonActionTypes.FETCH_POKEMON_GAMES_ERROR:
            return { ...state, fetchError: { context: 'games', message: 'Ocorreu um erro na busca dos jogos, por favor, tente novamente em instantes.' } };

        case pokemonActionTypes.FETCH_POKEMON_GAMES_SUCCESS:
            return { ...state, fetchError: { context: '', message: '' }, games: payload };

        default:
            break;
    }
    return state;
};
