import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import $ from 'jquery';
import Hammer from 'rc-hammerjs';

import Profile from '../../pages/profile';
import UIButtons from '../../pages/ui-elements/buttons';
import UIIcons from '../../pages/ui-elements/icons';
import UITabsAccordion from '../../pages/ui-elements/tabs-accordion/';
import UINotifications from '../../pages/ui-elements/notifications';
import UIListGroups from '../../pages/ui-elements/list-groups';
import FormsElements from '../../pages/forms/elements';
import FormsValidation from '../../pages/forms/validation';
import FormsWizard from '../../pages/forms/wizard';
import TablesStatic from '../../pages/tables/static';
import TablesDynamic from '../../pages/tables/dynamic';
import MapsGoogle from '../../pages/maps/google';
import MapsVector from '../../pages/maps/vector';
import ExtraCalendar from '../../pages/extra/calendar';
import ExtraInvoice from '../../pages/extra/invoice';
import ExtraSearch from '../../pages/extra/search';
import ExtraTimeline from '../../pages/extra/timeline';
import ExtraGallery from '../../pages/extra/gallery';
import Grid from '../../pages/grid';
import Widgets from '../../pages/widgets';
import Products from '../../pages/products';
import Product from '../../pages/product';
import Package from '../../pages/package';
import Email from '../../pages/email';
import CoreTypography from '../../pages/core/typography';
import CoreColors from '../../pages/core/colors';
import CoreGrid from '../../pages/core/grid';
import UIAlerts from '../../pages/ui-elements/alerts';
import UIBadge from '../../pages/ui-elements/badge';
import UICard from '../../pages/ui-elements/card';
import UICarousel from '../../pages/ui-elements/carousel';
import UIJumbotron from '../../pages/ui-elements/jumbotron';
import UIModal from '../../pages/ui-elements/modal';
import UIProgress from '../../pages/ui-elements/progress';
import UINavbar from '../../pages/ui-elements/navbar';
import UINav from '../../pages/ui-elements/nav';
import UIPopovers from '../../pages/ui-elements/popovers';
import Charts from '../../pages/charts';
import ChartsEasyPie from '../../pages/charts/easy-pie';
import ChartsMorris from '../../pages/charts/morris';
import ChartsFlot from '../../pages/charts/flot';
import ChartsSparkline from '../../pages/charts/sparkline';
import ChartsRickshaw from '../../pages/charts/rickshaw';
import DashboardAnalytics from '../../pages/analytics'; 
import Dashboard from '../../pages/dashboard';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import Helper from '../Helper';
import { openSidebar, closeSidebar, changeActiveSidebarItem, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';

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

  chatToggle() {
    this.setState({ chatOpen: !this.state.chatOpen });
    $('.chat-notification-sing').remove();

    setTimeout(() => {
      // demo: add class & badge to indicate incoming messages from contact
      // .js-notification-added ensures notification added only once
      $('#chat-sidebar-user-group').find('.list-group-item:first-child:not(.js-notification-added)')
        .addClass('active js-notification-added')
        .find('.fa-circle')
        .after('<span class="badge badge-danger badge-pill ' +
        'float-right animated bounceInDown">3</span>');
    }, 1000);
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

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          this.props.sidebarStatic ? s.sidebarStatic : '',
          this.state.chatOpen ? s.chatOpen : '',
          !this.props.sidebarOpened ? s.sidebarClose : '',
        ].join(' ')}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header chatToggle={this.chatToggle} />
          <Chat chatOpen={this.state.chatOpen} />
          <Helper />
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.pathname}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/analytics" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/main/widgets" exact component={Widgets} />
                    <Route path="/app/main/analytics" exact component={DashboardAnalytics} />
                    <Route path="/app/ecommerce/products" exact component={Products} />
                    <Route path="/app/ecommerce/product" exact component={Product} />
                    <Route path="/app/profile" exact component={Profile} />
                    <Route path="/app/inbox" exact component={Email} />
                    <Route path="/app/ui" exact render={() => <Redirect to="/app/ui/components" />} />
                    <Route path="/app/ui/buttons" exact component={UIButtons} />
                    <Route path="/app/ui/icons" exact component={UIIcons} />
                    <Route path="/app/ui/tabs-accordion" exact component={UITabsAccordion} />
                    <Route path="/app/ui/notifications" exact component={UINotifications} />
                    <Route path="/app/ui/list-groups" exact component={UIListGroups} />
                    <Route path="/app/ui/alerts" exact component={UIAlerts} />
                    <Route path="/app/ui/badge" exact component={UIBadge} />
                    <Route path="/app/ui/card" exact component={UICard} />
                    <Route path="/app/ui/carousel" exact component={UICarousel} />
                    <Route path="/app/ui/jumbotron" exact component={UIJumbotron} />
                    <Route path="/app/ui/modal" exact component={UIModal} />
                    <Route path="/app/ui/popovers" exact component={UIPopovers} />
                    <Route path="/app/ui/progress" exact component={UIProgress} />
                    <Route path="/app/ui/navbar" exact component={UINavbar} />
                    <Route path="/app/ui/nav" exact component={UINav} />
                    <Route path="/app/grid" exact component={Grid} />
                    <Route path="/app/package" exact component={Package} />
                    <Route path="/app/forms" exact render={() => <Redirect to="/app/forms/elements" />} />
                    <Route path="/app/forms/elements" exact component={FormsElements} />
                    <Route path="/app/forms/validation" exact component={FormsValidation} />
                    <Route path="/app/forms/wizard" exact component={FormsWizard} />
                    <Route path="/app/charts/" exact render={() => <Redirect to="/app/charts/overview" />} />
                    <Route path="/app/charts/overview" exact component={Charts} />
                    <Route path="/app/charts/easy-pie" exact component={ChartsEasyPie} />
                    <Route path="/app/charts/morris" exact component={ChartsMorris} />
                    <Route path="/app/charts/flot" exact component={ChartsFlot} />
                    <Route path="/app/charts/sparkline" exact component={ChartsSparkline} />
                    <Route path="/app/charts/rickshaw" exact component={ChartsRickshaw} />
                    <Route path="/app/tables" exact render={() => <Redirect to="/app/tables/static" />} />
                    <Route path="/app/tables/static" exact component={TablesStatic} />
                    <Route path="/app/tables/dynamic" exact component={TablesDynamic} />
                    <Route path="/app/extra" exact render={() => <Redirect to="/app/extra/calendar" />} />
                    <Route path="/app/extra/calendar" exact component={ExtraCalendar} />
                    <Route path="/app/extra/invoice" exact component={ExtraInvoice} />
                    <Route path="/app/extra/search" exact component={ExtraSearch} />
                    <Route path="/app/extra/timeline" exact component={ExtraTimeline} />
                    <Route path="/app/extra/gallery" exact component={ExtraGallery} />
                    <Route path="/app/maps" exact render={() => <Redirect to="/app/maps/google" />} />
                    <Route path="/app/maps/google" exact component={MapsGoogle} />
                    <Route path="/app/maps/vector" exact component={MapsVector} />
                    <Route path="/app/core" exact render={() => <Redirect to="/app/core/typography" />} />
                    <Route path="/app/core/typography" exact component={CoreTypography} />
                    <Route path="/app/core/colors" exact component={CoreColors} />
                    <Route path="/app/core/grid" exact component={CoreGrid} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                Sing App React Admin Dashboard Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
              </footer>
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
