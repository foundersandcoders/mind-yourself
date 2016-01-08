'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene31 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-31.jpg'}></img>
                <div>
                    { narration.scene31 }
                </div>
            </div>
        );
    }
});

export { Scene31 };
