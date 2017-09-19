import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Switch, Route, withRouter } from 'react-router';
import $ from 'jquery';

import Hammer from 'rc-hammerjs';

// an example of react-router code-splitting
/* eslint-disable */
import loadProfile from 'bundle-loader?lazy!../../pages/profile/Profile';
import loadUIButtons from 'bundle-loader?lazy!../../pages/ui-elements/buttons/Buttons';
import loadUIComponent from 'bundle-loader?lazy!../../pages/ui-elements/components/Components';
import loadUIIcons from 'bundle-loader?lazy!../../pages/ui-elements/icons/Icons';
import loadUITabsAccordion from 'bundle-loader?lazy!../../pages/ui-elements/tabs-accordion/TabsAccordion';
import loadUIListGroups from 'bundle-loader?lazy!../../pages/ui-elements/list-groups/ListGroups';
import loadFormsElements from 'bundle-loader?lazy!../../pages/forms/elements/Elements';
/* eslint-enable */

import s from './Layout.scss';
import Header from '../Header';
import Bundle from '../../core/Bundle';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard/Dashboard';

const ProfileBundle = Bundle.generateBundle(loadProfile);
const UIButtonsBundle = Bundle.generateBundle(loadUIButtons);
const UIComponentsBundle = Bundle.generateBundle(loadUIComponent);
const UIIconsBundle = Bundle.generateBundle(loadUIIcons);
const UITabsAccordionBundle = Bundle.generateBundle(loadUITabsAccordion);
const UIListGroupsBundle = Bundle.generateBundle(loadUIListGroups);
const FormsElementsBundle = Bundle.generateBundle(loadFormsElements);

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.chatToggle = this.chatToggle.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);

    this.state = {
      chatOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.sidebarOpened) {
      setTimeout(() => {
        this.props.dispatch(closeSidebar());
        this.props.dispatch(changeActiveSidebarItem(null));
      }, 2500);
    }
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

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div className={[s.root, this.props.sidebarStatic ? s.sidebarStatic : '', this.state.chatOpen ? s.chatOpen : '', !this.props.sidebarOpened ? s.sidebarClose : ''].join(' ')}>
        <Sidebar />
        <div className={s.wrap}>
          <Header chatToggle={this.chatToggle} />
          <Chat chatOpen={this.state.chatOpen} />
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <Switch>
                <Route path="/app" exact component={Dashboard} />
                <Route path="/app/profile" exact component={ProfileBundle} />
                <Route path="/app/ui/buttons" exact component={UIButtonsBundle} />
                <Route path="/app/ui/components" exact component={UIComponentsBundle} />
                <Route path="/app/ui/icons" exact component={UIIconsBundle} />
                <Route path="/app/ui/tabs-accordion" exact component={UITabsAccordionBundle} />
                <Route path="/app/ui/list-groups" exact component={UIListGroupsBundle} />
                <Route path="/app/forms/elements" exact component={FormsElementsBundle} />
              </Switch>
            </main>
          </Hammer>
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
