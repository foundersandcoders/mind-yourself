'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene17 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-17.jpg'}></img>
                <SpeechBubble scene={ "scene17" } />
                <Narration narrative={ narrationText.scene17 } />
                <Hyperlink address="/scene18" buttonText="Next" />
            </div>
        );
    }
});

export { Scene17 };
