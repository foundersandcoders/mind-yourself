'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene35 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-35.jpg'}></img>
                <div>
                    { narration.scene35 }
                </div>
            </div>
        );
    }
});

export { Scene35 };
