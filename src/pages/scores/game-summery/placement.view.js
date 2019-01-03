import React from 'react';

export const PlacementView = ({
  rank,
  score,
  players,
}) => (
  <div className="sbio-placement">
    <span className="rank">
      <span className={'rank-value rank-' + rank} />
      <span className="score">{score}</span>
    </span>
    <span className="players">{players.map(player => player.name).join(', ')}</span>
  </div>
);
