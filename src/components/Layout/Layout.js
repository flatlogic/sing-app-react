import React from 'react';
import { connect } from 'react-redux';
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
import $ from 'jquery';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard/Dashboard';

const ProfileBundle = Bundle.generateBundle(loadProfile);

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.chatToggle = this.chatToggle.bind(this);

    this.state = {
      chatOpen: false,
    };
  }

  chatToggle() {
    this.setState({ chatOpen: !this.state.chatOpen });
    $('.chat-notification-sing').remove();

    setTimeout(() => {
      // demo: add class & badge to indicate incoming messages from contact
      // .js-notification-added ensures notification added only once
    $('#chat-sidebar-user-group .list-group-item:first-child:not(.js-notification-added)')
      .addClass('active js-notification-added')
      .find('.fa-circle')
      .before('<span class="badge badge-danger badge-pill ' +
        'flex-last animated bounceInDown">3</span>');
    }, 1000);
  }

  render() {
    return (
      <div className={[s.root, this.props.sidebarStatic ? s.sidebarStatic : '', this.state.chatOpen ? s.chatOpen : '',  !this.props.sidebarOpened ? s.sidebarClose : ''].join(' ')}>
        <Sidebar/>
        <div className={s.wrap}>
          <Header chatToggle={this.chatToggle}/>
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

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Layout)));
