'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene36 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-36.jpg'}></img>
                <div>
                    { narration.scene36 }
                </div>
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene36 };
