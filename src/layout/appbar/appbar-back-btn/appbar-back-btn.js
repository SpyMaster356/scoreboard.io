import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {AppbarBackView} from './appbar-back-btn.view';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: function () {
      dispatch(push('/'));
    }
  };
};

export const AppbarBackBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarBackView);
