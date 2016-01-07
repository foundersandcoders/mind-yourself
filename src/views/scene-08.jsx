'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene08 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-08.jpg'}></img>
                <div>
                    { narration.scene08 }
                </div>
            </div>
        );
    }
});

export { Scene08 };
