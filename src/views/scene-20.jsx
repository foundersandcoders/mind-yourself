'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene20 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-20.jpg'}></img>
                <div>
                    { narration.scene20 }
                </div>
                <Hyperlink address="/scene21" buttonText="Next" />
            </div>
        );
    }
});

export { Scene20 };
