'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene22 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-22.jpg'}></img>
                <div>
                    { narration.scene22 }
                </div>
                <Hyperlink address="/scene23" buttonText="Next" />
            </div>
        );
    }
});

export { Scene22 };
