'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { AppContainer } from './app-container.jsx';
import { Landing } from './views/landing.jsx';
import { Scene01 } from './views/scene-01.jsx';
// import Routes from './routes.jsx';


ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ AppContainer }>
            <IndexRoute component={ Landing } />
            <Route path="scene-01" component={ Scene01 } />
        </Route>
    </Router>

    ), document.getElementsByClassName("container")[0]
);
