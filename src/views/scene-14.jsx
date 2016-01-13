'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene14 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-14.jpg'}></img>
                <SpeechBubble scene={ "scene14" } />
                <Narration narrative={ narrationText.scene14 } />
                <Hyperlink address="/scene15" buttonText="Next" />
            </div>
        );
    }
});

export { Scene14 };
