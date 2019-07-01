// #region imports
import { compose } from 'redux';
import withAuth from '../../contexts/auth/consumerHOC';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
import { Navigation } from '../../config/navigation';
// #endregion

export interface InnerProps extends AuthContextProps, RouteComponentProps {
  // parent props:
  navModel: Navigation;

  handleLeftNavItemClick: (
    event: React.SyntheticEvent<any>,
    viewName: string,
  ) => any;

  handleRightNavItemClick: (
    event: React.SyntheticEvent<any>,
    viewName: string,
  ) => any;
}

export interface OuterProps {}

export default compose<InnerProps, OuterProps>(
  withRouter,
  withAuth(),
)(NavigationBar);
