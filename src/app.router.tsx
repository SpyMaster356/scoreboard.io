import {createBrowserHistory} from 'history';
import React, {Component, ComponentType} from 'react';
import {Route} from 'react-router';
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
        <Route path="/players" component={PlayerRouter} />
      </div>
    );
  }
}

export default (AppRouter as any) as ComponentType<OwnProps>;
