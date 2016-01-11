'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene37 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-37.jpg'}></img>
                <div>
                    { narration.scene37 }
                </div>
                <Hyperlink address="/" buttonText="Finish" />
            </div>
        );
    }
});

export { Scene37 };
