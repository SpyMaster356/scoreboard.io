import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {newGame, rematch} from '../../../state/game/game.actions';
import {createPlayer} from '../../../state/players/player.actions';

import {AppbarMenuView} from './appbar-menu.view';

const ownPropsTypes = {};

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRematch: function () {
      dispatch(rematch());
    },

    onNewGame: function () {
      dispatch(newGame());

      let appData = require('../../../data/app-data.json');
      appData.players.forEach((player) => {
        dispatch(createPlayer(player));
      });
    },

    onScoreHistory: function () {
      dispatch(push('/scores/history'));
    },

    onAbout: function () {
      dispatch(push('/about'));
    }
  }
};

export const AppbarMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarMenuView);

AppbarMenu.propTypes = ownPropsTypes;
