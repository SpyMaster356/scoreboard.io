import {RouterState} from 'connected-react-router';
import {combineReducers, Reducer} from 'redux';

import router from './router.reducer';
import players from './state/players/players.reducer';
import scores from './state/scores/scores.reducer';
import round from './state/round/round.reducer';

export interface AppState {
  router:RouterState;
  players:any;
  scores:any;
  round:any;
}

const appReducer:Reducer = combineReducers<AppState>({
  router,
  players,
  scores,
  round,
});

export default appReducer;
