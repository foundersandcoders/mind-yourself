'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene11 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-11.jpg'}></img>
                <div>
                    { narration.scene11 }
                </div>
            </div>
        );
    }
});

export { Scene11 };
