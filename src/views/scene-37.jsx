'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene37 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-37.jpg'}></img>
                <Narration narrative={ narrationText.scene37 } />
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene37 };
