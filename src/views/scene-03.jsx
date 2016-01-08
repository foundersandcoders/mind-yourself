'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../public/assets/narration.json';

const Scene03 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-03.jpg'}></img>
                <div>
                    { narration.scene03 }
                </div>
                <Hyperlink address="/scene04" buttonText="Next" />
            </div>
        );
    }
});

export { Scene03 };
