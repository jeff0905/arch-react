import React from 'react';

import { Route, Switch } from 'react-router';

import PageA from './pages/a/PageA';
import PageB from './pages/b/PageB';

const routes = (
    <div>
        hello....
        <Switch>
            <Route exact path="/" component={PageA} />
            <Route  path="/b" component={PageB} />
        </Switch>
    </div>
)
export default routes;