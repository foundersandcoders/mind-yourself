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
                    <Hyperlink address="/scene20" buttonText="Think about his feelings" decision={ true } />
                    <Hyperlink address="/scene33" buttonText="Do something for himself" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene32 };
