'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene04 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-04.jpg'}></img>
                <Narration narrative={ narrationText.scene04 } />
                <Hyperlink address="/scene05" buttonText="Next" />
            </div>
        );
    }
});

export { Scene04 };
