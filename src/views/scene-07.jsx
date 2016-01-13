'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene07 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-07.jpg'}></img>
                <SpeechBubble scene={ "scene07" } />
                <Narration narrative={ narrationText.scene07 } />
                <Hyperlink address="/scene08" buttonText="Next" />
            </div>
        );
    }
});

export { Scene07 };
