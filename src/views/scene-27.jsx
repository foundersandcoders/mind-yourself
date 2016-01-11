'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene27 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-27.jpg'}></img>
                <div>
                    { narration.scene27 }
                </div>
                <Hyperlink address="/scene28" buttonText="Next" />
            </div>
        );
    }
});

export { Scene27 };
