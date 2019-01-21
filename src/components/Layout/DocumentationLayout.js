import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import Hammer from 'rc-hammerjs';

import Header from '../Header/DocumentationHeader';
import Sidebar from '../Sidebar/DocumentationSidebar';
import { openSidebar, closeSidebar, changeActiveSidebarItem, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';

import Overview from '../../pages/documentation/getting-started/Overview'
import Licences from '../../pages/documentation/getting-started/Licences';
import QuickStart from '../../pages/documentation/getting-started/QuickStart';
import Alerts from '../../pages/documentation/components/Alerts';
import Badge from '../../pages/documentation/components/Badge';
import Buttons from '../../pages/documentation/components/Buttons';
import Card from '../../pages/documentation/components/Card';
import Carousel from '../../pages/documentation/components/Carousel';
import Modal from '../../pages/documentation/components/Modal';
import Nav from '../../pages/documentation/components/Nav';
import Navbar from '../../pages/documentation/components/Navbar';
import Popovers from '../../pages/documentation/components/Popovers';
import Progress from '../../pages/documentation/components/Progress';
import Tabs from '../../pages/documentation/components/Tabs';
import Libs from '../../pages/documentation/Libs';


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

    this.handleSwipe = this.handleSwipe.bind(this);

    this.state = {
      chatOpen: false,
    };
  }

  componentDidMount() {
    const staticSidebar = JSON.parse(localStorage.getItem('staticSidebar'));
    if (staticSidebar) {
      this.props.dispatch(toggleSidebar());
    } else if (this.props.sidebarOpened) {
      setTimeout(() => {
        this.props.dispatch(closeSidebar());
        this.props.dispatch(changeActiveSidebarItem(null));
      }, 2500);
    }
  }

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          this.props.sidebarStatic ? s.sidebarStatic : '',
          !this.props.sidebarOpened ? s.sidebarClose : '',
        ].join(' ')}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header/>
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <Switch>
                <Route path="/documentation/getting-started/overview" exact component={Overview} />
                <Route path="/documentation/getting-started/licences" exact component={Licences} />
                <Route path="/documentation/getting-started/quick-start" exact component={QuickStart} />
                <Route path="/documentation/components/alerts" exact component={Alerts} />
                <Route path="/documentation/components/badge" exact component={Badge} />
                <Route path="/documentation/components/buttons" exact component={Buttons} />
                <Route path="/documentation/components/card" exact component={Card} />
                <Route path="/documentation/components/carousel" exact component={Carousel} />
                <Route path="/documentation/components/modal" exact component={Modal} />
                <Route path="/documentation/components/nav" exact component={Nav} />
                <Route path="/documentation/components/navbar" exact component={Navbar} />
                <Route path="/documentation/components/popovers" exact component={Popovers} />
                <Route path="/documentation/components/tabs-accordion" exact component={Tabs} />
                <Route path="/documentation/components/progress" exact component={Progress} />
                <Route path="/documentation/libs" exact component={Libs} />
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

export default withRouter(connect(mapStateToProps)(Layout));
