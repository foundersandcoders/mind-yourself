'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene02 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-02.jpg'}></img>
                <div>
                    { narration.scene02 }
                </div>
            </div>
        );
    }
});

export { Scene02 };
