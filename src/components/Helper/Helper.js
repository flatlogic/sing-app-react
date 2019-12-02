import React, { Component } from 'react';
import cx from 'classnames';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DashboardThemes, SidebarTypes, NavbarTypes } from '../../reducers/layout';
import { changeTheme, changeSidebarColor, changeNavbarColor, navbarTypeToggle, sidebarTypeToggle } from '../../actions/layout';
import CustomColorPicker from '../ColorPicker';
import config from '../../config';

import Widget from '../Widget';

import s from './Helper.module.scss'; // eslint-disable-line

class Helper extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dashboardTheme: PropTypes.string
  };

  static defaultProps = {
    dashboardTheme: DashboardThemes.DARK
  };

  state = { isOpened: false };

  toggle = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };

  changeTheme = (state) => {
    this.props.dispatch(changeTheme(state));
    this.props.dispatch(changeSidebarColor(state))
  };

  navbarStateToggle = (state) => {
    this.props.dispatch(navbarTypeToggle(state))
  }

  sidebarStateToggle = (state) => {
    this.props.dispatch(sidebarTypeToggle(state))
  }

  updateColor = (value) => {
    this.props.dispatch(changeNavbarColor(value))
  }

  render() {
    const { isOpened } = this.state;
    const { navbarColor, sidebarColor, navbarType, sidebarType } = this.props;
    
    return (
      <div className={cx(s.themeHelper, { [s.themeHelperOpened]: isOpened })}>
          <div className={`${s.themeHelperBtn} bg-warning`} onClick={this.toggle}>
            <div className={cx(s.themeHelperSpinner, 'text-white')}>
              <i className="la la-cog" />
              <i className="la la-cog" />
            </div>
          </div>
        <Widget
          className={s.themeHelperContent}
        >
          <h5 className="mt-2 mb-5">Theme</h5>

          <div className="theme-settings">
            <h5>Navbar Type</h5>
            <div className="form-group row">
              <div className="abc-radio">
                <input onChange={() => this.navbarStateToggle(NavbarTypes.STATIC)} type="radio" checked={navbarType === NavbarTypes.STATIC ? true : ''} name="navbar-type" id="navbar_static" />
                <label htmlFor="navbar_static">Static</label>
              </div>
     
              <div className="abc-radio">
                <input onChange={() => this.navbarStateToggle(NavbarTypes.FLOATING)} type="radio" checked={navbarType === NavbarTypes.FLOATING ? true : ''} name="navbar-type" id="navbar_floating" />
                <label htmlFor="navbar_floating">Floating</label>
              </div>
            </div>

            <h5>Navbar Color</h5>
            <CustomColorPicker 
              colors={config.app.colors}
              activeColor={navbarColor}
              updateColor={this.updateColor}
              customizationItem={"navbar"}
            />

            <h5>Sidebar Type</h5>
            <div className="form-group row">
              <div className="abc-radio">
                <input type="radio" onChange={() => this.sidebarStateToggle(SidebarTypes.TRANSPARENT)} checked={sidebarType === SidebarTypes.TRANSPARENT ? true : ''} name="sidebar-type" id="sidebar_transparent" />
                <label htmlFor="sidebar_transparent">Transparent</label>
              </div>
    
              <div className="abc-radio">
                <input type="radio" onChange={() => this.sidebarStateToggle(SidebarTypes.SOLID)} checked={sidebarType === SidebarTypes.SOLID ? true : ''} name="sidebar-type" id="sidebar_solid" />
                <label htmlFor="sidebar_solid">Solid</label>
              </div>
            </div>

            <h5>Sidebar Color</h5>
            <CustomColorPicker 
              colors={config.app.colors}
              activeColor={sidebarColor}
              updateColor={this.changeTheme}
              customizationItem={"sidebar"}
            />

          </div>
          <div className="mt-4">
            <Button
              href="https://flatlogic.com/admin-dashboards/sing-app-react"
              target="_blank"
              className="btn-rounded-f btn-block fs-mini"
              color="warning"
            >
              <span className="text-white">Purchase</span>
            </Button>
            <Button
              href="http://demo.flatlogic.com/sing-app/documentation/"
              target="_blank"
              className="btn-rounded-f btn-block fs-mini text-white"
            >
              Documentation
            </Button>
          </div>
          <div className="d-flex justify-content-between mt-lg">
            <Button
              href="https://flatlogic.com/contact"
              target="_blank"
              className="btn-outline-default btn-rounded-f fs-mini text-muted px-2"
            >
              <i className="glyphicon glyphicon-headphones mr-xs" />
              Support
            </Button>
            <Button
              href="https://github.com/flatlogic/sing-app"
              target="_blank"
              className="btn-outline-default btn-rounded-f fs-mini text-muted px-2"
            >
              <i className="fa fa-github mr-xs" />
              Github
            </Button>
          </div>
          <div className="mt-lg d-flex flex-column align-items-center theme-helper__sharing">
            <span className="fs-sm">
              Thank you for sharing!
            </span>
            <div className="d-flex justify-content-center text-light mt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/intent/tweet?text=Amazing%20dashboard%20built%20with%20NodeJS,%20React%20and%20Bootstrap!&url=https://github.com/flatlogic/react-dashboard&via=flatlogic"
              >
                <i className="fa fa-twitter pr-1" />
              </a>
              <a
                href="https://www.facebook.com/search/top/?q=flatlogic%20llc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook pl-1" />
              </a>
            </div>
          </div>
        </Widget>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    dashboardTheme: store.layout.dashboardTheme,
    sidebarColor: store.layout.sidebarColor,
    navbarColor: store.layout.navbarColor,
    navbarType: store.layout.navbarType,
    sidebarType: store.layout.sidebarType
  };
}

export default connect(mapStateToProps)(Helper);
