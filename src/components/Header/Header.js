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
  ListGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  Button,
} from 'reactstrap';
import Notifications from './notifications-demo/Notifications';
import Messages from './notifications-demo/Messages';
import Progress from './notifications-demo/Progress';
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

  changeNotificationsTab(tab) {
    this.setState({
      notificationsTabSelected: tab,
    });
  }

  doLogout() {
    this.props
      .dispatch(logoutUser()); // eslint-disable-line
  }

  render() {
    let notificationsTab;

    switch (this.state.notificationsTabSelected) {
      case 1:
        notificationsTab = (<Notifications />);
        break;
      case 2:
        notificationsTab = (<Messages />);
        break;
      case 3:
        notificationsTab = (<Progress />);
        break;
      default:
        notificationsTab = (<Notifications />);
        break;
    }
    return (
      <Navbar className={s.navbar}>
        <Nav>
          <NavItem>
            <NavLink className={s.navLink} href="#" onClick={this.props.sidebarToggle}>
              <i className="fa fa-bars fa-lg" />
            </NavLink>
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
            <DropdownMenu right>
              <section className={`${s.notifications} card`}>
                <header className="card-header">
                  <div className="text-center mb-sm">
                    <strong>You have 13 notifications</strong>
                  </div>
                  <ButtonGroup>
                    <Button color="secondary" onClick={() => this.changeNotificationsTab(1)} active={this.state.notificationsTabSelected === 1}>Notifications</Button>
                    <Button color="secondary" onClick={() => this.changeNotificationsTab(2)} active={this.state.notificationsTabSelected === 2}>Messages</Button>
                    <Button color="secondary" onClick={() => this.changeNotificationsTab(3)} active={this.state.notificationsTabSelected === 3}>Progress</Button>
                  </ButtonGroup>
                </header>
                <ListGroup>
                  {notificationsTab}
                </ListGroup>
              </section>
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
