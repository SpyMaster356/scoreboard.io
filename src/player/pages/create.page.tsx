import React, {Component, ComponentType} from "react";
import {Link} from "react-router-dom";

import {connect} from "../../redux-connect";
import Player from "../player.model";
import PlayerFormView from "../views/player-form.view";
import {createPlayer, CreatePlayerOptions} from "../players.actions";
import {push} from "connected-react-router";
import Routes from "../../routes";

interface OwnProps {
}

interface DispatchProps {
  readonly createPlayer: (data: CreatePlayerOptions) => void;
  readonly push: (path: string) => void;
}

interface Props extends OwnProps, DispatchProps {
}

interface State {
  readonly player: Player;
}

const initialState: State = {
  player: {
    id: "-1",
    name: '',
  },
};

@connect<{}, DispatchProps, {}>(
  null,
  {createPlayer, push}
)
class PlayerCreatePage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = initialState;

    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.onPlayerSave = this.onPlayerSave.bind(this);
  }

  onPlayerChange(player: Player) {
    this.setState({player});
  }

  onPlayerSave() {
    this.props.createPlayer({
      player: this.state.player
    });
    this.props.push(Routes.Players.index());
  }

  render() {
    return (
      <div>
        <div>
          Add new player:
        </div>
        <div>
          <Link to={Routes.Players.index()}>&lt;&lt; Back</Link>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <PlayerFormView player={this.state.player} onPlayerChange={this.onPlayerChange} />

          <button onClick={this.onPlayerSave}>Save</button>
        </form>
      </div>
    );
  }
}

export default (PlayerCreatePage as any) as ComponentType<OwnProps>
