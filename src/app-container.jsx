'use strict';

import React from 'react';
import StaticContainer from 'react-static-container';
import RouteCSSTransitionGroup from './route-css.jsx';

const AppContainer = React.createClass({

    render () {

        var transitionConfig = {

            enter: "animated",
            enterActive: "slideInRight",
            leave: "animated",
            leaveActive: "slideOutLeft"
        };

        return (
            <div className="app">
                <RouteCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        { this.props.children }
                </RouteCSSTransitionGroup>
            </div>
        );
    }
});

export { AppContainer };
