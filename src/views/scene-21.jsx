'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import { SpeechBubble } from '../components/speech-bubble.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene21 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-21.jpg'}></img>
                <SpeechBubble scene={ "scene21" } />
                <Narration narrative={ narrationText.scene21 } />
                <div className="decision">
                    <p>What should he do to help himself feel better?</p>
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene19" buttonText="Keep going over things" decision={ true } />
                    <Hyperlink address="/scene24" buttonText="Ignore or hide his feelings" decision={ true } />
                    <Hyperlink address="/scene22" buttonText="Try a breathing space" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene21 };
