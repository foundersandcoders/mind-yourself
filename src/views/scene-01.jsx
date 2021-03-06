'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene01 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-01.jpg'}></img>
                <SpeechBubble scene={ "scene01" } />
                <Narration narrative={ narrationText.scene01 } />
                <Hyperlink address="/scene02" buttonText="Next" />
            </div>
        );
    }
});

export { Scene01 };
