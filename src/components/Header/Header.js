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
import { logoutUser } from '../../actions/auth';
import Joyride, { STATUS } from 'react-joyride';
import { toggleSidebar, openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';

import adminDefault from '../../images/chat/chat2.png';
import MenuIcon from '../../images/sidebar/Fill/MenuIcon';
import FlipIcon from '../../images/sidebar/Outline/Flip';
import CloseIcon from '../../images/sidebar/Fill/CloseIconOne';
import SearchIcon from '../../images/sidebar/Outline/Search';
import SettingsIcon from '../../images/sidebar/Outline/Settings';
import CalendarIcon from '../../images/sidebar/Outline/Calendar';
import PersonIcon from '../../images/sidebar/Outline/Person';
import EmailIcon from '../../images/sidebar/Outline/Email';
import PowerIcon from '../../images/sidebar/Outline/Power';

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
      run: false,
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

  componentDidMount() {
    if (window.location.href.includes('main')) {
      this.setState({ run: true })
    }
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
    const { openUsersList } = this.props;
    const navbarType = localStorage.getItem("navbarType") || 'static'

    const user = this.props.currentUser;
    const avatar = user && user.avatar && user.avatar.length && user.avatar[0].publicUrl;

    const firstUserLetter = user && (user.firstName|| user.email)[0].toUpperCase();

    return (
      <Navbar className={`${s.root} d-print-none ${navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ''}`}  style={{zIndex: !openUsersList ? 100 : 0}}>
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
            <NavLink className={`d-md-down-none ${s.toggleSidebar}`} id="toggleSidebar" onClick={this.toggleSidebar}>
              <span className={s.headerSvgFlipColor}>
                <MenuIcon  maskId={1001}/>
              </span>
            </NavLink>
            <UncontrolledTooltip placement="bottom" target="toggleSidebar">
              Turn on/off<br />sidebar<br />collapsing
            </UncontrolledTooltip>
            <NavLink className="fs-lg d-lg-none" onClick={this.switchSidebar}>
            <span 
              className={`rounded rounded-lg d-md-none d-sm-down-block`} style={{marginTop: 7}}>
                <span 
                  className={s.headerSvgFlipColor}
                  style={{fontSize: 30}} 
                ><MenuIcon maskId={1000}/></span>
              </span>
              <span className={`ml-3 d-sm-down-none ${s.headerSvgFlipColor}`}>
                <MenuIcon maskId={999}/>
              </span>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <span className={s.headerSvgFlipColor}>
                <FlipIcon />
              </span>
            </NavLink>
          </NavItem>
          <NavItem className="d-sm-down-none">
            <NavLink className="px-2">
              <span className={s.headerSvgFlipColor}>
                <CloseIcon />
              </span>
            </NavLink>
          </NavItem>

        </Nav>

        <Form className={`d-sm-down-none ml-5 ${s.headerSearchInput}`} inline>
          <FormGroup>
            <InputGroup onFocus={this.toggleFocus} onBlur={this.toggleFocus} className={
              cx('input-group-no-border', {'focus' : !!focus})
            }>
              <InputGroupAddon addonType="prepend">
                <span className={`${s.headerSvgFlipColor}`}><SearchIcon /></span>
              </InputGroupAddon>
              <Input id="search-input" placeholder="Search Dashboard" className={cx({'focus' : !!focus})} />
            </InputGroup>
          </FormGroup>
        </Form>

        <NavLink className={`${s.navbarBrand} d-md-none ${s.headerSvgFlipColor}`}>
          <i className="fa fa-circle text-primary mr-n-sm" />
          <i className="fa fa-circle text-danger" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-danger mr-n-sm" />
          <i className="fa fa-circle text-primary" />
        </NavLink>

        <Nav className="ml-auto">
          <Dropdown nav isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} id="basic-nav-dropdown" className={`${s.notificationsMenu}`}>
            <DropdownToggle nav caret className={s.headerSvgFlipColor}>
            <span className={`${s.avatar} rounded-circle float-left mr-2`}>
              {avatar ? (
                <img src={avatar} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : user && user.role === 'admin' ? (
                <img src={adminDefault} onError={e => e.target.src = adminDefault} alt="..." title={user && (user.firstName || user.email)} />
              ) : <span title={user && (user.firstName || user.email)}>{firstUserLetter}</span>
              }
            </span>
              <span className={`small d-sm-down-none ${s.headerTitle} ${this.props.sidebarStatic ? s.adminEmail : ''}`}>{user ? (user.firstName || user.email) : "Philip smith"}</span>
              <span className="ml-1 circle bg-primary text-white fw-bold d-sm-down-none">13</span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}>
              <Notifications />
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="tutorial-dropdown pr-4">
            <DropdownToggle nav className={`${s.mobileCog}`}>
              <span className={`${s.headerSvgFlipColor}`}>
                <SettingsIcon/>
              </span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.headerDropdownLinks} super-colors`}>
              <DropdownItem href="http://demo-flatlogic2.herokuapp.com/sing-app-react/#/app/profile"><span className={s.headerDropdownIcon}><PersonIcon/></span> My Account</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="http://demo-flatlogic2.herokuapp.com/sing-app-react/#/app/extra/calendar"><span className={s.headerDropdownIcon}><CalendarIcon/></span>Calendar</DropdownItem>
              <DropdownItem href="http://demo-flatlogic2.herokuapp.com/sing-app-react/#/app/inbox"><span className={s.headerDropdownIcon}><EmailIcon/></span>Inbox &nbsp;&nbsp;</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.doLogout}><span className={s.headerDropdownIcon}><PowerIcon/></span> Log Out</DropdownItem>
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
    openUsersList: store.chat.openUsersList,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

