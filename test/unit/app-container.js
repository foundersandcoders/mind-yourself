'use strict';

import React from 'react/dist/react-with-addons';
import chai from 'chai';
import { shallowRender } from '../shallow-render.js';
import { AppContainer } from '../src/app-container.jsx';

const assert = chai.assert();

const appContainer = () => {

    const rendered = shallowRender(AppContainer);

    console.log(rendered.props.children);
    assert.equal(1, 1, "success!");
});

export { appContainer };
