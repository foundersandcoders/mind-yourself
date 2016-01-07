'use strict';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './app-container.jsx';


var Routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ AppContainer }>
            <IndexRoute component={ Landing } />
                <Route path="scene01" component={ Scene01 } />
                <Route path="scene02" component={ Scene02 } />
                <Route path="scene03" component={ Scene03 } />
                <Route path="scene04" component={ Scene04 } />
                <Route path="scene05" component={ Scene05 } />
                <Route path="scene06" component={ Scene06 } />
                <Route path="scene07" component={ Scene07 } />
                <Route path="scene08" component={ Scene08 } />
                <Route path="scene09" component={ Scene09 } />
                <Route path="scene10" component={ Scene10 } />
                <Route path="scene11" component={ Scene11 } />
                <Route path="scene12" component={ Scene12 } />
                <Route path="scene13" component={ Scene13 } />
                <Route path="scene14" component={ Scene14 } />
                <Route path="scene15" component={ Scene15 } />
                <Route path="scene16" component={ Scene16 } />
                <Route path="scene17" component={ Scene17 } />
                <Route path="scene18" component={ Scene18 } />
                <Route path="scene19" component={ Scene19 } />
                <Route path="scene20" component={ Scene20 } />
                <Route path="scene21" component={ Scene21 } />
                <Route path="scene22" component={ Scene22 } />
                <Route path="scene23" component={ Scene23 } />
                <Route path="scene24" component={ Scene24 } />
                <Route path="scene25" component={ Scene25 } />
                <Route path="scene26" component={ Scene26 } />
                <Route path="scene27" component={ Scene27 } />
                <Route path="scene28" component={ Scene28 } />
                <Route path="scene29" component={ Scene29 } />
                <Route path="scene30" component={ Scene30 } />
                <Route path="scene31" component={ Scene31 } />
                <Route path="scene32" component={ Scene32 } />
                <Route path="scene33" component={ Scene33 } />
                <Route path="scene34" component={ Scene34 } />
                <Route path="scene35" component={ Scene35 } />
                <Route path="scene36" component={ Scene36 } />
                <Route path="scene37" component={ Scene37 } />
        </Route>
    </Router>
);

export Routes;
