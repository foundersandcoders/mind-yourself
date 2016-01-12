'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene13 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-13.jpg'}></img>
                <Narration narrative={ narrationText.scene13 } />
                <div className="decision">
                    <p>Does he argue with the others in his team?</p>
                    <div className="decision-buttons">        
                        <Hyperlink address="/scene14" buttonText="Yes, he argues" />
                        <Hyperlink address="/scene25" buttonText="No, he doesn't argue" />
                    </div>
                </div>
            </div>
        );
    }
});

export { Scene13 };
