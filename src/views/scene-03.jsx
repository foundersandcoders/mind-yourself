'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene03 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-03.jpg'}></img>
                <div>
                    { narration.scene03 }
                </div>
                <Link to="/scene04">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
});

export { Scene03 };
