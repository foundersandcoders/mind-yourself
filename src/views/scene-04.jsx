'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene04 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-04.jpg'}></img>
                <div>
                    { narration.scene04 }
                </div>
                <Link to="/scene05">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
});

export { Scene04 };
