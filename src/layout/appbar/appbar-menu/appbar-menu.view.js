import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  IconMenu,
  MenuItem,
  IconButton,
  Divider,
} from 'material-ui';

export const AppbarMenuView = muiThemeable()(
  ({
    muiTheme,
    onRematch,
    onNewGame,
    onScoreHistory,
    onAbout,
  }) => (
    <IconMenu
      iconButtonElement={(
        <IconButton>
          <MoreVertIcon color={muiTheme.palette.alternateTextColor} />
        </IconButton>
      )}
    >
      <MenuItem primaryText="Rematch" onClick={onRematch} />
      <MenuItem primaryText="New Game" onClick={onNewGame} />
      <Divider />
      <MenuItem primaryText="Score History" onClick={onScoreHistory} />
      <Divider />
      <MenuItem primaryText="About" onClick={onAbout} />
    </IconMenu>
  ),
);
