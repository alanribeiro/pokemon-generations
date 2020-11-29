import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { pokemonRef } from '../../assets/utils/references/images';
import './error.scss';

function ErrorMessage(props) {
    const { message } = props;
    const history = useHistory();

    const backToHome = () => {
        history.replace('/');
    };

    return (
        <main className="error">
            <div className="error__content">
                <img className="error__content__logo" src={ pokemonRef } alt="Logo do Pokémon" loading="lazy" onClick={ () => backToHome() } />
                <span className="error__content__message">{ message }</span>
            </div>
        </main>
    );
}

ErrorMessage.defaultProps = {
    message: '',
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;
