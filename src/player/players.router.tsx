import React, {ComponentType} from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Routes from '../routes';
import PlayerCreatePage from './pages/create.page';
import PlayerListPage from './pages/index.page';
import PlayerDetailsPage from './pages/view.page';

const PlayersRouter:ComponentType<{}> = () => (
  <Switch>
    <Route exact path={Routes.Players.index()} component={PlayerListPage} />
    <Route exact path={Routes.Players.create()} component={PlayerCreatePage} />
    <Route exact path={Routes.Players.view()} component={PlayerDetailsPage} />
    <Redirect to={Routes.Players.index()} />
  </Switch>
);

export default PlayersRouter;
