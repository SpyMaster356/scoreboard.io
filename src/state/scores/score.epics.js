import {merge} from 'rxjs';
import {debounceTime, mapTo, takeUntil} from 'rxjs/operators';
import {combineEpics, ofType} from 'redux-observable';
import {SET_SCORE_REL, REMATCH, NEW_GAME} from '../../action-types';
import {roundEnding, roundEnded} from '../round/round.actions';

const ROUND_LENGTH = 6000;
const ROUND_TRANSITION_TIME = 2000;

function setScoreRelEpic(action$) {
  let setScoreRel$ = action$.pipe(ofType(SET_SCORE_REL));
  let endGame$ = action$.pipe(ofType(REMATCH, NEW_GAME));

  return merge(
    setScoreRel$.pipe(
      debounceTime(ROUND_LENGTH - ROUND_TRANSITION_TIME),
      takeUntil(endGame$),
      mapTo(roundEnding()),
    ),
    setScoreRel$.pipe(
      debounceTime(ROUND_LENGTH),
      takeUntil(endGame$),
      mapTo(roundEnded()),
    ),
  );
}

export const scoreEpics = combineEpics(
  setScoreRelEpic,
);


