// #region imports
import compose from 'recompose/compose';
import PrivateRoute from './PrivateRoute';
import { withRouter } from 'react-router-dom';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(
  withRouter,
  withAuth(),
)(PrivateRoute);
