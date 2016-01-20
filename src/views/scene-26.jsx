'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene26 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-26.jpg'}></img>
                <SpeechBubble scene={ "scene26" } />
                <Narration narrative={ narrationText.scene26 } />
                <div className="decision">
                    <p>What should Robert do to help himself feel better?</p>
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene14" buttonText="Express his angry feelings" decision={ true } />
                    <Hyperlink address="/scene27" buttonText="Try soles of feet practice" decision={ true } />
                    <Hyperlink address="/scene30" buttonText="Do nothing" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene26 };
