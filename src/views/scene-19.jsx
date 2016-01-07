'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene19 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-19.jpg'}></img>
                <div>
                    { narration.scene19 }
                </div>
            </div>
        );
    }
});

export { Scene19 };
