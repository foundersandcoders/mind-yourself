'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene13 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-13.jpg'}></img>
                <div>
                    { narration.scene13 }
                </div>
            </div>
        );
    }
});

export { Scene13 };
