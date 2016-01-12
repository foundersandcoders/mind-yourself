'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene16 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-16.jpg'}></img>
                <Narration narrative={ narrationText.scene16 } />
                <div className="decision">
                    <p>What does Robert do next?</p>
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene17" buttonText="Argue with his teacher" decision={ true } />
                    <Hyperlink address="/scene29" buttonText="Apologise" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene16 };
