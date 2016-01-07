'use strict';

import React from 'react/dist/react-with-addons';
import { test } from 'tape';
import { shallowRender } from '../shallow-render.js';
import { Scene01 } from '../../src/views/scene-01.jsx';

test.only('Unit: Scene01', (t) => {

    const rendered = shallowRender(Scene01);
    
    t.equal(rendered.type, 'div', 'Scene01 is of type "div"');
    t.end();
});
