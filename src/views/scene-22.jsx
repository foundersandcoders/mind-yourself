'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene22 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-22.jpg'}></img>
                <div>
                    { narration.scene22 }
                </div>
            </div>
        );
    }
});

export { Scene22 };
