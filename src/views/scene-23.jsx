'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene23 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-23.jpg'}></img>
                <Narration narrative={ narrationText.scene23 } />
                <Hyperlink address="/scene35" buttonText="Next" />
            </div>
        );
    }
});

export { Scene23 };
