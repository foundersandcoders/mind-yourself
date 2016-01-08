'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene21 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-21.jpg'}></img>
                <div>
                    { narration.scene21 }
                </div>
            </div>
        );
    }
});

export { Scene21 };
