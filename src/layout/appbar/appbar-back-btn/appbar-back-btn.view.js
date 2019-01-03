import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import {
  IconButton,
} from 'material-ui';

export const AppbarBackView = muiThemeable()(
  ({
    muiTheme,
    onBack,
  }) => (
    <IconButton onClick={onBack}>
      <ArrowBackIcon color={muiTheme.palette.alternateTextColor} />
    </IconButton>
  ),
);
