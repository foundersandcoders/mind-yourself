'use strict';

import React from 'react';
import files from '../../assets/files.json';

const SpeechBubble = React.createClass({

    render () {

        var scene = this.props.scene;
        var speechBubbles = files[scene].bubbles;

        return (
            <div>
                {
                    speechBubbles.map((bubble, i) => {
                        console.log(this.props.scene);
                        return <img key={i} className={ "bubble " + this.props.scene } src={ bubble }></img>
                    })
                }
            </div>
        );
    }
});

export { SpeechBubble };
