import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameGenerationData, noGameSelected } from '../../redux/actions/pokemon';
import { pokemonRef } from '../../assets/utils/references/images';
import './gameDetails.scss';

import DetailCard from '../../components/cards/detail/detail';
import ErrorMessage from '../../components/error/error';
import Loader from '../../components/loader/loader';
import PokemonCard from '../../components/cards/pokemon/pokemon';

export default function GameDetails() {
    const [loading, setLoading] = useState(true);
    const gameSelected = useSelector((state) => state.PokemonReducer.gameSelected);
    const gameSelectedData = useSelector((state) => state.PokemonReducer.gameSelectedData);
    const fetchError = useSelector((state) => state.PokemonReducer.fetchError);
    const { context, message } = fetchError;
    const dispatch = useDispatch();
    useEffect(() => {
        if (gameSelected !== null) {
            const { url } = gameSelected;
            dispatch(fetchGameGenerationData(url));
        } else {
            const gameSelectedStored = localStorage.getItem('gameSelected');
            if (gameSelectedStored) {
                const { url } = JSON.parse(gameSelectedStored);
                dispatch(fetchGameGenerationData(url));
            } else dispatch(noGameSelected());
        }
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if (!loading) {
        if (context === 'details') {
            return (
                <ErrorMessage message={ message } />
            );
        }
        if (gameSelectedData !== null) {
            const { name } = gameSelected;
            const {
                main_region: { name: regionName },
                moves,
                pokemon_species: species,
                types,
                version_groups: versions,
            } = gameSelectedData;
            return (
                <main className="game-details">
                    <div className="game-details__header">
                        <img className="game-details__header__logo" src={ pokemonRef } alt="Pokémon Logo" loading="lazy" />
                        <h1 className="game-details__header__title">{ name.toUpperCase() }</h1>
                    </div>
                    <div className="game-details__information">
                        <DetailCard title="region" data={ regionName } />
                        <DetailCard title="types" data={ types.length.toString() } />
                        <DetailCard title="moves" data={ moves.length.toString() } />
                        <DetailCard title="versions" data={ versions.length.toString() } />
                    </div>
                    <div className="game-details__pokemon-list">
                        <div className="game-details__pokemon-list__title-container">
                            <h1 className="game-details__pokemon-list__title-container__title">{ `Lista de Pokémons (${species.length})` }</h1>
                        </div>
                        <div className="game-details__pokemon-list__content">
                            { species.map((specie) => {
                                if (specie) {
                                    return (<PokemonCard pokemon={ specie } />);
                                }
                                return null;
                            }) }
                        </div>
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
