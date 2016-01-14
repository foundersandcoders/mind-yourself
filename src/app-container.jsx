'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import StaticContainer from 'react-static-container';
import { createHistory, useBasename } from 'history';
import RouteCSSTransitionGroup from './route-css.jsx';






const AppContainer = React.createClass({

    render () {

        return (
            <div className="app">
                <RouteCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={ 500 } transitionLeaveTimeout={300}>
                        { this.props.children }
                </RouteCSSTransitionGroup>
            </div>
        );
    }
});

export { AppContainer };
