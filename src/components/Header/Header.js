import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Badge,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from 'reactstrap';
import Notifications from '../Notifications/Notifications';
import { logoutUser } from '../../actions/user';

import * as a5 from '../../images/people/a5.jpg';

import s from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    sidebarToggle: PropTypes.func,
    chatToggle: PropTypes.func,
  };

  static defaultProps = {
    sidebarToggle: () => {
    },
    chatToggle: () => {
    },
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);

    this.state = {
      menuOpen: false,
      notificationsOpen: false,
      notificationsTabSelected: 1,
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  toggleNotifications() {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  doLogout() {
    this.props
      .dispatch(logoutUser()); // eslint-disable-line
  }

  render() {
    return (
      <Navbar className={s.navbar}>
        <Nav>
          <NavItem>
            <NavLink className={s.navLink} href="#" id="toggleSidebar" onClick={this.props.sidebarToggle}>
              <i className="fa fa-bars fa-lg" />
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink className={`${s.navLink} ml-1`} href="#">
              <i className="fa fa-refresh fa-lg" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={s.navLink} href="#">
              <i className="fa fa-times fa-lg" />
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavDropdown isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown">
            <DropdownToggle nav caret className={s.navLink}>
              <span className={`${s.avatar} thumb-sm float-left`}>
                <img className="rounded-circle" src={a5} alt="..." />
              </span>
              Philip <span className="fw-semi-bold">Smith</span>
              <span className="ml-1 circle bg-warning fw-bold">13</span>
            </DropdownToggle>
            <DropdownMenu right className={s.dropdownNotifications}>
              <Notifications />
            </DropdownMenu>
          </NavDropdown>
          <NavDropdown isOpen={this.state.menuOpen} toggle={this.toggleMenu}>
            <DropdownToggle nav className={s.navLink}>
              <i className="fa fa-cog fa-lg" />
            </DropdownToggle>
            <DropdownMenu right className="super-colors">
              <DropdownItem><i className="glyphicon glyphicon-user" /> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Calendar</DropdownItem>
              <DropdownItem>Inbox &nbsp;&nbsp;<Badge color="danger" pill>9</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-sign-out" /> Log Out</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink className={s.navLink} href="#" onClick={this.props.chatToggle}>
              <i className="fa fa-globe fa-lg" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default withStyles(s)(Header);
