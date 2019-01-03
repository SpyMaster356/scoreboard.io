import {createBrowserHistory} from 'history';
import React, {Component, ComponentType} from 'react';
import {Route, Switch} from 'react-router';
import {Appbar} from './layout/appbar/appbar';
import {AboutPage} from './pages/about/about-page';
import {ScoreHistoryPage} from './pages/score-history/score-history-page';
import {ScoresPage} from './pages/scores/scores-page';
import PlayerRouter from './player/players.router';
import {connect} from './redux-connect';

export const history = createBrowserHistory();

interface OwnProps {
}

interface StateProps {
}

interface Props extends OwnProps, StateProps {
}

@connect<StateProps, {}, OwnProps>()
class AppRouter extends Component<Props> {
  render() {
    return (
      <div>
        <Appbar curLocation={location} />

        <Switch>
          <Route exact path="/" component={ScoresPage} />
          <Route exact path="/scores/history" component={ScoreHistoryPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default (AppRouter as any) as ComponentType<OwnProps>;
