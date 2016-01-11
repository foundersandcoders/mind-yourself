'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene34 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-34.jpg'}></img>
                <div>
                    { narrationText.scene34 }
                </div>
                <div className="decision">
                    <Hyperlink address="/scene20" buttonText="Nothing" />
                    <Hyperlink address="/scene22" buttonText="Do breathing space" />
                </div>
            </div>
        );
    }
});

export { Scene34 };
