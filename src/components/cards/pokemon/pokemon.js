import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.scss';

function PokemonCard(props) {
    const { pokemon } = props;
    const {
        name,
        abilities,
        experience,
        photo,
        stats,
        weight,
    } = pokemon;
    const commonColor = '#F76A6A';
    const commonFont = 'Roboto-Light';
    const commonFontColor = '#FFF';
    const commonFontSize = '10px';
    return (
        <main className="pokemon-card">
            <div className="pokemon-card__pokemon">
                <img className="pokemon-card__pokemon__image" src={ photo } alt="Imagem do Pokémon" loading="lazy" />
                <span className="pokemon-card__pokemon__name">{ name.toUpperCase() }</span>
            </div>
            <div className="pokemon-card__data">
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Peso: </span>
                    <span className="pokemon-card__data__stat__data-label">{ weight }</span>
                </div>
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Experiência: </span>
                    <span className="pokemon-card__data__stat__data-label">{ experience }</span>
                </div>
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Habilidades: </span>
                    <span className="pokemon-card__data__stat__data-label">{ abilities }</span>
                </div>
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Vida: </span>
                    <div style={ { borderRadius: '7px', height: '15px', width: `${stats.hp > 100 ? 100 : stats.hp}%`, backgroundColor: commonColor, fontFamily: commonFont, fontSize: commonFontSize, color: commonFontColor, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>{ stats.hp }</div>
                </div>
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Ataque: </span>
                    <div style={ { borderRadius: '7px', height: '15px', width: `${stats.attack > 100 ? 100 : stats.attack}%`, backgroundColor: commonColor, fontFamily: commonFont, fontSize: commonFontSize, color: commonFontColor, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>{ stats.attack }</div>
                </div>
                <div className="pokemon-card__data__stat">
                    <span className="pokemon-card__data__stat__label">Defesa: </span>
                    <div style={ { borderRadius: '7px', height: '15px', width: `${stats.defense > 100 ? 100 : stats.defense}%`, backgroundColor: commonColor, fontFamily: commonFont, fontSize: commonFontSize, color: commonFontColor, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>{ stats.defense }</div>
                </div>
            </div>
        </main>
    );
}

PokemonCard.defaultProps = {
    pokemon: {},
};

PokemonCard.propTypes = {
    pokemon: PropTypes.objectOf(PropTypes.object),
};

export default PokemonCard;
