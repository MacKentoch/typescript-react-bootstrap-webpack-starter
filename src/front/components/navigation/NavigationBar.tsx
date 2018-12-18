// #region imports
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { InnerProps, OuterProps } from './index';
// import { RouteComponentProps } from 'react-router-dom';
// import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// import { Navigation } from '../../config/navigation';
// #endregion

// #region flow types
// type Props = {
//   // parent props:
//   navModel: Navigation;

//   handleLeftNavItemClick: (
//     event: React.SyntheticEvent<any>,
//     viewName: string,
//   ) => any;

//   handleRightNavItemClick: (
//     event: React.SyntheticEvent<any>,
//     viewName: string,
//   ) => any;
// } & AuthContextProps &
//   RouteComponentProps;

interface Props extends InnerProps {}

interface State {
  isOpen: boolean;
}
// #endregion

class NavigationBar extends React.PureComponent<Props, State> {
  static defaultProps = {};

  state = {
    isOpen: false,
  };

  // #region lifecycle
  render() {
    const {
      navModel: { rightLinks, brand },
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

export default NavigationBar;
