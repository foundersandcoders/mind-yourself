'use strict';

import React from 'react';
import { Link } from 'react-router';
import Landing from './views/landing.jsx';
import Scene01 from './views/scene-01.jsx';

const AppContainer = React.createClass({

    render () {

        return (
            <div className="app">
                <h1>This is a permanent view.</h1>
                { this.props.children }
            </div>
        );
    }
});

export { AppContainer };
