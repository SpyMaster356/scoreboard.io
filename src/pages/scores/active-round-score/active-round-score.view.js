import React from 'react';
import classNames from 'classnames';

import './active-round-score.scss';

export const ActiveRoundScoreView = ({
  score,
  active,
  ending,
}) => {
  let classes = classNames(
    {
      'active-round-score': true,
      'active': active,
      'ending': ending
    }
  );

  return (
    <div className={classes}>
      {score > 0 ? '+' + score : score}
    </div>
  );
};
