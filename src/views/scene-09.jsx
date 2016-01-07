'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene09 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-09.jpg'}></img>
                <div>
                    { narration.scene09 }
                </div>
            </div>
        );
    }
});

export { Scene09 };
