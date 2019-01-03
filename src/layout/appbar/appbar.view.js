import * as React from 'react';
import {
  AppBar,
} from 'material-ui';

import {AppbarBackBtn} from './appbar-back-btn/appbar-back-btn';
import {AppbarMenu} from './appbar-menu/appbar-menu';

export const AppbarView = ({
  prevRoute,
  showBackBtn,
}) => (
  <AppBar
    title="Scoreboard.io"
    iconElementLeft={showBackBtn ? <AppbarBackBtn prevRoute={prevRoute} /> : <AppbarMenu />}
  />
);
