// #region imports
import { compose } from 'redux';
import LogoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(LogoutRoute);
