'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene14 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-14.jpg'}></img>
                <div>
                    { narration.scene14 }
                </div>
                <Hyperlink address="/scene15" buttonText="Next" />
            </div>
        );
    }
});

export { Scene14 };
