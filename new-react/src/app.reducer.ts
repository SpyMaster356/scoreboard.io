import {RouterState} from 'connected-react-router';
import {combineReducers, Reducer} from 'redux';
import PlayersReducer, {PlayersState} from './player/players.reducer';
import RouterReducer from './router.reducer';

export interface AppState {
  router:RouterState;
  players:PlayersState;
}

const appReducer:Reducer = combineReducers<AppState>({
  router: RouterReducer,
  players: PlayersReducer,
});

export default appReducer;
