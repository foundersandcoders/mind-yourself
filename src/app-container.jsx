'use strict';

import React from 'react';
import Landing from './views/landing.jsx';

class AppContainer extends React.Component {

    handleClick () {

        console.log("clicked!");
    }

    render () {
        return <Landing />
    }
};

export default AppContainer;
