// #region imports
import compose from 'recompose/compose';
import withAuth from '../../contexts/auth/consumerHOC';
import { withRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// #endregion

export default compose(
  withRouter,
  withAuth(),
)(NavigationBar);
