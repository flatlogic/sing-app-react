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
  FormGroup,
} from 'reactstrap';
import $ from 'jquery';

import Notifications from '../Notifications/Notifications';
import { logoutUser } from '../../actions/user';
import { toggleSidebar, openSidebar, closeSidebar } from '../../actions/navigation';

import a5 from '../../images/people/a5.jpg';
import a6 from '../../images/people/a6.jpg';

import s from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool.isRequired,
    sidebarStatic: PropTypes.bool.isRequired,
    chatToggle: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.switchSidebar = this.switchSidebar.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.doLogout = this.doLogout.bind(this);

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
    this.props.dispatch(logoutUser());
  }

  switchSidebar() {
    const dispatchNavigation = this.props.sidebarOpened ? closeSidebar : openSidebar;
    this.props.dispatch(dispatchNavigation());
  }

  toggleSidebar() {
    this.props.dispatch(toggleSidebar());
    localStorage.setItem('nav-static', !this.props.sidebarStatic);
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
            <NavLink className={`${s.navLink} d-none d-md-block d-lg-block d-xl-block`} href="#" id="toggleSidebar" onClick={this.toggleSidebar}>
              <i className="fa fa-bars fa-lg" />
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
          </NavItem>
          <NavLink className={`${s.navLink} ${s.navLg} d-none d-xs-block d-sm-block d-md-none d-lg-none d-xl-none`} href="#" onClick={this.switchSidebar}>
            <span className="rounded rounded-lg bg-gray text-white"><i className="fa fa-bars fa-lg" /></span>
            <i className="fa fa-bars fa-lg d-none d-md-block d-lg-block d-xl-block" />
          </NavLink>
          <NavItem className="ml-lg d-none d-md-block d-lg-block d-xl-block">
            <NavLink className={`${s.navLink}`} href="#">
              <i className="fa fa-refresh fa-lg" />
            </NavLink>
          </NavItem>
          <NavItem className="d-none d-md-block d-lg-block d-xl-block">
            <NavLink className={s.navLink} href="#">
              <i className={`${s.faTimes} fa fa-times fa-lg`} />
            </NavLink>
          </NavItem>

          <div className="navbar-form float-left">
            <FormGroup>
              <InputGroup className={`${s.navbarForm} d-none d-md-block d-lg-block d-xl-block`}>
                <InputGroupAddon className={s.inputAddon}><i
                  className="fa fa-search"
                /></InputGroupAddon>
                <Input id="search-input" placeholder="Search Dashboard" />
              </InputGroup>
            </FormGroup>
          </div>

        </Nav>


        <NavLink className={`${s.navbarBrand} d-none d-xs-block d-sm-block d-md-none d-lg-none d-xl-none`}>
          <i className="fa fa-circle text-gray mr-n-sm" />
          <i className="fa fa-circle text-warning" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-warning mr-n-sm" />
          <i className="fa fa-circle text-gray" />
        </NavLink>

        <Nav>
          <NavDropdown isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className="d-none d-md-block d-lg-block d-xl-block">
            <DropdownToggle nav caret className={s.navLink}>
              <span className={`${s.avatar} thumb-sm float-left`}>
                <img className="rounded-circle" src={a5} alt="..." />
              </span>
              Philip <span className="fw-semi-bold">Smith</span>
              <span className="ml-1 circle bg-warning fw-bold">13</span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.dropdownNotifications} animated animated-fast fadeInUp`}>
              <Notifications />
            </DropdownMenu>
          </NavDropdown>
          <NavDropdown isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="d-none d-md-block d-lg-block d-xl-block">
            <DropdownToggle nav className={s.navLink}>
              <i className="fa fa-cog fa-lg" />
            </DropdownToggle>
            <DropdownMenu right className="super-colors">
              <DropdownItem><i className="glyphicon glyphicon-user" /> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/calendar">Calendar</DropdownItem>
              <DropdownItem href="/inbox">Inbox &nbsp;&nbsp;<Badge color="danger" pill className="animated bounceIn">9</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.doLogout}><i className="fa fa-sign-out" /> Log Out</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink id="toggle-chat" className={`${s.navLink} d-none d-md-block d-lg-block d-xl-block`} href="#" onClick={this.props.chatToggle}>
              <i className="fa fa-globe fa-lg" />
            </NavLink>
            <NavLink id="chat-notification" className={`${s.chatNotification} hide  d-none d-md-block d-lg-block d-xl-block`} onClick={this.props.chatToggle}>
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
          <NavItem className={`${s.navLg} d-none d-xs-block d-sm-block d-md-none d-lg-none d-xl-none`}>
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
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Header)));

