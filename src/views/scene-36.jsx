'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene36 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-36.jpg'}></img>
                <SpeechBubble scene={ "scene36" } />
                <Narration narrative={ narrationText.scene36 } />
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene36 };
