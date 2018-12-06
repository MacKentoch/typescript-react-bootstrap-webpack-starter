// #region imports
import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
import { Link } from '../../config/navigation';
// #endregion

// #region flow types
type Props = {
  // parent props:
  brand: string;
  handleLeftNavItemClick: (
    event: React.SyntheticEvent<any>,
    viewName: string,
  ) => any;
  handleRightNavItemClick: (
    event: React.SyntheticEvent<any>,
    viewName: string,
  ) => any;
  navModel: {
    brand: string;
    leftLinks: Array<Link>;
    rightLinks: Array<Link>;
  };
} & AuthContextProps &
  RouteComponentProps;

type State = {
  isOpen: boolean;
};
// #endregion

class NavigationBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    brand: 'brand',
  };

  state = {
    isOpen: false,
  };

  // #region lifecycle
  render() {
    const {
      brand,
      navModel: { rightLinks },
      isAuthenticated,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{brand}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {rightLinks.map(({ label, link }, index) => (
              <NavItem key={`${index}`}>
                <NavLink href="#" onClick={this.handlesNavItemClick(link)}>
                  {label}
                </NavLink>
              </NavItem>
            ))}
            {isAuthenticated && (
              <NavItem>
                <NavLink href="#" onClick={this.handlesDisconnect}>
                  Disconnect
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  // #endregion

  // #region navigation bar toggle
  toggle = (evt: React.SyntheticEvent<any>) => {
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({ isOpen: prevIsOpened }) => ({ isOpen: !prevIsOpened }));
  };
  // #endregion

  // #region handlesNavItemClick event
  handlesNavItemClick = (link: string = '/') => (
    evt: React.SyntheticEvent<any>,
  ) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history } = this.props;
    history.push(link);
  };
  // #endregion

  // #region disconnect
  handlesDisconnect = (evt: React.SyntheticEvent<any>) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history, disconnectUser } = this.props;

    disconnectUser();
    history.push('/');
  };
  // #endregion
}

export default withRouter(NavigationBar);
