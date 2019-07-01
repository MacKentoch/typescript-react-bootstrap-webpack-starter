// #region imports
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(
  withRouter,
  withAuth(),
)(PrivateRoute);
