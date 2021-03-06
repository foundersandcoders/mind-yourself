'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene02 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-02.jpg'}></img>
                <SpeechBubble scene={ "scene02" } />
                <Narration narrative={ narrationText.scene02 } />
                <Hyperlink address="/scene03" buttonText="Next" />
            </div>
        );
    }
});

export { Scene02 };
