'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene28 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-28.jpg'}></img>
                <div>
                    { narration.scene28 }
                </div>
            </div>
        );
    }
});

export { Scene28 };
