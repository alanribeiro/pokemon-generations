import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { pokemonRef } from '../../../assets/utils/references/images';
import { selectGameGeneration } from '../../../redux/actions/pokemon';
import './game.scss';

function GameCard(props) {
    const { game } = props;
    const { name, url } = game;
    const [generation, number] = name.split('-');
    const resultTitle = `${generation} ${number}`;
    const history = useHistory();
    const dispatch = useDispatch();

    const redirectToDetails = (gameSelected) => {
        dispatch(selectGameGeneration(gameSelected));
        history.push('/gameDetails');
    };

    return (
        <main className="game-card" onClick={ () => redirectToDetails({ name: resultTitle, url }) }>
            <div className="game-card__header">
                <img className="game-card__header__logo" src={ pokemonRef } alt="Pokemon Logo" loading="lazy" />
                <div className="game-card__header__ball">
                    <div className="game-card__header__ball__inner" />
                </div>
            </div>
            <div className="game-card__body">
                <span className="game-card__body__title">{ resultTitle.toUpperCase() }</span>
            </div>
        </main>
    );
}

GameCard.defaultProps = {
    game: {},
};

GameCard.propTypes = {
    game: PropTypes.objectOf(PropTypes.object),
};

export default GameCard;
