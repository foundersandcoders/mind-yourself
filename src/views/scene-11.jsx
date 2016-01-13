'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene11 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-11.jpg'}></img>
                <SpeechBubble scene={ "scene11" } />
                <Narration narrative={ narrationText.scene11 } />
                <Hyperlink address="/scene12" buttonText="Next" />
            </div>
        );
    }
});

export { Scene11 };
