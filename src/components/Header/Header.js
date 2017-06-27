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
  Input
} from 'reactstrap';
import Notifications from '../Notifications/Notifications';
import { logoutUser } from '../../actions/user';
import { toggleSidebar } from '../../actions/navigation'
import $ from 'jquery';

import * as a5 from '../../images/people/a5.jpg';
import * as a6 from '../../images/people/a6.jpg';

import s from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    chatToggle: PropTypes.func,
  };

  static defaultProps = {
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

  componentDidMount() {
    setTimeout(() => {
      let $chatNotification = $('#chat-notification');
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
      $('#search-input').parents('.input-group')
        [e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
    });
  }

  render() {
    return (
      <Navbar className={s.navbar}>
        <Nav className={s.nav}>
          <NavItem>
            <NavLink className={s.navLink} href="#" id="toggleSidebar" onClick={() => this.props.dispatch(toggleSidebar())}>
              <i className="fa fa-bars fa-lg" />
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
          </NavItem>
          <NavItem className="ml-lg">
            <NavLink className={`${s.navLink}`} href="#">
              <i className="fa fa-refresh fa-lg" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={s.navLink} href="#">
              <i className={`${s.faTimes} fa fa-times fa-lg`} />
            </NavLink>
          </NavItem>
          <InputGroup className={s.navbarForm}>
            <InputGroupAddon className={s.inputAddon}><i className="fa fa-search"></i></InputGroupAddon>
            <Input id="search-input" placeholder="Search Dashboard" />
          </InputGroup>
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
            <NavLink id="toggle-chat" className={s.navLink} href="#" onClick={this.props.chatToggle}>
              <i className="fa fa-globe fa-lg" />
            </NavLink>
            <div id="chat-notification" className={`${s.chatNotification} hide`} onClick={this.props.chatToggle}>
              <div className={s.chatNotificationInner}>
                <h6 className={s.title}>
                  <span className="thumb-xs">
                      <img src={a6} className="rounded-circle mr-xs float-left"/>
                  </span>
                  Jess Smith
                </h6>
                <p className={s.text}>Hi there! <br/> This is a completely new version of Sing App <br/> built with <strong className="text-danger">Angular 2.0 Final Release</strong> </p>
              </div>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
function mapStateToProps(store) {
  return {};
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Header)));

