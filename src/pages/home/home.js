import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesGenerations } from '../../redux/actions/pokemon';
import { logoRef } from '../../assets/utils/references/images';
import './home.scss';

import GameCard from '../../components/cards/game/game';

export default function Home() {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.PokemonReducer.games);

    useEffect(() => {
        dispatch(fetchGamesGenerations());
    }, []);

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
    return null;
}
