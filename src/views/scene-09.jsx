'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene09 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-09.jpg'}></img>
                <div>
                    { narration.scene09 }
                </div>
                <Hyperlink address="/scene10" buttonText="Next" />
            </div>
        );
    }
});

export { Scene09 };
