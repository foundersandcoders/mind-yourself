'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene31 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-31.jpg'}></img>
                <SpeechBubble scene={ "scene31" } />
                <Narration narrative={ narrationText.scene31 } />
                <div className="decision">
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene30" buttonText="There's nothing" decision={ true } />
                    <Hyperlink address="/scene33" buttonText="There must be something" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene31 };
