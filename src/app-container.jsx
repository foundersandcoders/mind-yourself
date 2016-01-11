'use strict';

import React from 'react';

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
