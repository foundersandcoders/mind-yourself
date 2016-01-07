'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene27 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-27.jpg'}></img>
                <div>
                    { narration.scene27 }
                </div>
            </div>
        );
    }
});

export { Scene27 };
