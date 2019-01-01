import React, {ComponentType} from "react";
import Player from "../player.model";
import {List} from "immutable";
import {Link} from "react-router-dom";
import Routes from "../../routes";

const PlayerList: ComponentType<{ players: List<Player> }> = ({players}) => (
  <ul>
    {
      players
        .map((player) => (<PlayerListItem key={player.id.toString()} player={player} />))
        .toArray()
    }
  </ul>
);

const PlayerListItem: ComponentType<{ player: Player }> = ({player}) => (
  <li><Link to={Routes.Players.view(player.id)}>{player.name}</Link></li>
);

export default PlayerList;
