'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene14 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-14.jpg'}></img>
                <div>
                    { narrationText.scene14 }
                </div>
                <Hyperlink address="/scene15" buttonText="Next" />
            </div>
        );
    }
});

export { Scene14 };
