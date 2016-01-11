'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene12 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-12.jpg'}></img>
                <div>
                    { narration.scene12 }
                </div>
                <Hyperlink address="/scene13" buttonText="Next" />
            </div>
        );
    }
});

export { Scene12 };
