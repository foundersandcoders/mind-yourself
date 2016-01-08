'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene14 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-14.jpg'}></img>
                <div>
                    { narration.scene14 }
                </div>
            </div>
        );
    }
});

export { Scene14 };
