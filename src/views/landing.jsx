'use strict';

import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Landing = React.createClass({

    render () {

        return  (
            <div>
                <h1>Mind Yourself</h1>
                <Link to="/scene-01">
                    <h2>Start the story!</h2>
                </Link>        
            </div>
        );
    }
});

export { Landing };
