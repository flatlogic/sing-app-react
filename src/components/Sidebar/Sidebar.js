import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { ProgressBar } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import s from './Sidebar.scss';
import LinksGroup from './LinksGroup/LinksGroup';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app">sing</Link>
    </header>

    <ul className={s.nav}>
      <LinksGroup header="Dashboard" headerLink="/app" iconName="glyphicon-tree-conifer" />
      <LinksGroup header="Profile" headerLink="/app/profile" iconName="glyphicon-user"
      />
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Sidebar)));
