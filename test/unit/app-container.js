'use strict';

import React from 'react/dist/react-with-addons';
import { test } from 'tape';
import { shallowRender } from '../utils/shallow-render.js';
import { AppContainer } from '../../src/app-container.jsx';


test('Unit: AppContainer', (t) => {

    const rendered = shallowRender(AppContainer);

    t.equal(rendered.type, 'div', 'AppContainer is of type "div"');
    t.end();
});
