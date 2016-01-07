'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene29 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-29.jpg'}></img>
                <div>
                    { narration.scene29 }
                </div>
            </div>
        );
    }
});

export { Scene29 };
