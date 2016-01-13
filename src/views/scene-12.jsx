'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene12 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-12.jpg'}></img>
                <SpeechBubble scene={ "scene12" } />
                <Narration narrative={ narrationText.scene12 } />
                <Hyperlink address="/scene13" buttonText="Next" />
            </div>
        );
    }
});

export { Scene12 };
