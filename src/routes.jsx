'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './app-container.jsx';


var Routes = (
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
);

export Routes;
