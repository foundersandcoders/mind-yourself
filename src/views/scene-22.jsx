'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene22 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-22.jpg'}></img>
                <Narration narrative={ narrationText.scene22 } />
                <Hyperlink address="/scene23" buttonText="Next" />
            </div>
        );
    }
});

export { Scene22 };
