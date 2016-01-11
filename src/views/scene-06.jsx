'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene06 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-06.jpg'}></img>
                <div>
                    { narrationText.scene06 }
                </div>
                <Hyperlink address="/scene07" buttonText="Next" />
            </div>
        );
    }
});

export { Scene06 };
