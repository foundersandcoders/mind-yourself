'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene08 = React.createClass({

    render () {

        return(
            <div className="decision-scene">
                <img className="scene" src={'./assets/scenes/IMG-08.jpg'}></img>
                <div className="bubble-container-wrapper"></div>
                <SpeechBubble scene={ "scene08" } />
                <Narration narrative={ narrationText.scene08 } />
                <div className="decision-buttons">
                    <Hyperlink address="/scene11" buttonText="No, he's annoyed" decision={ true } />
                    <Hyperlink address="/scene25" buttonText="Yes, but he's annoyed" decision={ true } />
                    <Hyperlink address="/scene09" buttonText="Yes, willingly" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene08 };
