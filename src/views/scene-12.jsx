'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene12 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-12.jpg'}></img>
                <div>
                    { narration.scene12 }
                </div>
            </div>
        );
    }
});

export { Scene12 };
