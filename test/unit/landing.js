'use strict';

import React from 'react/dist/react-with-addons';
import { test } from 'tape';
import { shallowRender } from '../utils/shallow-render.js';
import { Landing } from '../../src/views/landing.jsx';


test('Unit: Landing renders as expected', (t) => {

    const rendered = shallowRender(Landing);

    t.equal(rendered.type, 'div', 'Is of type "div"');
    t.equal(rendered.props.children.length, 2, 'Has two child components');
    t.end();
});
