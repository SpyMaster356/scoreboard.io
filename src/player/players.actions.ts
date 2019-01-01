import {Action} from "redux";
import Player from "./player.model";

export enum PlayerActionTypes {
  Create = "PLAYER.CREATE",
  Update = "PLAYER.UPDATE",
  Destroy = "PLAYER.DESTROY",
}

export interface UpdatePlayerAction extends Action {
  readonly data: {
    readonly player: Player;
  }
}

export interface UpdatePlayerOptions {
  readonly player: Player;
}

export function updatePlayer(data: UpdatePlayerOptions): UpdatePlayerAction {
  return {type: PlayerActionTypes.Update, data};
}

export interface CreatePlayerAction extends Action {
  readonly data: {
    readonly player: Player;
  }
}

export interface CreatePlayerOptions {
  readonly player: Player;
}

export function createPlayer(data: CreatePlayerOptions): CreatePlayerAction {
  return {type: PlayerActionTypes.Create, data};
}

export interface DestroyPlayerOptions {
  readonly player: Player;
}

export interface DestroyPlayerAction extends Action {
  readonly data: {
    readonly player: Player;
  }
}

export function destroyPlayer(data: DestroyPlayerOptions): DestroyPlayerAction {
  return {type: PlayerActionTypes.Destroy, data}
}
