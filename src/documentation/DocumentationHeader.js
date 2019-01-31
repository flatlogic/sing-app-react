import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
} from 'reactstrap';

import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../actions/navigation';

import s from '../components/Header/Header.module.scss'; // eslint-disable-line css-modules/no-unused-class
import sd from './styles.module.scss';

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

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  render() {
    return (
      <Navbar className={classnames(s.root, sd.header, 'd-print-none')}>
        <div className="container">
          <Nav>
            <NavItem>
              <NavLink className="fs-lg d-lg-none d-md-none" onClick={this.switchSidebar}>
                <span className="rounded rounded-lg text-white d-md-none"><i className="la la-bars" /></span>
                <i className="la la-bars ml-3 d-sm-down-none" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="d-sm-down-none text-white">
                Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="d-sm-down-none text-warning fw-semi-bold ml-5">
                Sing App
              </NavLink>
            </NavItem>
          </Nav>

          <NavLink className={`${s.navbarBrand} d-md-none text-muted`}>
            <i className="fa fa-circle text-gray mr-n-sm" />
            <i className="fa fa-circle text-warning" />
            &nbsp;
            documentation
            &nbsp;
            <i className="fa fa-circle text-warning mr-n-sm" />
            <i className="fa fa-circle text-muted" />
          </NavLink>

          <Nav className="ml-auto">
            <NavItem className="d-flex">
              <NavLink href="/" className="d-sm-down-none ml-1">
                <button className="btn btn-outline-warning">
                  Live Preview
                </button>
              </NavLink>
              <NavLink href="https://flatlogic.com/admin-dashboards/sing-app-react" target="_blank">
                <button className="btn btn-warning text-white">
                  Buy Now
                </button>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
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

