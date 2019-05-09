import React, { Component } from 'react';
import cx from 'classnames';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DashboardThemes } from '../../reducers/layout';
import { changeTheme } from '../../actions/layout';

import Widget from '../Widget';

import s from './Helper.module.scss'; // eslint-disable-line

class Helper extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dashboardTheme: PropTypes.string
  };

  static defaultProps = {
    dashboardTheme: DashboardThemes.LIGHT
  };

  state = { isOpened: false };

  toggle = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };

  changeTheme = (state) => {
    this.props.dispatch(changeTheme(state));
  };

  render() {
    const { isOpened } = this.state;
    return (
      <div className={cx(s.themeHelper, { [s.themeHelperOpened]: isOpened })}>
        <Widget
          className={s.themeHelperContent}
          bodyClass="mt-3"
          title={
            <header className={cx(s.themeHelperHeader, 'd-flex p-0')}>
              <Button color="warning" className={s.themeHelperBtn} onClick={this.toggle}>
                <div className={cx(s.themeHelperSpinner, 'text-white')}>
                  <i className="la la-cog" />
                  <i className="la la-cog" />
                </div>
              </Button>
              <h6>Configuration</h6>
            </header>
          }
        >
          <div className="theme-switcher d-flex justify-content-center">
              <div className="form-check abc-radio abc-radio-warning form-check-inline">
                <input className="form-check-input" checked={this.props.dashboardTheme === DashboardThemes.LIGHT} onClick={() => this.changeTheme(DashboardThemes.LIGHT)} type="radio" id="css-light" value="option2" name="css-light" aria-label="Sing Light" readOnly/>
                <label className="form-check-label" htmlFor="css-light" />
              </div>
              <div className="form-check abc-radio abc-radio-secondary mr-0 form-check-inline">
                <input className="form-check-input" checked={this.props.dashboardTheme === DashboardThemes.DARK} onClick={() => this.changeTheme(DashboardThemes.DARK)} type="radio" id="css-dark" value="option1" name="css-light" aria-label="Single Dark" readOnly/>
                <label className="form-check-label" htmlFor="css-dark" />
              </div>
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
  };
}

export default connect(mapStateToProps)(Helper);
