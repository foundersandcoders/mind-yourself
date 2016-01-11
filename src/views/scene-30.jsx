'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene30 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-30.jpg'}></img>
                <div>
                    { narration.scene30 }
                </div>
                <Hyperlink address="/scene32" buttonText="Next" />
            </div>
        );
    }
});

export { Scene30 };
