'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene37 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-37.jpg'}></img>
                <div>
                    { narration.scene37 }
                </div>
            </div>
        );
    }
});

export { Scene37 };
