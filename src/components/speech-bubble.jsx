'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BubbleText } from './bubble-text.jsx';
import files from '../../assets/files.json';

const SpeechBubble = React.createClass({

    componentDidMount () {

        var node = ReactDOM.findDOMNode(this);

    },

    render () {

        var scene = this.props.scene;
        var speechBubbles = files[scene].bubbles;
        var text = files[scene].bubbleText;

        return (
            <div className="bubble-container">

                {
                    speechBubbles.map((bubble, i) => {

                        return(
                                <img key={i} className={ "bubble-" + this.props.scene + " num" + (i+1) } src={ bubble }></img>
                        )
                    })
                }
                <BubbleText text={ text } scene={ scene } />
            </div>
        );
    }
});

export { SpeechBubble };
