'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import narration from '../../assets/narration.json';

const Scene13 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-13.jpg'}></img>
                <div>
                    { narration.scene13 }
                </div>
                <div className="decision">
                    <p>Does he argue with the others in his team?</p>
                    <Hyperlink address="/scene14" buttonText="Yes, he argues" />
                    <Hyperlink address="/scene25" buttonText="No, he doesn't argue" />
                </div>
            </div>
        );
    }
});

export { Scene13 };
