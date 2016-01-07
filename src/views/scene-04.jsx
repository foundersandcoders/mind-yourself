'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene04 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-04.jpg'}></img>
                <div>
                    { narration.scene01 }
                </div>
            </div>
        );
    }
});

export { Scene04 };
