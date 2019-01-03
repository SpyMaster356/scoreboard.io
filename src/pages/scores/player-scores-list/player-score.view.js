import React from 'react';

import {ActiveRoundScore} from '../active-round-score/active-round-score';
import {ScoreEditorView} from '../../../shared/score-editor.view';

import './player-score.scss';

export const PlayerScoreView = ({
  player,
  score,
  onScoreMinus,
  onScorePlus,
}) => (
  <div className="sbio-player-score">
    <div className="player-info">
      <span className="player-name">
        {player.name}
      </span>
      <span className="round-score">
        <ActiveRoundScore playerId={player.id}/>
      </span>
      <ScoreEditorView
        onScoreMinus={onScoreMinus}
        onScorePlus={onScorePlus}
        score={score}
      />
    </div>
  </div>
);

