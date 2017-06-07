import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Switch, Route, withRouter } from 'react-router';

// an example of react-router code-splitting
/* eslint-disable */
import loadProfile from 'bundle-loader?lazy!../../pages/profile/Profile';
/* eslint-enable */

import s from './Layout.scss';
import Header from '../Header';
import Bundle from '../../core/Bundle';
import Sidebar from '../Sidebar';
import Chat from '../Chat';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard/Dashboard';

const ProfileBundle = Bundle.generateBundle(loadProfile);

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.chatToggle = this.chatToggle.bind(this);
    this.sidebarToggle = this.sidebarToggle.bind(this);

    this.state = {
      sidebarOpen: false,
      chatOpen: false,
    };
  }

  chatToggle() {
    this.setState({ chatOpen: !this.state.chatOpen });
  }

  sidebarToggle() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <div className={[s.root, this.state.sidebarOpen ? s.sidebarOpen : '', this.state.chatOpen ? s.chatOpen : ''].join(' ')}>
        <Sidebar />
        <div className={s.wrap}>
          <Header chatToggle={this.chatToggle} sidebarToggle={this.sidebarToggle} />
          <Chat chatOpen={this.state.chatOpen} />
          <main className={s.content}>
            <Switch>
              <Route path="/app" exact component={Dashboard} />
              <Route path="/app/profile" exact component={ProfileBundle} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(s)(Layout));
