'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene09 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-09.jpg'}></img>
                <Narration narrative={ narrationText.scene09 } />
                <Hyperlink address="/scene10" buttonText="Next" />
            </div>
        );
    }
});

export { Scene09 };
