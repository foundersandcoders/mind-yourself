'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene26 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-26.jpg'}></img>
                <div>
                    { narration.scene26 }
                </div>
                <div className="decision">
                    <p>What should Robert do to help himself feel better?</p>
                    <Hyperlink address="/scene14" buttonText="Express his angry feelings to the others" />
                    <Hyperlink address="/scene27" buttonText="Focus on the soles of his feet" />
                    <Hyperlink address="/scene30" buttonText="Nothing" />
                </div>
            </div>
        );
    }
});

export { Scene26 };
