import React from 'react';
import {
  IconButton
} from 'material-ui';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';

import './score-editor.scss';

function getScoreString(score, showSign) {
  let scoreString = score.toString();
  if (showSign && score >= 1) {
    scoreString = '+' + scoreString;
  }
  return scoreString;
}

export const ScoreEditorView = ({
  score,
  showSign,
  onScoreMinus,
  onScorePlus,
}) => (
  <div className="score-editor">
    <IconButton onClick={onScoreMinus}>
      <RemoveCircleOutlineIcon />
    </IconButton>
    <span className="score-value">{getScoreString(score.value, showSign)}</span>
    <IconButton onClick={onScorePlus}>
      <AddCircleOutlineIcon />
    </IconButton>
  </div>
);
