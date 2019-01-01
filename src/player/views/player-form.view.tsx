import React, {ChangeEvent, Component} from "react";
import Player from "../player.model";

interface OwnProps {
  player: Player;

  onPlayerChange?(player: Player): void;
}

class PlayerFormView extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
  }

  onPlayerChange(player: Player) {
    if (this.props.onPlayerChange) {
      this.props.onPlayerChange(player);
    }
  }

  onNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.onPlayerChange({
      ...this.props.player,
      name: event.target.value
    });
  }

  render() {
    return (
      <ul>
        <li>
          <label>
            Name:
            <input type={"text"} value={this.props.player.name} onChange={this.onNameChange} />
          </label>
        </li>
      </ul>
    );
  }
}

export default PlayerFormView;
