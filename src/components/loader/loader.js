import React from 'react';
import './loader.scss';

export default function Loader() {
    return (
        <main className="loader">
            <div className="loader__pokeball" />
            <span className="loader__message">Carregando...</span>
        </main>
    );
}
