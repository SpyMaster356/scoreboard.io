import {connect} from 'react-redux';

import {AppbarView} from './appbar.view';

const mapStateToProps = (state, ownProps) => {
  return {
    showBackBtn: ownProps.curLocation.pathname !== '/',
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const Appbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarView);
