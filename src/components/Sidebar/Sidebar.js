import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Progress, Alert } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.scss';
import LinksGroup from './LinksGroup/LinksGroup';

import { openSidebar } from '../../actions/navigation'
import { closeSidebar } from '../../actions/navigation'

class Sidebar extends React.Component {

  dismissAlert(id) {
    this.props
      .dispatch(dismissAlert(id)); // eslint-disable-line
  }

  onMouseEnter() {
    if(!this.props.sidebarStatic) {
      this.props.dispatch(openSidebar());
    }
  }

  onMouseLeave() {
    if(!this.props.sidebarStatic) {
      this.props.dispatch(closeSidebar());
    }
  }

  render() {
    return (
      <nav onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} className={[s.root, this.props.sidebarStatic ? s.staticSidebar : '', !this.props.sidebarOpened ? s.sidebarClose : ''].join(' ')}>
        <header className={s.logo}>
          <Link to="/app">sing</Link>
        </header>

        <ul className={s.nav}>
          <LinksGroup header="Dashboard" headerLink="/app" iconName="fa-child" />
          <LinksGroup header="Another Page" headerLink="/app/profile" iconName="fa-tree" badge="9"/>
        </ul>
        <h5 className={s.navTitle}>
          LABELS
          <a className={s.actionLink}>
            <i className={`${s.glyphiconSm} glyphicon glyphicon-plus float-right`} />
          </a>
        </h5>
        {/* eslint-disable */}
        <ul className={s.sidebarLabels}>
          <li>
            <a href="#">
              <i className="fa fa-circle text-warning mr-2" />
              <span className={s.labelName}>My Recent</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle text-gray mr-2" />
              <span className={s.labelName}>Starred</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle text-danger mr-2" />
              <span className={s.labelName}>Background</span>
            </a>
          </li>
        </ul>
        {/* eslint-enable */}
        <h5 className={s.navTitle}>
          PROJECTS
        </h5>
        <div className={s.sidebarAlerts}>
          {this.props.alertsList.map(alert => // eslint-disable-line
            <Alert
              key={alert.id}
              className={s.sidebarAlert} color="transparent"
              isOpen={true} // eslint-disable-line
              toggle={() => { this.dismissAlert(alert.id); }}
            >
              <span className="text-white fw-semi-bold">{alert.title}</span><br />
              <Progress className={`${s.sidebarProgress} progress-xs mt-1`} color={alert.color} value={alert.value} />
              <small>{alert.footer}</small>
            </Alert>,
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Sidebar)));
