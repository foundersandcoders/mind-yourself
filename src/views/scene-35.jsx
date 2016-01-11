'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene35 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-35.jpg'}></img>
                <div>
                    { narrationText.scene35 }
                </div>
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene35 };
