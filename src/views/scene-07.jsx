'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene07 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-07.jpg'}></img>
                <div>
                    { narration.scene07 }
                </div>
                <Hyperlink address="/scene08" buttonText="Next" />
            </div>
        );
    }
});

export { Scene07 };
