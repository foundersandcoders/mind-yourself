'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BubbleText } from './bubble-text.jsx';
import files from '../../assets/files.json';
import $ from 'jquery';

const SpeechBubble = React.createClass({

    componentDidMount () {

        var self = this;
        setTimeout(function () {

            var bubbles = $('.bubble');

            self.revealBubbles(bubbles.length, 1);
        }, 310)

    },

    revealBubbles (bubbleNum, index) {

        var self = this;

        if (index > bubbleNum) {

            return;
        } else {

            this.appearance('.num' + index, bubbleNum, index);
            this.revealBubbles(bubbleNum, index + 1);
        }
    },

    appearance (classname, bubbleNum, i) {

        var self = this;
        var pair = $(classname);

        setTimeout(function () {

            console.log(pair);
            pair.removeClass("hidden");

            if (i === bubbleNum) {

                self.typeNarration();
            }

        }, 50 + i * 1600)
    },

    typeNarration () {

        console.log("typing narration");
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
                                <img key={i} className={ "hidden bubble bubble-" + this.props.scene + " num" + (i+1) } src={ bubble }></img>
                        )
                    })
                }
                <BubbleText text={ text } scene={ scene } />
            </div>
        );
    }
});

export { SpeechBubble };
