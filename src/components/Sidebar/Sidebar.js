import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { dismissAlert } from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup/LinksGroup';
import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../../actions/navigation';
import isScreen from '../../core/screenHelper';
import { logoutUser } from '../../actions/auth';

import HomeIcon from '../../images/sidebar/Outline/Home';
import BrowserIcon from '../../images/sidebar/Outline/Browser';
import EmailIcon from '../../images/sidebar/Outline/Email';
import CopyIcon from '../../images/sidebar/Outline/Copy';
import FileTextIcon from '../../images/sidebar/Outline/FileText';
import FireIcon from '../../images/sidebar/Outline/Fire';
import GridIcon from '../../images/sidebar/Outline/Grid';
import KeypadIcon from '../../images/sidebar/Outline/Keypad';
import LayersIcon from '../../images/sidebar/Outline/Layers';
import LayoutIcon from '../../images/sidebar/Outline/Layout';
import ListIcon from '../../images/sidebar/Outline/List';
import MessageCircleIcon from '../../images/sidebar/Outline/MessageCircle';
import PersonIcon from '../../images/sidebar/Outline/Person';
import PieChartIcon from '../../images/sidebar/Outline/PieChart';
import PinIcon from '../../images/sidebar/Outline/Pin';
import ShoppingBagIcon from '../../images/sidebar/Outline/ShoppingBag';

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
    activeItem: '',
  };

  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  onMouseEnter() {
    if (!this.props.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  onMouseLeave() {
    if (!this.props.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    }
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div className={`${(!this.props.sidebarOpened && !this.props.sidebarStatic ) ? s.sidebarClose : ''} ${s.sidebarWrapper}`}>
      <nav
        onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
        className={s.root}
      >
        <header className={s.logo}>
          <a href="https://demo.flatlogic.com/sing-app-react/"><span className={s.logoStyle}>Sing App</span> </a>
        </header>
        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Dashboard"
            isHeader
            iconName="flaticon-home"
            iconElement={<HomeIcon />}
            link="/app/main"
            index="main"
            childrenLinks={[
              {
                header: 'Analytics', link: '/app/main/analytics',
              },
              {
                header: 'Visits', link: '/app/main/dashboard',
              },
              {
                header: 'Widgets', link: '/app/main/widgets',
              },
            ]}
          />
          <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Users"
              isHeader
              labelColor="danger"
              iconElement={<PersonIcon />}
              iconName="flaticon-user"
              link="/admin"
              index="admin"
              label="Real App"
              exact={false}
              childrenLinks={[
                  {
                    header: 'User Management', link: '/admin/users',
                  },
                  {
                    header: 'My Profile', link: '/app/profile',
                  },
                  {
                      header: 'Edit Profile', link: '/app/edit_profile',
                  },
                  {
                      header: 'Change Password', link: '/app/password',
                  },
              ]}
          />
          <LinksGroup
            header="Chat"
            link="/app/chat"
            isHeader
            iconElement={<MessageCircleIcon/>}
            label="Awesome"
            iconName="flaticon-users"
            labelColor="info"
          />
            <LinksGroup
                onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                activeItem={this.props.activeItem}
                header="E-commerce"
                isHeader
                labelColor="danger"
                iconElement={<ShoppingBagIcon />}
                iconName="flaticon-diamond"
                link="/app/ecommerce"
                index="ecommerce"
                label="NodeJS/.NET"
                exact={false}
                childrenLinks={[
                    {
                        header: 'Product Management', link: '/app/ecommerce/management',
                    },
                    {
                        header: 'Products Grid', link: '/app/ecommerce/products',
                    },
                    {
                        header: 'Product Page', link: '/app/ecommerce/product',
                    },
                ]}
            />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Sing Package"
            iconElement={<LayersIcon/>}
            link="/app/package"
            isHeader
            iconName="flaticon-database-1"
            index="packages"
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Email"
            link="/app/inbox"
            iconElement={<EmailIcon/>}
            isHeader
            iconName="flaticon-paper-plane"
            index="inbox"
            badge="9"
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Documentation"
            link="/documentation"
            isHeader
            iconElement={<FileTextIcon/>}
            iconName="flaticon-file"
            index="documentation"
            label="new"
            labelColor="success"
            target="_blank"
          />
          <h5 className={[s.navTitle, s.groupTitle].join(' ')}>TEMPLATE</h5>
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Core"
            isHeader
            iconElement={<KeypadIcon/>}
            iconName="flaticon-network"
            link="/app/core"
            index="core"
            childrenLinks={[
              {
                header: 'Typography', link: '/app/core/typography',
              },
              {
                header: 'Colors', link: '/app/core/colors',
              },
              {
                header: 'Grid', link: '/app/core/grid',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="UI Elements"
            isHeader
            iconElement={<BrowserIcon/>}
            iconName="flaticon-layers"
            link="/app/ui"
            index="ui"
            childrenLinks={[
              {
                header: 'Alerts', link: '/app/ui/alerts',
              },
              {
                header: 'Badge', link: '/app/ui/badge',
              },
              {
                header: 'Buttons', link: '/app/ui/buttons',
              },
              {
                header: 'Card', link: '/app/ui/card',
              },
              {
                header: 'Carousel', link: '/app/ui/carousel',
              },
              {
                header: 'Jumbotron', link: '/app/ui/jumbotron',
              },
              {
                header: 'Icons', link: '/app/ui/icons',
              },
              {
                header: 'List Groups', link: '/app/ui/list-groups',
              },
              {
                header: 'Modal', link: '/app/ui/modal',
              },
              {
                header: 'Nav', link: '/app/ui/nav',
              },
              {
                header: 'Navbar', link: '/app/ui/navbar',
              },
              {
                header: 'Notifications', link: '/app/ui/notifications',
              },
              {
                header: 'Pagination', link: '/app/tables/dynamic',
              },
              {
                header: 'Popovers & Tooltips', link: '/app/ui/popovers',
              },
              {
                header: 'Progress', link: '/app/ui/progress',
              },
              {
                header: 'Tabs & Accordion', link: '/app/ui/tabs-accordion',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Forms"
            isHeader
            iconElement={<CopyIcon/>}
            iconName="flaticon-list"
            link="/app/forms"
            index="forms"
            childrenLinks={[
              {
                header: 'Forms Elements', link: '/app/forms/elements',
              },
              {
                header: 'Forms Validation', link: '/app/forms/validation',
              },
              {
                header: 'Forms Wizard', link: '/app/forms/wizard',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Charts"
            link="/app/charts"
            isHeader
            iconElement={<PieChartIcon/>}
            iconName="flaticon-controls"
            index="charts"
            childrenLinks={[
              {
                header: 'Charts Overview', link: '/app/charts/overview',
              },
              {
                header: 'Apex Charts', link: '/app/charts/apex',
              },
              {
                header: 'Echarts Charts', link: '/app/charts/echarts',
              },
              {
                header: 'Highcharts Charts', link: '/app/charts/highcharts',
              },
            ]}
          />
          <LinksGroup
            header="Grid"
            link="/app/grid"
            iconElement={<GridIcon/>}
            isHeader
            iconName="flaticon-menu-4"
          />
          <LinksGroup
            onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
            activeItem={this.props.activeItem}
            header="Tables"
            isHeader
            iconElement={<LayoutIcon/>}
            iconName="flaticon-equal-1"
            link="/app/tables"
            index="tables"
            childrenLinks={[
              {
                header: 'Tables Basic', link: '/app/tables/static',
              },
              {
                header: 'Tables Dynamic', link: '/app/tables/dynamic',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Maps"
            isHeader
            iconElement={<PinIcon/>}
            iconName="flaticon-map-location"
            link="/app/maps"
            index="maps"
            childrenLinks={[
              {
                header: 'Google Maps', link: '/app/maps/google',
              },
              {
                header: 'Vector Map', link: '/app/maps/vector',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Extra"
            isHeader
            iconElement={<FireIcon/>}
            iconName="flaticon-star"
            link="/app/extra"
            index="extra"
            childrenLinks={[
              {
                header: 'Calendar', link: '/app/extra/calendar',
              },
              {
                header: 'Invoice', link: '/app/extra/invoice',
              },
              {
                header: 'Login Page', link: '/app/loginpage',
              },
              {
                header: 'Error Page', link: '/error',
              },
              {
                header: 'Gallery', link: '/app/extra/gallery',
              },
              {
                header: 'Search Result', link: '/app/extra/search',
              },
              {
                header: 'Time line', link: '/app/extra/timeline',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Menu Levels"
            isHeader
            iconElement={<ListIcon/>}
            iconName="flaticon-folder-10"
            link="/app/menu"
            index="menu"
            childrenLinks={[
              {
                header: 'Level 1.1', link: '/app/menu/level1',
              },
              {
                header: 'Level 1.2',
                link: '/app/menu/level_12',
                index: 'level_12',
                childrenLinks: [
                  {
                    header: 'Level 2.1',
                    link: '/app/menu/level_12/level_21',
                    index: 'level_21',
                  },
                  {
                    header: 'Level 2.2',
                    link: '/app/menu/level_12/level_22',
                    index: 'level_22',
                    childrenLinks: [
                      {
                        header: 'Level 3.1',
                        link: '/app/menu/level_12/level_22/level_31',
                        index: 'level_31',
                      },
                      {
                        header: 'Level 3.2',
                        link: '/app/menu/level_12/level_22/level_32',
                        index: 'level_32 ',
                      },
                    ],
                  },
                  {
                    header: 'Level 2.3',
                    link: '/app/menu/level_12/level_23',
                    index: 'level_23',
                  },
                ],
              },
            ]}
          />
        </ul>
        <h5 className={s.navTitle}>
          LABELS
          {/* eslint-disable-next-line */}
        </h5>
        {/* eslint-disable */}
        <ul className={s.sidebarLabels}>
          <li>
            <a href="#">
              <i className={`fa fa-circle mr-2 ${s.labelRecent}`} />
              <span className={s.labelName}>My Recent</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`fa fa-circle mr-2 ${s.labelStarred}`} />
              <span className={s.labelName}>Starred</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={`fa fa-circle mr-2 ${s.labelBackground}`} />
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
              <span>{alert.title}</span><br />
              <Progress className={`${s.sidebarProgress} sidebar-bottom-aler-${alert.color} progress-xs mt-1`} color={'unset'} value={alert.value} />
              <small>{alert.footer}</small>
            </Alert>,
          )}
        </div>
      </nav >
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
    navbarType: store.navigation.navbarType,
    sidebarColor: store.layout.sidebarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
