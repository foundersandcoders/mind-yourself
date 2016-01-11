'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene28 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-28.jpg'}></img>
                <div>
                    { narration.scene28 }
                </div>
                <Hyperlink address="/scene31" buttonText="Next" />
            </div>
        );
    }
});

export { Scene28 };
