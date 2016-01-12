'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene24 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-24.jpg'}></img>
                <Narration narrative={ narrationText.scene24 } />
                <Hyperlink address="/scene37" buttonText="Next" />
            </div>
        );
    }
});

export { Scene24 };
