'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene03 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-03.jpg'}></img>
                <Narration narrative={ narrationText.scene03 } />
                <Hyperlink address="/scene04" buttonText="Next" />
            </div>
        );
    }
});

export { Scene03 };
