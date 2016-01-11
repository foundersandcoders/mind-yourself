'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene08 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-08.jpg'}></img>
                <div>
                    { narrationText.scene08 }
                </div>
                <div className="decision">
                    <p>Should he go to line up?</p>
                    <Hyperlink address="/scene11" buttonText="No, he's annoyed" />
                    <Hyperlink address="/scene25" buttonText="Yes, but he's annoyed" />
                    <Hyperlink address="/scene09" buttonText="Yes, willingly" />
                </div>
            </div>
        );
    }
});

export { Scene08 };
