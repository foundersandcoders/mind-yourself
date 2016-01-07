'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene10 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-10.jpg'}></img>
                <div>
                    { narration.scene10 }
                </div>
            </div>
        );
    }
});

export { Scene10 };
