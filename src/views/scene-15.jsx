'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene15 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-15.jpg'}></img>
                <SpeechBubble scene={ "scene15" } />
                <Narration narrative={ narrationText.scene15 } />
                <Hyperlink address="/scene16" buttonText="Next" />
            </div>
        );
    }
});

export { Scene15 };
