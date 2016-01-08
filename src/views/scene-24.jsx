'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene24 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-24.jpg'}></img>
                <div>
                    { narration.scene24 }
                </div>
            </div>
        );
    }
});

export { Scene24 };
