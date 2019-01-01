import React, {Component, ComponentType} from "react";
import {match} from "react-router";
import {Link} from "react-router-dom";

import {connect} from "../../redux-connect";
import Player, {nullPlayer} from "../player.model";
import PlayerFormView from "../views/player-form.view";
import {destroyPlayer, DestroyPlayerOptions, updatePlayer, UpdatePlayerOptions} from "../players.actions";
import Routes from "../../routes";
import {push} from "connected-react-router";

interface RouteParams {
  readonly playerId: string;
}

interface OwnProps {
  readonly match: match<RouteParams>
}

interface StateProps {
  readonly playerId: number;
  readonly player: Player;
}

interface DispatchProps {
  push: (route: string) => void;
  updatePlayer: (data: UpdatePlayerOptions) => void;
  destroyPlayer: (data: DestroyPlayerOptions) => void;
}

interface Props extends OwnProps, DispatchProps, StateProps {
}

@connect<StateProps, DispatchProps, OwnProps>(
  (state, props) => ({
    playerId: parseInt(props.match.params.playerId),
    player: state.players.get(props.match.params.playerId, nullPlayer),
  }),
  {push, updatePlayer, destroyPlayer}
)
class ViewPage extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.onDeletePlayerClick = this.onDeletePlayerClick.bind(this);
  }

  static renderPlayerNotFound() {
    return (
      <div>
        Player not found
      </div>
    )
  }

  onPlayerChange(player: Player) {
    this.props.updatePlayer({player})
  }

  onDeletePlayerClick() {
    this.props.destroyPlayer({player: this.props.player});
    this.props.push(Routes.Players.index());
  }

  renderPlayerFound() {
    return (
      <div>
        <PlayerFormView player={this.props.player} onPlayerChange={this.onPlayerChange} />
        <button onClick={this.onDeletePlayerClick}>
          Remove Player
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          Player View {this.props.match.params.playerId}
        </div>
        <div>
          <Link to={Routes.Players.index()}>&lt;&lt; Back</Link>
        </div>
        {
          this.props.player === nullPlayer
            ? ViewPage.renderPlayerNotFound()
            : this.renderPlayerFound()
        }
      </div>
    );
  }
}

export default (ViewPage as any) as ComponentType<OwnProps>
