'use strict';

import React from 'react';
import Router from 'react-router';
import AppContainer from './app-container.jsx';


var Routes = (
    <Router.route name="app-container" handler={ AppContainer } path="*" />
);

export { Routes };
