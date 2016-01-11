'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene18 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-18.jpg'}></img>
                <div>
                    { narration.scene18 }
                </div>
                <div className="decision">
                    <p>What should Robert do to help himself feel better?</p>
                    <Hyperlink address="/scene19" buttonText="Nothing" />
                    <Hyperlink address="/scene20" buttonText="Notice what he is feeling" />
                </div>
            </div>
        );
    }
});

export { Scene18 };
