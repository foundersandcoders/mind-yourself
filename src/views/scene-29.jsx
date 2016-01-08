'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene29 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-29.jpg'}></img>
                <div>
                    { narration.scene29 }
                </div>
                <Hyperlink address="/scene30" buttonText="Next" />
            </div>
        );
    }
});

export { Scene29 };
