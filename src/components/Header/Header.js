import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
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
  InputGroupAddon,
  InputGroup,
  Input,
} from 'reactstrap';
import $ from 'jquery';

import Notifications from '../Notifications/Notifications';
import { logoutUser } from '../../actions/user';
import { toggleSidebar, openSidebar, closeSidebar } from '../../actions/navigation';

import * as a5 from '../../images/people/a5.jpg';
import * as a6 from '../../images/people/a6.jpg';

import s from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    chatToggle: PropTypes.func,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    chatToggle: () => {},
    dispatch: () => {},
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.switchSidebar = this.switchSidebar.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);

    this.state = {
      menuOpen: false,
      notificationsOpen: false,
      notificationsTabSelected: 1,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const $chatNotification = $('#chat-notification');
      $chatNotification.removeClass('hide').addClass('animated fadeIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
          $chatNotification.removeClass('animated fadeIn');
          setTimeout(() => {
            $chatNotification.addClass('animated fadeOut')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd' +
                ' oanimationend animationend', () => {
                  $chatNotification.addClass('hide');
                });
          }, 6000);
        });
      $chatNotification.siblings('#toggle-chat')
        .append('<i class="chat-notification-sing animated bounceIn"></i>');
    }, 4000);

    $('#search-input').on('blur focus', (e) => {
      $('#search-input').parents('.input-group')[e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
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

  switchSidebar() {
    let dispatchNavigation = this.props.sidebarOpened ? closeSidebar : openSidebar;
    this.props.dispatch(dispatchNavigation());
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  render() {
    return (
      <Navbar className={s.navbar}>
        <Nav className={s.nav}>
          <NavItem>
            <NavLink className={`${s.navLink} hidden-sm-down`} href="#" id="toggleSidebar" onClick={() => this.props.dispatch(toggleSidebar())}>
              <i className="fa fa-bars fa-lg" />
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
          </NavItem>
          <NavLink className={`${s.navLink} ${s.navLg} hidden-md-up`} href="#" onClick={this.switchSidebar}>
            <span className="rounded rounded-lg bg-gray text-white"><i className="fa fa-bars fa-lg" /></span>
            <i className="fa fa-bars fa-lg hidden-sm-down" />
          </NavLink>
          <NavItem className="ml-lg hidden-sm-down">
            <NavLink className={`${s.navLink}`} href="#">
              <i className="fa fa-refresh fa-lg" />
            </NavLink>
          </NavItem>
          <NavItem className="hidden-sm-down">
            <NavLink className={s.navLink} href="#">
              <i className={`${s.faTimes} fa fa-times fa-lg`} />
            </NavLink>
          </NavItem>
          <InputGroup className={`${s.navbarForm} hidden-sm-down`}>
            <InputGroupAddon className={s.inputAddon}><i className="fa fa-search" /></InputGroupAddon>
            <Input id="search-input" placeholder="Search Dashboard" />
          </InputGroup>
        </Nav>
        <NavLink className={`${s.navbarBrand} hidden-md-up`}>
          <i className="fa fa-circle text-gray mr-n-sm" />
          <i className="fa fa-circle text-warning" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-warning mr-n-sm" />
          <i className="fa fa-circle text-gray" />
        </NavLink>
        <Nav>
          <NavDropdown isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className="hidden-sm-down">
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
          <NavDropdown isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="hidden-sm-down">
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
            <NavLink id="toggle-chat" className={`${s.navLink} hidden-sm-down`} href="#" onClick={this.props.chatToggle}>
              <i className="fa fa-globe fa-lg" />
            </NavLink>
            <NavLink id="chat-notification" className={`${s.chatNotification} hide`} onClick={this.props.chatToggle}>
              <div className={s.chatNotificationInner}>
                <h6 className={s.title}>
                  <span className="thumb-xs">
                    <img src={a6} alt="" className="rounded-circle mr-xs float-left" />
                  </span>
                  Jess Smith
                </h6>
                <p className={s.text}>Hi there! <br /> This is a completely new version of Sing App <br /> built with <strong className="text-danger">Angular 2.0 Final Release</strong> </p>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={`${s.navLg} hidden-md-up`}>
            <NavLink className={s.navLink} href="#" onClick={this.props.chatToggle}>
              <span className="rounded rounded-lg bg-gray text-white"><i className="fa fa-globe fa-lg" /></span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Header)));

