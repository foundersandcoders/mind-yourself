'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene13 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-13.jpg'}></img>
                <SpeechBubble scene={ "scene13" } />
                <Narration narrative={ narrationText.scene13 } />
                <div className="decision-buttons">
                    <Hyperlink address="/scene14" buttonText="Argue with his friends" decision={ true } />
                    <Hyperlink address="/scene25" buttonText="Forget all about it" decision={ true }/>
                </div>
            </div>
        );
    }
});

export { Scene13 };
