'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene19 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-19.jpg'}></img>
                <Narration narrative={ narrationText.scene19 } />
                <Hyperlink address="/scene36" buttonText="Next" />
            </div>
        );
    }
});

export { Scene19 };
