'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene05 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-05.jpg'}></img>
                <div>
                    { narration.scene05 }
                </div>
                <Hyperlink address="/scene06" buttonText="Next" />
            </div>
        );
    }
});

export { Scene05 };
