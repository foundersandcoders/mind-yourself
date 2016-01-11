'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene27 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-27.jpg'}></img>
                <Narration narrative={ narrationText.scene27 } />
                <Hyperlink address="/scene28" buttonText="Next" />
            </div>
        );
    }
});

export { Scene27 };
