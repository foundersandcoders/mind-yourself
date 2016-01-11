'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene33 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-33.jpg'}></img>
                <div>
                    { narration.scene33 }
                </div>
                <Hyperlink address="/scene34" buttonText="Next" />
            </div>
        );
    }
});

export { Scene33 };