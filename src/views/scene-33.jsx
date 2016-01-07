'use strict';

import React from 'react';
import { Link } from 'react-router';

const Scene33 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-33.jpg'}></img>
                <div>
                    { narration.scene33 }
                </div>
            </div>
        );
    }
});

export { Scene33 };
