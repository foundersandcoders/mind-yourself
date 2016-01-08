'use strict';

import React from 'react/dist/react-with-addons';
import { test } from 'tape';
import { shallowRender } from '../utils/shallow-render.js';
import { Scene08 } from '../../src/views/scene-08.jsx';

test('Integration: decision links behave as expected', (t) => {

    const rendered = shallowRender(Scene08);

    console.log(rendered.props.children);
    t.end();
});
