'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';

const Landing = React.createClass({

    render () {

        return  (
            <div>
                <img className="scene" src={'./assets/scenes/TITLE.jpg'} />
                <Hyperlink start={ true } address="/scene01" buttonText="Start the story!" />
            </div>
        );
    }
});

export { Landing };
