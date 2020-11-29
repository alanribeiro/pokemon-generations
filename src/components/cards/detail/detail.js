import React from 'react';
import PropTypes from 'prop-types';
import {
    regionRef,
    movesRef,
    typesRef,
    versionsRef,
} from '../../../assets/utils/references/images';
import './detail.scss';

function DetailCard(props) {
    const { title, data } = props;

    const detailImage = (detail) => {
        const imageReferences = {
            region: regionRef,
            moves: movesRef,
            types: typesRef,
            versions: versionsRef,
        };
        return imageReferences[detail];
    };

    const detailTitle = (detail) => {
        const titles = {
            region: 'Região',
            moves: 'Golpes',
            types: 'Tipos de Pokémons',
            versions: 'Versões',
        };
        return titles[detail];
    };

    return (
        <main className="detail-card">
            <div className="detail-card__header">
                <img className="detail-card__header__image" src={ detailImage(title) } alt="Ícone do detalhe do Jogo" loading="lazy" />
                <span className="detail-card__header__title">{ detailTitle(title) }</span>
            </div>
            <div className="detail-card__body">
                <span className="detail-card__body__data">{ data.toUpperCase() }</span>
            </div>
        </main>
    );
}

DetailCard.defaultProps = {
    data: '',
    title: '',
};

DetailCard.propTypes = {
    data: PropTypes.string,
    title: PropTypes.string,
};

export default DetailCard;
