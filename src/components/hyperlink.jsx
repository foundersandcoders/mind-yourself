'use strict';

import React from 'react';
import { Link } from 'react-router';

const Hyperlink = React.createClass({

    render () {

        return (
            <Link to={ this.props.address }>
                <button>{ this.props.buttonText }</button>
            </Link>
        );
    }
});

export { Hyperlink };
