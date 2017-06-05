import React from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Glyphicon, ProgressBar} from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom';

import s from './Sidebar.scss';
import LinksGroup from './LinksGroup/LinksGroup';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app">sing</Link>
    </header>

    <ul className={s.nav}>
      <LinksGroup header="Dashboard" headerLink="/app" iconName="glyphicon-tree-conifer"/>
      <LinksGroup header="Profile" headerLink="/app/profile" iconName="glyphicon-user"/>
    </ul>
    <h5 className={s.navTitle}>
      LABELS
      <a className="acton-link">
        <Glyphicon glyph="plus" bsSize="small pull-right"/>
      </a>
    </h5>
    <ul className={s.sidebarLabels}>
      <li>
        <a>My Recent</a>
      </li>
      <li>
        <a>Starred</a>
      </li>
      <li>
        <a>Background</a>
      </li>
    </ul>
    <h5 className={s.navTitle}>
      PROJECTS
    </h5>
    <div className="sidebar-alerts">
      <div className="alert fade show">
        <span className="text-white fw-semi-bold">Sales Report</span> <br></br>
        <ProgressBar className="progress-sm" bsStyle="success" now={40} />
        <small>Calculating x-axis bias... 65%</small>
      </div>
      <div className="alert fade show">
        <span className="text-white fw-semi-bold">Personal Responsibility</span> <br></br>
        {/*<ProgressBar now={60}/>*/}
        <small>Provide required notes</small>
      </div>
    </div>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Sidebar)));
