'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene25 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-25.jpg'}></img>
                <div>
                    { narration.scene25 }
                </div>
                <Hyperlink address="/scene26" buttonText="Next" />
            </div>
        );
    }
});

export { Scene25 };
