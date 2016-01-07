'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene06 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-06.jpg'}></img>
                <div>
                    { narration.scene06 }
                </div>
            </div>
        );
    }
});

export { Scene06 };
