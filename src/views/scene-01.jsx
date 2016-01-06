'use strict';

import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Scene01 = React.createClass({

    render () {

        return(
            <div>
                <h1>This is Scene 01</h1>
            </div>
        );
    }
});

export { Scene01 };
