'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene19 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-19.jpg'}></img>
                <div>
                    { narration.scene19 }
                </div>
                <Hyperlink address="/scene36" buttonText="Next" />
            </div>
        );
    }
});

export { Scene19 };
