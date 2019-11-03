import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../actions/navigation';

import s from '../components/Header/Header.module.scss'; // eslint-disable-line css-modules/no-unused-class
import sd from './styles.module.scss';

import twitterLogo from '../images/documentation/twitter-logo.svg';
import dribbleLogo from '../images/documentation/dribble-logo.svg';
import facebookLogo from '../images/documentation/facebook-logo.svg';
import instagramLogo from '../images/documentation/instagram-logo.svg';
import linkedinLogo from '../images/documentation/linkedin-logo.svg';
import githubLogo from '../images/documentation/github-logo.svg';

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
          <div className="row w-100 d-flex align-items-center">
            <Nav>
              <NavItem>
                <NavLink className="fs-lg d-lg-none d-md-none" onClick={this.switchSidebar}>
                  <span className="rounded rounded-lg text-white d-md-none"><i className="la la-bars" /></span>
                  <i className="la la-bars ml-3 d-sm-down-none" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames(s.logo, 'd-sm-down-none px-4')} href={'/documentation'}>
                  <span className={'fw-semi-bold'}>Sing App React</span> &nbsp;  Documentation
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
              <NavItem className="d-flex alight-items-center d-md-down-none">
                <NavLink href="https://twitter.com/flatlogic" className="mr-1">
                  <img src={twitterLogo} alt="twitter" />
                </NavLink>
                <NavLink href="https://dribbble.com/flatlogic" className="mr-1">
                  <img src={dribbleLogo} alt="dribble" />
                </NavLink>
                <NavLink href="https://dribbble.com/flatlogic" className="mr-1">
                  <img src={facebookLogo} alt="facebook" />
                </NavLink>
                <NavLink href="https://instagram.com/flatlogiccom/" className="mr-1">
                  <img src={instagramLogo} alt="instagram" />
                </NavLink>
                <NavLink href="https://www.linkedin.com/company/flatlogic/" className="mr-1">
                  <img src={linkedinLogo} alt="linkedin" />
                </NavLink>
                <NavLink href="https://github.com/flatlogic" className="mr-3">
                  <img src={githubLogo} alt="github" />
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <div className="d-md-down-none">
                  <Link to="/" className="btn btn-default">
                    Live Preview
                  </Link>
                </div>
                <NavLink href="https://flatlogic.com/admin-dashboards/sing-app-react" target="_blank" className="mr-1">
                  <button className="btn btn-warning text-gray fw-semi-bold">
                    Buy Now
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
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

