'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene28 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-28.jpg'}></img>
                <Narration narrative={ narrationText.scene28 } />
                <Hyperlink address="/scene31" buttonText="Next" />
            </div>
        );
    }
});

export { Scene28 };
