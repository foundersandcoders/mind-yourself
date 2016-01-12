'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene20 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-20.jpg'}></img>
                <Narration narrative={ narrationText.scene20 } />
                <Hyperlink address="/scene21" buttonText="Next" />
            </div>
        );
    }
});

export { Scene20 };
