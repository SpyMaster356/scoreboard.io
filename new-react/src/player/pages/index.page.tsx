import {push} from 'connected-react-router';
import {List} from 'immutable';
import React, {Component, ComponentType} from 'react';
import {match} from 'react-router';
import {connect} from '../../redux-connect';
import Routes from '../../routes';
import Player from '../player.model';
import PlayerList from '../views/player-list.view';

interface OwnProps {
  readonly match:match;
}

interface StateProps {
  readonly players:List<Player>;
}

interface DispatchProps {
  readonly push:(route:string) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

@connect<StateProps, DispatchProps, OwnProps>(
  state => ({
    players: state.players.toList(),
  }),
  {push},
)
class IndexPage extends Component<Props> {
  constructor(props:Props) {
    super(props);

    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
  }

  onAddPlayerClick() {
    this.props.push(Routes.Players.create());
  }

  render() {
    return (
      <div>
        Players
        <PlayerList players={this.props.players} />
        <button onClick={this.onAddPlayerClick}>
          Add Player
        </button>
      </div>
    );
  }
}

export default (IndexPage as any) as ComponentType<OwnProps>;


