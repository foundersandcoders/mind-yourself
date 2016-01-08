'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene18 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-18.jpg'}></img>
                <div>
                    { narration.scene18 }
                </div>
            </div>
        );
    }
});

export { Scene18 };
