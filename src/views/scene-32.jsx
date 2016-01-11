'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene32 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-32.jpg'}></img>
                <div>
                    { narrationText.scene32 }
                </div>
                <div className="decision">
                    <Hyperlink address="/scene17" buttonText="Blame the teacher" />
                    <Hyperlink address="/scene20" buttonText="Notice what he is feeling" />
                    <Hyperlink address="/scene33" buttonText="Check what his body needs" />
                </div>
            </div>
        );
    }
});

export { Scene32 };
