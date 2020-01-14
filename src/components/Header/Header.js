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
import { toggleSidebar, openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';

import a5 from '../../images/people/a5.jpg';

import s from './Header.module.scss'; // eslint-disable-line css-modules/no-unused-class

class Header extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool.isRequired,
    sidebarStatic: PropTypes.bool.isRequired,
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
    const { focus } = this.state;
    const { navbarType, navbarColor, openUsersList } = this.props;

    const user = JSON.parse(localStorage.getItem('user') || {});

    const firstUserLetter = (user.name|| user.email || "P")[0].toUpperCase();

    return (
      <Navbar className={`${s.root} d-print-none ${navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ''}`} style={{backgroundColor: navbarColor, zIndex: !openUsersList ? 100 : 0}}>
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
              padding: 15,
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
              className={`rounded rounded-lg d-md-none d-sm-down-block`}>
                <i 
                  className="la la-bars" 
                  style={{fontSize: 30, color: navbarColor === "#ffffff" 
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
          <i className="fa fa-circle text-primary mr-n-sm" />
          <i className="fa fa-circle text-danger" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-danger mr-n-sm" />
          <i className="fa fa-circle text-primary" />
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
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="d-sm-down-none tutorial-dropdown pr-4">
            <DropdownToggle nav>
              <i className={`la la-cog ${chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""}`} />
            </DropdownToggle>
            <DropdownMenu right className={`super-colors`}>
              <DropdownItem href="/#/app/profile"><i className="la la-user" /> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/#/app/extra/calendar">Calendar</DropdownItem>
              <DropdownItem href="/#/app/inbox">Inbox &nbsp;&nbsp;<Badge color="danger" pill className="animated bounceIn">9</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.doLogout}><i className="la la-sign-out" /> Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor,
    openUsersList: store.chat.openUsersList
  };
}

export default withRouter(connect(mapStateToProps)(Header));

