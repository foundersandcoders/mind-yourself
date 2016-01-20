'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene18 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-18.jpg'}></img>
                <SpeechBubble scene={ "scene18" } />
                <Narration narrative={ narrationText.scene18 } />
                <div className="decision">
                    <p>What should Robert do to help himself feel better?</p>
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene19" buttonText="There's nothing he can do" decision={ true } />
                    <Hyperlink address="/scene20" buttonText="Think about his feelings" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene18 };
