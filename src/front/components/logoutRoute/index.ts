// #region imports
import compose from 'recompose/compose';
import LogoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(LogoutRoute);
