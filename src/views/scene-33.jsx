'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene33 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-33.jpg'}></img>
                <div>
                    { narrationText.scene33 }
                </div>
                <Hyperlink address="/scene34" buttonText="Next" />
            </div>
        );
    }
});

export { Scene33 };
