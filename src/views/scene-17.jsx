'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene17 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-17.jpg'}></img>
                <div>
                    { narration.scene17 }
                </div>
                <Hyperlink address="/scene18" buttonText="Next" />
            </div>
        );
    }
});

export { Scene17 };
