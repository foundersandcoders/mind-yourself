'use strict';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const Hyperlink = React.createClass({

    render () {

        var start = this.props.start;
        var decision = this.props.decision;

        let btnClass = classNames({
            'button': !this.props.decision,
            'start': start,
            'decision-button': decision
        });

        return (
            <Link className={ btnClass } to={ this.props.address }>
                <div>
                    { this.props.buttonText }
                </div>
            </Link>
        );
    }
});

export { Hyperlink };
