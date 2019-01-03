import {connect} from 'react-redux';

import {ActiveRoundScoreView} from './active-round-score.view';

const mapStateToProps = (state, ownProps) => {
  let playerScore = state.scores
    .find(score => score.playerId === ownProps.playerId);

  return {
    active: playerScore.scoreChanged && state.round.roundActive,
    ending: playerScore.scoreChanged && state.round.roundEnding,
    score: playerScore.roundScore
  }
};

const mapDispatchToProps = () => {
  return {}
};

export const ActiveRoundScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveRoundScoreView);
