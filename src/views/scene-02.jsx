'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene02 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-02.jpg'}></img>
                <div>
                    { narration.scene02 }
                </div>
                <Hyperlink address="/scene03" buttonText="Next" />
            </div>
        );
    }
});

export { Scene02 };
