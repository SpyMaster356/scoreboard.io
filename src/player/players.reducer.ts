import {Map} from 'immutable';
import {Action, Reducer} from 'redux';
import Player from './player.model';
import {
  CreatePlayerAction,
  DestroyPlayerAction,
  PlayerActionTypes,
  UpdatePlayerAction,
} from './players.actions';

export interface PlayersState extends Map<string, Player> {
}

const initialState:PlayersState = Map<string, Player>();

const PlayersReducer:Reducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case PlayerActionTypes.Create:
      return createPlayer(state, action as CreatePlayerAction);
    case PlayerActionTypes.Update:
      return updatePlayer(state, action as UpdatePlayerAction);
    case PlayerActionTypes.Destroy:
      return destroyPlayer(state, action as DestroyPlayerAction);
    default:
      return state;
  }
};

function createPlayer(state:PlayersState, action:CreatePlayerAction):PlayersState {
  let nextId = Math.max(0, ...state.keySeq().map(k => parseInt(k))) + 1;
  return state.set(nextId.toString(), {
    ...action.data.player,
    id: nextId.toString(),
  });
}

function updatePlayer(state:PlayersState, action:UpdatePlayerAction):PlayersState {
  return state.set(action.data.player.id, action.data.player);
}

function destroyPlayer(state:PlayersState, action:DestroyPlayerAction):PlayersState {
  return state.delete(action.data.player.id);
}

export default PlayersReducer;
