'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene05 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-05.jpg'}></img>
                <Narration narrative={ narrationText.scene05 } />
                <Hyperlink address="/scene06" buttonText="Next" />
            </div>
        );
    }
});

export { Scene05 };
