import React from 'react';
import PropTypes from 'prop-types';
import { pokemonRef } from '../../../assets/utils/references/images';
import './game.scss';

function GameCard(props) {
    const { title } = props;
    const [generation, number] = title.split('-');
    const resultTitle = `${generation} ${number}`;

    return (
        <main className="game-card">
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
    title: '',
};

GameCard.propTypes = {
    title: PropTypes.string,
};

export default GameCard;
