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
import $ from 'jquery';

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
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = {
      menuOpen: false,
      notificationsOpen: false,
      notificationsTabSelected: 1,
    };
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
    return (
      <Navbar className={`${s.root} d-print-none`}>
        <Nav>
          <NavItem>
            <NavLink className="d-md-down-none ml-3" id="toggleSidebar" onClick={this.toggleSidebar}>
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
        </Nav>

        <NavLink className={`${s.navbarBrand} d-md-none`}>
          <i className="fa fa-circle text-gray mr-n-sm" />
          <i className="fa fa-circle text-warning" />
          &nbsp;
          sing
          &nbsp;
          <i className="fa fa-circle text-warning mr-n-sm" />
          <i className="fa fa-circle text-gray" />
        </NavLink>
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

