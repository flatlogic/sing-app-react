import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import $ from 'jquery';

import Hammer from 'rc-hammerjs';

// an example of react-router code-splitting
/* eslint-disable */
import loadProfile from 'bundle-loader?lazy!../../pages/profile';
import loadUIButtons from 'bundle-loader?lazy!../../pages/ui-elements/buttons';
import loadUIComponent from 'bundle-loader?lazy!../../pages/ui-elements/components';
import loadUIIcons from 'bundle-loader?lazy!../../pages/ui-elements/icons';
import loadUITabsAccordion from 'bundle-loader?lazy!../../pages/ui-elements/tabs-accordion/';
import loadUINotifications from 'bundle-loader?lazy!../../pages/ui-elements/notifications';
import loadUIListGroups from 'bundle-loader?lazy!../../pages/ui-elements/list-groups';
import loadFormsElements from 'bundle-loader?lazy!../../pages/forms/elements';
import loadFormsValidation from 'bundle-loader?lazy!../../pages/forms/validation';
import loadFormsWizard from 'bundle-loader?lazy!../../pages/forms/wizard';
import loadTablesStatic from 'bundle-loader?lazy!../../pages/tables/static';
import loadTablesDynamic from 'bundle-loader?lazy!../../pages/tables/dynamic';
import loadMapsGoogle from 'bundle-loader?lazy!../../pages/maps/google';
import loadMapsVector from 'bundle-loader?lazy!../../pages/maps/vector';
import loadExtraCalendar from 'bundle-loader?lazy!../../pages/extra/calendar';
import loadExtraInvoice from 'bundle-loader?lazy!../../pages/extra/invoice';
import loadExtraSearch from 'bundle-loader?lazy!../../pages/extra/search';
import loadExtraTimeline from 'bundle-loader?lazy!../../pages/extra/timeline';
import loadExtraGallery from 'bundle-loader?lazy!../../pages/extra/gallery';
import loadCharts from 'bundle-loader?lazy!../../pages/charts';
import loadGrid from 'bundle-loader?lazy!../../pages/grid';
import loadWidgets from 'bundle-loader?lazy!../../pages/widgets';
import loadProducts from 'bundle-loader?lazy!../../pages/products';
/* eslint-enable */

import s from './Layout.scss';
import Header from '../Header';
import Bundle from '../../core/Bundle';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import { openSidebar, closeSidebar, changeActiveSidebarItem, toggleSidebar } from '../../actions/navigation';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard';

const ProfileBundle = Bundle.generateBundle(loadProfile);
const UIButtonsBundle = Bundle.generateBundle(loadUIButtons);
const UIComponentsBundle = Bundle.generateBundle(loadUIComponent);
const UIIconsBundle = Bundle.generateBundle(loadUIIcons);
const UITabsAccordionBundle = Bundle.generateBundle(loadUITabsAccordion);
const UINotificationsBundle = Bundle.generateBundle(loadUINotifications);
const UIListGroupsBundle = Bundle.generateBundle(loadUIListGroups);
const FormsElementsBundle = Bundle.generateBundle(loadFormsElements);
const FormsValidationBundle = Bundle.generateBundle(loadFormsValidation);
const FormsWizardBundle = Bundle.generateBundle(loadFormsWizard);
const TablesStaticBundle = Bundle.generateBundle(loadTablesStatic);
const TablesDynamicBundle = Bundle.generateBundle(loadTablesDynamic);
const MapsGoogleBundle = Bundle.generateBundle(loadMapsGoogle);
const MapsVectorBundle = Bundle.generateBundle(loadMapsVector);
const ExtraCalendarBundle = Bundle.generateBundle(loadExtraCalendar);
const ExtraInvoiceBundle = Bundle.generateBundle(loadExtraInvoice);
const ExtraSearchBundle = Bundle.generateBundle(loadExtraSearch);
const ExtraTimelineBundle = Bundle.generateBundle(loadExtraTimeline);
const ExtraGallerylineBundle = Bundle.generateBundle(loadExtraGallery);
const ChartsBundle = Bundle.generateBundle(loadCharts);
const GridBundle = Bundle.generateBundle(loadGrid);
const WidgetsBundle = Bundle.generateBundle(loadWidgets);
const ProductsBundle = Bundle.generateBundle(loadProducts);

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
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <Switch>
                <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                <Route path="/app/main/dashboard" exact component={Dashboard} />
                <Route path="/app/main/widgets" exact component={WidgetsBundle} />
                <Route path="/app/pages/products" exact component={ProductsBundle} />
                <Route path="/app/profile" exact component={ProfileBundle} />
                <Route path="/app/charts" exact component={ChartsBundle} />
                <Route path="/app/ui" exact render={() => <Redirect to="/app/ui/components" />} />
                <Route path="/app/ui/buttons" exact component={UIButtonsBundle} />
                <Route path="/app/ui/components" exact component={UIComponentsBundle} />
                <Route path="/app/ui/icons" exact component={UIIconsBundle} />
                <Route path="/app/ui/tabs-accordion" exact component={UITabsAccordionBundle} />
                <Route path="/app/ui/notifications" exact component={UINotificationsBundle} />
                <Route path="/app/ui/list-groups" exact component={UIListGroupsBundle} />
                <Route path="/app/grid" exact component={GridBundle} />
                <Route path="/app/forms" exact render={() => <Redirect to="/app/forms/elements" />} />
                <Route path="/app/forms/elements" exact component={FormsElementsBundle} />
                <Route path="/app/forms/validation" exact component={FormsValidationBundle} />
                <Route path="/app/forms/wizard" exact component={FormsWizardBundle} />
                <Route path="/app/tables" exact render={() => <Redirect to="/app/tables/static" />} />
                <Route path="/app/tables/static" exact component={TablesStaticBundle} />
                <Route path="/app/tables/dynamic" exact component={TablesDynamicBundle} />
                <Route path="/app/maps" exact render={() => <Redirect to="/app/maps/google" />} />
                <Route path="/app/maps/google" exact component={MapsGoogleBundle} />
                <Route path="/app/maps/vector" exact component={MapsVectorBundle} />
                <Route path="/app/extra" exact render={() => <Redirect to="/app/extra/calendar" />} />
                <Route path="/app/extra/calendar" exact component={ExtraCalendarBundle} />
                <Route path="/app/extra/invoice" exact component={ExtraInvoiceBundle} />
                <Route path="/app/extra/search" exact component={ExtraSearchBundle} />
                <Route path="/app/extra/timeline" exact component={ExtraTimelineBundle} />
                <Route path="/app/extra/gallery" exact component={ExtraGallerylineBundle} />
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
