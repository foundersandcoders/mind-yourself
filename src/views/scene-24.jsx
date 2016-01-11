'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene24 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-24.jpg'}></img>
                <div>
                    { narration.scene24 }
                </div>
                <Hyperlink address="/scene37" buttonText="Next" />
            </div>
        );
    }
});

export { Scene24 };
