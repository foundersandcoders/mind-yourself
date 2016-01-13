'use strict';

import React from 'react';
import classNames from 'classnames';
import files from '../../assets/files.json';

const SpeechBubble = React.createClass({

    render () {

        let scene = this.props.scene;

        var speechBubbles = files[scene].bubbles;

        return (
            <div>
                {
                    speechBubbles.map((bubble, i) => {
                        
                        return <img key={i} className="bubble" src={ bubble }></img>
                    })
                }
            </div>
        );
    }
});

export { SpeechBubble };
