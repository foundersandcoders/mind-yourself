'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene32 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-32.jpg'}></img>
                <div>
                    { narration.scene32 }
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
