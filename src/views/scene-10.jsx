'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene10 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-10.jpg'}></img>
                <div>
                    { narration.scene10 }
                </div>
                <div className="decision">
                    <p>What can Robert do to help himself feel better?</p>
                    <Hyperlink address="/scene25" buttonText="Nothing" />
                    <Hyperlink address="/scene27" buttonText="Focus on the soles of his feet" />
                </div>
            </div>
        );
    }
});

export { Scene10 };
