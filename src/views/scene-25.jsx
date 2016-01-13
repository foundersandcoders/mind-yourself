'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene25 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-25.jpg'}></img>
                <SpeechBubble scene={ "scene25" } />
                <Narration narrative={ narrationText.scene25 } />
                <Hyperlink address="/scene26" buttonText="Next" />
            </div>
        );
    }
});

export { Scene25 };
