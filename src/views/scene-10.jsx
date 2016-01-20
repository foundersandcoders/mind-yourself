'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene10 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-10.jpg'}></img>
                <SpeechBubble scene={ "scene10" } />
                <Narration narrative={ narrationText.scene10 } />
                <div className="decision">
                    <p>What can Robert do to help himself feel better?</p>
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene25" buttonText="Do nothing" decision={ true } />
                    <Hyperlink address="/scene27" buttonText="Try soles of feet practice" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene10 };
