'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene30 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-30.jpg'}></img>
                <div>
                    { narration.scene30 }
                </div>
            </div>
        );
    }
});

export { Scene30 };
