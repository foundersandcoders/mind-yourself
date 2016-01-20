'use strict';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const Hyperlink = React.createClass({

    render () {

        var start = this.props.start;
        var decision = this.props.decision;
        var test = this.props.test;

        let btnClass = classNames({
            'button': !decision && !start,
            'start': start,
            'decision-button': decision
        });

        var textButtonOverflow = this.props.scene !== undefined ? "text-button-overflow" : '';

        return (
            <Link className={ btnClass } to={ this.props.address }>
                <div className={ "button-casing " + textButtonOverflow }>
                    { this.props.buttonText }
                </div>
            </Link>
        );
    }
});

export { Hyperlink };
