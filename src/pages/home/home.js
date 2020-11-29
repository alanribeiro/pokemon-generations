import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesGenerations } from '../../redux/actions/pokemon';
import { logoRef } from '../../assets/utils/references/images';
import './home.scss';

import ErrorMessage from '../../components/error/error';
import GameCard from '../../components/cards/game/game';
import Loader from '../../components/loader/loader';

export default function Home() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const games = useSelector((state) => state.PokemonReducer.games);
    const fetchError = useSelector((state) => state.PokemonReducer.fetchError);
    const { context, message } = fetchError;

    useEffect(() => {
        dispatch(fetchGamesGenerations());
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if (!loading) {
        if (context === 'games') {
            return (
                <ErrorMessage message={ message } />
            );
        }
        if (games !== null) {
            return (
                <main className="home">
                    <div className="home__logo-container">
                        <img className="home__logo-container__logo" src={ logoRef } alt="Pokemon Generations Logo" loading="lazy" />
                    </div>
                    <div className="home__title-container">
                        <h1 className="home__title-container__title">Selecione uma geração de jogos Pokémon</h1>
                    </div>
                    <div className="home__game-cards-container">
                        { games.length > 0 ? games.map((game) => <GameCard game={ game } />) : null }
                    </div>
                </main>
            );
        }
        return (
            <Loader />
        );
    }
    return (
        <Loader />
    );
}
