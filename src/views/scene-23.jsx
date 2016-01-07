'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene23 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-23.jpg'}></img>
                <div>
                    { narration.scene23 }
                </div>  
            </div>
        );
    }
});

export { Scene23 };
