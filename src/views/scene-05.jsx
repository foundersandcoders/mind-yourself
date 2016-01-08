'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene05 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-05.jpg'}></img>
                <div>
                    { narration.scene05 }
                </div>
                <Link to="/scene06">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
});

export { Scene05 };
