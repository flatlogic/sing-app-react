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
import { NavbarTypes } from '../../reducers/layout';
import Notifications from '../Notifications';
import { logoutUser } from '../../actions/user';
import chroma from 'chroma-js'
import Joyride, { STATUS } from 'react-joyride';
import { toggleSidebar, openSidebar, closeSidebar, changeActiveSidebarItem, chatToggleItem } from '../../actions/navigation';

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
      run: true,
      steps: [
        {
          content: 'You can adjust sidebar, or leave it closed 😃',
          placement: 'bottom',
          target: '#toggleSidebar',
          textAlign: 'center',
          disableBeacon: true
        },
        {
          content: "Admin can check out his messages and tasks easily 😃",
          placement: 'bottom',
          target: '.dropdown-toggle',
        },
        {
          content: "Clickable cog can provide you with link to important pages 😄",
          placement: 'bottom',
          target: '.tutorial-dropdown',
        },
        {
          content: 'Check out chat, do not miss new ideas 🙂',
          placement: 'bottom',
          target: '#toggle-chat',
        },
        {
          content: 'Open theme cusomizer sidebar, play with it or watch tour! ❤️',
          placement: 'left',
          target: '.helper-button'
        },
      ],
    };
  }

  handleJoyrideCallback = (CallBackProps) => {
    const { status } = CallBackProps;

    if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status)) {
      this.setState({ run: false });
    }

  };

  start = () => {
    this.setState({
      run: true,
    });
  };

  componentDidMount() {
    if (window.innerWidth > 576) {
      setTimeout(() => {
        this.setState({ showNewMessage: true })
      }, 2000)

      setTimeout(() => {
        this.setState({ showNewMessage: false, hideMessage: false })
      }, 6000);
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
    this.props.chatToggle();
    setTimeout(() => this.props.dispatch(chatToggleItem()),1000);
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
    const { navbarType, navbarColor } = this.props;

    const user = JSON.parse(localStorage.getItem('user') || {});

    const firstUserLetter = (user.name|| user.email || "P")[0].toUpperCase();

    return (
      <Navbar className={`${s.root} d-print-none ${navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ''}`} style={{backgroundColor: navbarColor}}>
        <Joyride
          callback={this.handleJoyrideCallback}
          continuous={true}
          run={this.state.run}
          showSkipButton={true}
          steps={this.state.steps}
          spotlightPadding={-10}
          disableOverlay={true}
          disableScrolling
          styles={{
            options: {
              arrowColor: '#ffffff',
              backgroundColor: '#ffffff',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#000',
              textColor: '#495057',
              spotlightPadding: 0,
              zIndex: 1000,
              padding: 5,
              width: 240,
            },
            tooltip: {
              fontSize: 15,
              padding: 5,
            },
            tooltipContent: {
              padding: '20px 5px 0',
            },
            floater: {
              arrow: {
                padding: 10
              },
            },
            buttonClose: {
              display: 'none'
            },
            buttonNext: {
              backgroundColor: "#21AE8C",
              fontSize: 13,
              borderRadius: 4,
              color: "#ffffff",
              fontWeight: "bold",
              outline: "none"
            },
            buttonBack: {
              color: "#798892",
              marginLeft: 'auto',
              fontSize: 13,
              marginRight: 5,
            },
            buttonSkip: {
              color: "#798892",
              fontSize: 13,
            },
          }}
        />
        <Nav>
          <NavItem>
            <NavLink className="d-md-down-none ml-5" id="toggleSidebar" onClick={this.toggleSidebar}>
              <i className={`la la-bars ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}/>
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
            <NavLink className="fs-lg d-lg-none" onClick={this.switchSidebar}>
            <span 
              style={{backgroundColor: navbarColor !== "#ffffff" 
              ? chroma(navbarColor).darken(1) 
              : "#495057"}} 
              className={`rounded rounded-lg d-md-none d-sm-down-block`}>
                <i 
                  className="la la-bars" 
                  style={{color: navbarColor === "#ffffff" 
                  ? "#ffffff"
                  : chroma(navbarColor).luminance() < 0.4 ? "#ffffff" : ""}} 
                />
              </span>
              <i className={`la la-bars ml-3 d-sm-down-none ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}/>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <i className={`la la-refresh ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}/>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <i className={`la la-times ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`} />
            </NavLink>
          </NavItem>

        </Nav>

        <Form className={`d-sm-down-none ml-5 ${s.headerSearchInput}`} inline>
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

        <NavLink className={`${s.navbarBrand} d-md-none ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}>
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
            <DropdownToggle nav caret className={`${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}>
              <span className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}>
                  {user.avatar || user.email === "admin@flatlogic.com" ? (
                      <img src={user.avatar || a5} alt="..."/>
                  ) : (
                      <span>{firstUserLetter}</span>
                  )}
              </span>
              <span className={`small ${this.props.sidebarStatic ? s.adminEmail : ''} ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`}>{user.name || user.email || "Philip smith"}</span>
              <span className="ml-1 circle bg-primary text-white fw-bold">13</span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}>
              <Notifications />
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="d-sm-down-none tutorial-dropdown">
            <DropdownToggle nav>
              <i className={`la la-cog ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`} />
            </DropdownToggle>
            <DropdownMenu right className="super-colors">
              <DropdownItem href="/#/app/profile"><i className="la la-user" /> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/#/app/extra/calendar">Calendar</DropdownItem>
              <DropdownItem href="/#/app/inbox">Inbox &nbsp;&nbsp;<Badge color="danger" pill className="animated bounceIn">9</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.doLogout}><i className="la la-sign-out" /> Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink className="d-sm-down-none mr-5" id="toggle-chat" onClick={this.toggleChat}>
              <i className={`la la-globe ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`} />
              <i className={`chat-notification-sing ${this.props.chatSidebar ? 'hide' : ''}`}></i>
            </NavLink>
            <div id="chat-notification" className={`
            ${s.chatNotification} 
            ${showNewMessage ? 'animated fadeIn '+s.chatNotificationInit : ''} 
            ${hideMessage ? '' : 'animated fadeOut'}`}>
            
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
            <NavLink href="#" onClick={this.toggleChat}>
              <i className={`chat-notification-sing ${this.props.chatSidebar ? 'hide' : ''}`}></i>
              <span 
                style={{backgroundColor: navbarColor !== "#ffffff" 
                ? chroma(navbarColor).darken(1) 
                : "#495057"}} 
                className="rounded rounded-lg">
                  <i 
                  className="la la-globe" 
                  style={{color: navbarColor === "#ffffff" 
                  ? "#ffffff"
                  : chroma(navbarColor).luminance() < 0.4 ? "#ffffff" : ""}}
                />
              </span>
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
    chatSidebar: store.navigation.chatToggleItem,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor
  };
}

export default withRouter(connect(mapStateToProps)(Header));

