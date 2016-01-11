'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene11 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-11.jpg'}></img>
                <div>
                    { narration.scene11 }
                </div>
                <Hyperlink address="/scene12" buttonText="Next" />
            </div>
        );
    }
});

export { Scene11 };
