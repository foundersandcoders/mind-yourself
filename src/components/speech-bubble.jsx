'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BubbleText } from './bubble-text.jsx';
import files from '../../assets/files.json';
import $ from 'jquery';

const SpeechBubble = React.createClass({

    componentDidMount () {

        var bubbles = $('.bubble');
        console.log(bubbles);

        function revealBubbles() {

            for (var i = 1; i <= bubbles.length; i++) {

                appearance(i);
            }
        }

        function appearance(i) {
            console.log(i);
            var pair = $('.num'+i);

            setTimeout(function() {

                console.log($('.num'+i));
                pair.removeClass('hidden'); console.log(i);
            }, 700 + i * 1500);
        }

        revealBubbles();
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
