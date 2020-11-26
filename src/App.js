import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Routes from './routing/routes';

export default function App() {
    return (
        <Provider store={ store }>
            <Routes />
        </Provider>
    );
}
