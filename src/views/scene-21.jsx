'use strict';

import React from 'react';
import { Hyperlink } from '../components/hyperlink.jsx';
import { Narration } from '../components/narration.jsx';
import narrationText from '../../assets/narrationText.json';

const Scene21 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-21.jpg'}></img>
                <div>
                    { narrationText.scene21 }
                </div>
                <div className="decision">
                    <p>What should he do to help himself feel better?</p>
                    <Hyperlink address="/scene19" buttonText="Keep going over the angry thoughts and feelings" />
                    <Hyperlink address="/scene24" buttonText="Ignore or hide his feelings" />
                    <Hyperlink address="/scene22" buttonText="Do breathing space" />
                </div>
            </div>
        );
    }
});

export { Scene21 };
