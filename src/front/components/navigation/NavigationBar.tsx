// #region imports
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { RouteComponentProps } from 'react-router';

type NavModel = {
  link: string,
  label: string,
}

interface Props extends RouteComponentProps<any> {
  navModel: { rightLinks: Array<NavModel>; brand: string };
  isAuthenticated: boolean;
  disconnectUser: () => any;
}
// #endregion

function NavigationBar({
  navModel: { rightLinks, brand },
  isAuthenticated,
  disconnectUser,
  history,
}: Props) {
  // #region state
  const [isOpen, setIsOpen] = useState(false);
  // #endregion

  // #region navigation bar toggle
  const toggle = (evt: React.SyntheticEvent<any>) => {
    evt && evt.preventDefault();
    setIsOpen(!isOpen);
  };
  // #endregion

  // #region handlesNavItemClick event
  const handlesNavItemClick = (link: string = '/') => (
    evt: React.SyntheticEvent<any>,
  ) => {
    evt && evt.preventDefault();
    history.push(link);
  };
  // #endregion

  // #region disconnect
  const handlesDisconnect = (evt: React.SyntheticEvent<any>) => {
    evt && evt.preventDefault();
    disconnectUser();
    history.push('/');
  };
  // #endregion

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{brand}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {rightLinks.map(({ label, link }, index) => (
            <NavItem key={`${index}`}>
              <NavLink href="#" onClick={handlesNavItemClick(link)}>
                {label}
              </NavLink>
            </NavItem>
          ))}
          {isAuthenticated && (
            <NavItem>
              <NavLink href="#" onClick={handlesDisconnect}>
                Disconnect
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
