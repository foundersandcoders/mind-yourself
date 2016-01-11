'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene01 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-01.jpg'}></img>
                <div>
                    { narration.scene01 }
                </div>
                <Hyperlink address="/scene02" buttonText="Next" />
            </div>
        );
    }
});

export { Scene01 };
