'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene34 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-34.jpg'}></img>
                <Narration narrative={ narrationText.scene34 } />
                <div className="decision">
                </div>
                <div className="decision-buttons">
                    <Hyperlink address="/scene20" buttonText="Nothing" decision={ true } />
                    <Hyperlink address="/scene22" buttonText="Do breathing space" decision={ true } />
                </div>
            </div>
        );
    }
});

export { Scene34 };
