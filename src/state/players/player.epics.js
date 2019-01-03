import {combineEpics, ofType} from 'redux-observable';
import {CREATE_PLAYER} from '../../action-types';
import {addPlayer} from './player.actions';
import {map} from 'rxjs/operators';

function createPlayerEpic(action$, store$) {
  return action$.pipe(
    ofType(CREATE_PLAYER),
    map(() => {
      let players = store$.value.players;
      let lastIndex = players.length - 1;
      let newPlayerId = players[lastIndex].id;

      return addPlayer(newPlayerId);
    }),
  );
}

export const playerEpics = combineEpics(
  createPlayerEpic,
);
