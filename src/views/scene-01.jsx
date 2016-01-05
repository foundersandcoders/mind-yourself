'use strict';

import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class Scene01 extends React.Component {

    render () {

        return(
            <div>
                <h1>This is Scene 01</h1>
            </div>
        );
    }
};

export default Scene01;
