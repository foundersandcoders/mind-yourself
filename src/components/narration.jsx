'use strict';

import React from 'react';

const Narration = React.createClass({

    render () {

        return(
            <div className="narration">
                { this.props.narrative }
            </div>
        )
    }

});

export { Narration };
