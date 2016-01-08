'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene06 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-06.jpg'}></img>
                <div>
                    { narration.scene06 }
                </div>
                <Link to="/scene07">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
});

export { Scene06 };
