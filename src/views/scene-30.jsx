'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene30 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-30.jpg'}></img>
                <div>
                    { narrationText.scene30 }
                </div>
                <Hyperlink address="/scene32" buttonText="Next" />
            </div>
        );
    }
});

export { Scene30 };
