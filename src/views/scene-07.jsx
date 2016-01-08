'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene07 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-07.jpg'}></img>
                <div>
                    { narration.scene07 }
                </div>
                <Link to="/scene08">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
});

export { Scene07 };
