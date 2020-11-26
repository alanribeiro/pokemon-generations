import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import './routes.scss';

import Home from '../pages/home/home';

export default function Routes() {
    return (
        <main className="router">
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/home" component={ Home } />
                </Switch>
            </Router>
        </main>
    );
}
