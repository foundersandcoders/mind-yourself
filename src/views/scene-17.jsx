'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene17 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-17.jpg'}></img>
                <div>
                    { narration.scene17 }
                </div>
            </div>
        );
    }
});

export { Scene17 };
