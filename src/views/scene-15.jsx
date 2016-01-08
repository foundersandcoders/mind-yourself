'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene15 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-15.jpg'}></img>
                <div>
                    { narration.scene15 }
                </div>
                <Hyperlink address="/scene16" buttonText="Next" />
            </div>
        );
    }
});

export { Scene15 };
