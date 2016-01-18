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

        console.log("this scene", this.props);
        var cornerCaseScene21 = this.props.scene !== undefined ? "cornerCaseScene21" : '';
        console.log("cc", cornerCaseScene21);
        return (
            <Link className={ btnClass } to={ this.props.address }>
                <div className={ "button-casing " + cornerCaseScene21 }>
                    { this.props.buttonText }
                </div>
            </Link>
        );
    }
});

export { Hyperlink };
