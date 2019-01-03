import {connect} from 'react-redux';

import {
  incrementPlayerScore,
  decrementPlayerScore
} from '../../../state/scores/score.actions';

import {PlayerScoreView} from './player-score.view';

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(p => p.id === ownProps.playerId),
    score: state.scores.find(s => s.playerId === ownProps.playerId)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScorePlus: function () {
      dispatch(incrementPlayerScore(ownProps.playerId));
    },
    onScoreMinus: function () {
      dispatch(decrementPlayerScore(ownProps.playerId));
    }
  }
};

export const PlayerScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScoreView);
