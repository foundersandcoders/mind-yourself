'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene01 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-01.jpg'}></img>
                <div>
                    { narration.scene01 }
                </div>
            </div>
        );
    }
});

export { Scene01 };
