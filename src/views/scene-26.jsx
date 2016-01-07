'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene26 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-26.jpg'}></img>
                <div>
                    { narration.scene26 }
                </div>
            </div>
        );
    }
});

export { Scene26 };
