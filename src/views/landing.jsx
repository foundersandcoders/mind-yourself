'use strict';

import React from 'react';
import { Link } from 'react-router';

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
