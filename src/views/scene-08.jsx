'use strict';

import React from 'react';
import { Link } from 'react-router';
import narration from '../../public/assets/narration.json';

const Scene08 = React.createClass({

    render () {

        return(
            <div>
                <img className="scene" src={'./assets/scenes/IMG-08.jpg'}></img>
                <div>
                    { narration.scene08 }
                </div>
                <div className="decision">
                    <p>Should he go to line up?</p>
                    <Link to="/scene11">
                        <button>No, he's annoyed</button>
                    </Link>
                    <Link to="/scene25">
                        <button>Yes, but he's annoyed</button>
                    </Link>
                    <Link to="/scene09">
                        <button>Yes, willingly</button>
                    </Link>
                </div>
            </div>
        );
    }
});

export { Scene08 };
