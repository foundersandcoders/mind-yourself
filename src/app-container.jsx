'use strict';

import React from 'react';
import { Link } from 'react-router';

const AppContainer = React.createClass({

    render () {

        return (
            <div className="app">
                { this.props.children }
            </div>
        );
    }
});

export { AppContainer };
