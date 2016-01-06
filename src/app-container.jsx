'use strict';

import React from 'react';
import { Link } from 'react-router';

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
