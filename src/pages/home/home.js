import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGamesGenerations } from '../../redux/actions/pokemon';
import './home.scss';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGamesGenerations());
    });

    return (
        <main className="home">
            Homepage
        </main>
    );
}
