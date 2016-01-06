'use strict';

import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Landing = React.createClass({

    render () {

        return  (
            <div>
                <h1>Mind Yourself</h1>
                <h2 onTouchTap={ this.handleClick }>Start the story!</h2>
            </div>
        );
    }
});

export { Landing };
