'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene20 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-20.jpg'}></img>
                <div>
                    { narration.scene20 }
                </div>
            </div>
        );
    }
});

export { Scene20 };
