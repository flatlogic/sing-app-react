import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  Dropdown,
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
  Form,
  FormGroup,
} from 'reactstrap';
import cx from 'classnames';

import Notifications from '../Notifications';
import { logoutUser } from '../../actions/user';
import { toggleSidebar, openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';

import a5 from '../../images/people/a5.jpg';
import a6 from '../../images/people/a6.jpg';

import s from './Header.module.scss'; // eslint-disable-line css-modules/no-unused-class

class Header extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool.isRequired,
    sidebarStatic: PropTypes.bool.isRequired,
    chatToggle: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
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
      focus: false,
      showNewMessage: false,
      hideMessage: true,
      openedChat: false
    };
  }
  componentDidMount() {
    if (window.innerWidth > 576) {
      setTimeout(() => {
        this.setState({ showNewMessage: true, hideMessage: false })
      }, 2000)

      setTimeout(() => {
        this.setState({ showNewMessage: false })
      }, 6000);

      setTimeout(() => { 
        this.setState({ hideMessage: true }) 
      }, 6200)
    }
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus })
  }

  toggleNotifications() {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  toggleChat = () => {
    this.setState({ openedChat: true })
    this.props.chatToggle()
  }

  // collapse/uncolappse
  switchSidebar() {
    if (this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  // static/non-static
  toggleSidebar() {
    this.props.dispatch(toggleSidebar());
    if (this.props.sidebarStatic) {
      localStorage.setItem('staticSidebar', 'false');
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      localStorage.setItem('staticSidebar', 'true');
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  render() {
    const { focus, showNewMessage, hideMessage } = this.state;

    const user = JSON.parse(localStorage.getItem('user') || {});

    const firstUserLetter = (user.name|| user.email || "P")[0].toUpperCase();

    return (
      <Navbar className={`${s.root} d-print-none`}>
        <Nav>
          <NavItem>
            <NavLink className="d-md-down-none ml-5" id="toggleSidebar" onClick={this.toggleSidebar}>
              <i className="la la-bars" />
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
            <NavLink className="fs-lg d-lg-none" onClick={this.switchSidebar}>
              <span className="rounded rounded-lg bg-gray text-white d-md-none"><i className="la la-bars" /></span>
              <i className="la la-bars ml-3 d-sm-down-none" />
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <i className="la la-refresh" />
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <i className="la la-times" />
            </NavLink>
          </NavItem>

        </Nav>

        <Form className="d-sm-down-none ml-5" inline>
          <FormGroup>
            <InputGroup onFocus={this.toggleFocus} onBlur={this.toggleFocus} className={
              cx('input-group-no-border', {'focus' : !!focus})
            }>
              <InputGroupAddon addonType="prepend">
                <i className="la la-search" />
              </InputGroupAddon>
              <Input id="search-input" placeholder="Search Dashboard" className={cx({'focus' : !!focus})} />
            </InputGroup>
          </FormGroup>
        </Form>

        <NavLink className={`${s.navbarBrand} d-md-none`}>
          <i className="fa fa-circle text-gray mr-n-sm" />
          <i className="fa fa-circle text-warning" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-warning mr-n-sm" />
          <i className="fa fa-circle text-gray" />
        </NavLink>

        <Nav className="ml-auto">
          <Dropdown nav isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className={`${s.notificationsMenu} d-sm-down-none`}>
            <DropdownToggle nav caret>
              <span className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}>
                  {user.avatar || user.email === "admin@flatlogic.com" ? (
                      <img src={user.avatar || a5} alt="..."/>
                  ) : (
                      <span>{firstUserLetter}</span>
                  )}
              </span>
              <span className="small">{user.name || user.email || "Philip smith"}</span>
              <span className="ml-1 circle bg-warning text-white fw-bold">13</span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}>
              <Notifications />
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="d-sm-down-none">
            <DropdownToggle nav>
              <i className="la la-cog" />
            </DropdownToggle>
            <DropdownMenu right className="super-colors">
              <DropdownItem><i className="la la-user" /> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/calendar">Calendar</DropdownItem>
              <DropdownItem href="/inbox">Inbox &nbsp;&nbsp;<Badge color="danger" pill className="animated bounceIn">9</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.doLogout}><i className="la la-sign-out" /> Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink className="d-sm-down-none mr-5" id="toggle-chat" onClick={this.toggleChat}>
              <i className="la la-globe" />
              <i className={`chat-notification-sing ${this.state.openedChat ? 'hide' : ''}`}></i>
            </NavLink>
            <div id="chat-notification" className={`${showNewMessage ? 'animated fadeIn' : 'animated fadeOut'} ${hideMessage ? 'hide' : ''} ${s.chatNotification}`}>
            
              <div className={s.chatNotificationInner}>
                <h6 className={`${s.title} d-flex`}>
                  <span className="thumb-xs">
                    <img src={a6} alt="" className="rounded-circle mr-xs float-left" />
                  </span>
                  Jess Smith
                </h6>
                <p className={s.text}>Hi there! <br /> This is a completely new version of Sing App <br /> built with <strong className="text-primary">React JS</strong> </p>
              </div>
            </div>
          </NavItem>
          <NavItem className="fs-lg d-md-none">
            <NavLink href="#" onClick={this.props.chatToggle}>
              <span className="rounded rounded-lg bg-gray text-white"><i className="la la-globe" /></span>
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

export default withRouter(connect(mapStateToProps)(Header));

