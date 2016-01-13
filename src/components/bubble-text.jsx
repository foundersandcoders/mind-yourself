'use strict';

import React from 'react';
import files from '../../assets/files.json';

const BubbleText = React.createClass({

    render () {

        var textArray = this.props.text;
        var scene = this.props.scene;

        return (
            <div className="bubble-text-container">
                {
                    textArray.map((text, i) => {

                        return <div key={i} className={ "bubble-text-" + scene + " num" + (i+1) }>{ text }</div>
                    })
                }
             </div>
         );
    }
});

export { BubbleText };
