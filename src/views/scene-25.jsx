'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene25 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-25.jpg'}></img>
                <div>
                    { narration.scene25 }
                </div>
            </div>
        );
    }
});

export { Scene25 };
