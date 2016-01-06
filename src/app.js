'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { AppContainer } from './app-container.jsx';
import { Landing } from './views/landing.jsx';
import { Scene01 } from './views/scene-01.jsx';
import { Scene02 } from './views/scene-02.jsx';
import { Scene03 } from './views/scene-03.jsx';
import { Scene04 } from './views/scene-04.jsx';
import { Scene05 } from './views/scene-05.jsx';
import { Scene06 } from './views/scene-06.jsx';
import { Scene07 } from './views/scene-07.jsx';
import { Scene08 } from './views/scene-08.jsx';
import { Scene09 } from './views/scene-09.jsx';
import { Scene10 } from './views/scene-10.jsx';
import { Scene11 } from './views/scene-11.jsx';
import { Scene12 } from './views/scene-12.jsx';
import { Scene13 } from './views/scene-13.jsx';
import { Scene14 } from './views/scene-14.jsx';
import { Scene15 } from './views/scene-15.jsx';
import { Scene16 } from './views/scene-16.jsx';
import { Scene17 } from './views/scene-17.jsx';
import { Scene18 } from './views/scene-18.jsx';
import { Scene19 } from './views/scene-19.jsx';
import { Scene20 } from './views/scene-20.jsx';
import { Scene21 } from './views/scene-21.jsx';
import { Scene22 } from './views/scene-22.jsx';
import { Scene23 } from './views/scene-23.jsx';
import { Scene24 } from './views/scene-24.jsx';
import { Scene25 } from './views/scene-25.jsx';
import { Scene26 } from './views/scene-26.jsx';
import { Scene27 } from './views/scene-27.jsx';
import { Scene28 } from './views/scene-28.jsx';
import { Scene29 } from './views/scene-29.jsx';
import { Scene30 } from './views/scene-30.jsx';
import { Scene31 } from './views/scene-31.jsx';
import { Scene32 } from './views/scene-32.jsx';
import { Scene33 } from './views/scene-33.jsx';
import { Scene34 } from './views/scene-34.jsx';
import { Scene35 } from './views/scene-35.jsx';
import { Scene36 } from './views/scene-36.jsx';
import { Scene37 } from './views/scene-37.jsx';
import Routes from './routes.jsx';

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route path="/" component={ AppContainer }>
            <IndexRoute component={ Landing } />
                <Route path="scene-01" component={ Scene01 } />
                <Route path="scene-02" component={ Scene02 } />
                <Route path="scene-03" component={ Scene03 } />
                <Route path="scene-04" component={ Scene04 } />
                <Route path="scene-05" component={ Scene05 } />
                <Route path="scene-06" component={ Scene06 } />
                <Route path="scene-07" component={ Scene07 } />
                <Route path="scene-08" component={ Scene08 } />
                <Route path="scene-09" component={ Scene09 } />
                <Route path="scene-10" component={ Scene10 } />
                <Route path="scene-11" component={ Scene11 } />
                <Route path="scene-12" component={ Scene12 } />
                <Route path="scene-13" component={ Scene13 } />
                <Route path="scene-14" component={ Scene14 } />
                <Route path="scene-15" component={ Scene15 } />
                <Route path="scene-16" component={ Scene16 } />
                <Route path="scene-17" component={ Scene17 } />
                <Route path="scene-18" component={ Scene18 } />
                <Route path="scene-19" component={ Scene19 } />
                <Route path="scene-20" component={ Scene20 } />
                <Route path="scene-21" component={ Scene21 } />
                <Route path="scene-22" component={ Scene22 } />
                <Route path="scene-23" component={ Scene23 } />
                <Route path="scene-24" component={ Scene24 } />
                <Route path="scene-25" component={ Scene25 } />
                <Route path="scene-26" component={ Scene26 } />
                <Route path="scene-27" component={ Scene27 } />
                <Route path="scene-28" component={ Scene28 } />
                <Route path="scene-29" component={ Scene29 } />
                <Route path="scene-30" component={ Scene30 } />
                <Route path="scene-31" component={ Scene31 } />
                <Route path="scene-32" component={ Scene32 } />
                <Route path="scene-33" component={ Scene33 } />
                <Route path="scene-34" component={ Scene34 } />
                <Route path="scene-35" component={ Scene35 } />
                <Route path="scene-36" component={ Scene36 } />
                <Route path="scene-37" component={ Scene37 } />
        </Route>
    </Router>

    ), document.getElementsByClassName("container")[0]
);
