// #region imports
import { compose } from 'redux';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import withAuth from '../../contexts/auth/consumerHOC';
import Login from './Login';
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  withAuth(),
)(Login);
