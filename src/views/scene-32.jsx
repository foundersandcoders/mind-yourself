'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene32 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-32.jpg'}></img>
                <div>
                    { narration.scene32 }
                </div>
            </div>
        );
    }
});

export { Scene32 };
