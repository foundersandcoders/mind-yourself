'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene15 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-15.jpg'}></img>
                <div>
                    { narration.scene15 }
                </div>
            </div>
        );
    }
});

export { Scene15 };
