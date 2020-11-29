import * as pokemonActionTypes from '../actionTypes/types';

const INITIAL_STATE = {
    fetchError: {
        context: '',
        message: '',
    },
    gameSelected: null,
    gameSelectedData: null,
    games: null,
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case pokemonActionTypes.FETCH_GAME_DATA_ERROR:
            return { ...state, fetchError: { context: 'details', message: 'Ocorreu um erro na busca pelo game, por favor, tente novamente em instantes.' } };

        case pokemonActionTypes.FETCH_GAME_DATA_SUCCESS:
            return { ...state, fetchError: { context: '', message: '' }, gameSelectedData: payload };

        case pokemonActionTypes.FETCH_POKEMON_GAMES_ERROR:
            return { ...state, fetchError: { context: 'games', message: 'Ocorreu um erro na busca dos jogos, por favor, tente novamente em instantes.' } };

        case pokemonActionTypes.FETCH_POKEMON_GAMES_SUCCESS:
            return { ...state, fetchError: { context: '', message: '' }, games: payload };

        case pokemonActionTypes.SELECT_GAME_GENERATION:
            return { ...state, gameSelected: payload };

        default:
            break;
    }
    return state;
};
