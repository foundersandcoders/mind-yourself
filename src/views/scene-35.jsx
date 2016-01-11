'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narrationText.json';

const Scene35 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-35.jpg'}></img>
                <div>
                    { narration.scene35 }
                </div>
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene35 };
