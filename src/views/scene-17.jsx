'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene17 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-17.jpg'}></img>
                <Narration narrative={ narrationText.scene17 } />
                <Hyperlink address="/scene18" buttonText="Next" />
            </div>
        );
    }
});

export { Scene17 };
