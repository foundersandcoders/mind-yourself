'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene32 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-32.jpg'}></img>
                <SpeechBubble scene={ "scene32" } />
                <Narration narrative={ narrationText.scene32 } />
                <div className="decision">
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene17" buttonText="Blame the teacher" decision={ true } />
                    <Hyperlink address="/scene20" buttonText="Notice what he is feeling" decision={ true } />
                    <Hyperlink address="/scene33" buttonText="Check what his body needs" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene32 };
