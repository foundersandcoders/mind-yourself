'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene16 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-16.jpg'}></img>
                <div>
                    { narration.scene16 }
                </div>
            </div>
        );
    }
});

export { Scene16 };
