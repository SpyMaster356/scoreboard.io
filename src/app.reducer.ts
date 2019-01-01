import {combineReducers, Reducer} from "redux";
import {RouterState} from "connected-react-router";

import RouterReducer from "./router.reducer";
import PlayersReducer, {PlayersState} from "./player/players.reducer";

export interface AppState {
  router: RouterState;
  players: PlayersState;
}

const appReducer: Reducer = combineReducers<AppState>({
  router: RouterReducer,
  players: PlayersReducer,
});

export default appReducer;
