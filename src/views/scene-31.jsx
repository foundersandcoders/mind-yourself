'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene31 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-31.jpg'}></img>
                <div>
                    { narrationText.scene31 }
                </div>
                <div className="decision">
                    <Hyperlink address="/scene30" buttonText="Nothing" />
                    <Hyperlink address="/scene33" buttonText="Check what his body needs" />
                </div>
            </div>
        );
    }
});

export { Scene31 };
