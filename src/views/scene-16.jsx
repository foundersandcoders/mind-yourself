'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene16 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-16.jpg'}></img>
                <div>
                    { narration.scene16 }
                </div>
                <div className="decision">
                    <p>What does Robert do next?</p>
                    <Hyperlink address="/scene17" buttonText="Argue with his teacher" />
                    <Hyperlink address="/scene29" buttonText="Apologise" />
                </div>
            </div>
        );
    }
});

export { Scene16 };
