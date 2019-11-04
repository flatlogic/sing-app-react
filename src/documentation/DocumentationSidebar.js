import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from '../components/Sidebar/Sidebar.module.scss';
import sd from './styles.module.scss'
import { LinksGroup } from './components';

import { openSidebar, closeSidebar, changeActiveSidebarItem } from '../actions/navigation';
import isScreen from '../core/screenHelper';

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

  render() {
    return (
      <Col xl={2} md={3}>
        <nav
          className={[s.root, sd.sidebar, this.props.width > 768 && s.staticSidebar].join(' ')}
        >
          <ul>
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Getting Started"
              isHeader
              link="/documentation/getting-started"
              index="getting-started"
              childrenLinks={[
                {
                  header: 'Overview', link: '/documentation/getting-started/overview',
                },
                {
                  header: 'Licences', link: '/documentation/getting-started/licences',
                },
                {
                  header: 'Quick Start', link: '/documentation/getting-started/quick-start',
                }
              ]}
            />
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Pages"
              isHeader
              link="/documentation/pages"
              index="pages"
            />
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Components"
              isHeader
              link="/documentation/components"
              index="components"
              childrenLinks={[
                {
                  header: 'Alerts', link: '/documentation/components/alerts',
                },
                {
                  header: 'Badge', link: '/documentation/components/badge',
                },
                {
                  header: 'Buttons', link: '/documentation/components/buttons',
                },
                {
                  header: 'Card', link: '/documentation/components/card',
                },
                {
                  header: 'Carousel', link: '/documentation/components/carousel',
                },
                {
                  header: 'Modal', link: '/documentation/components/modal',
                },
                {
                  header: 'Nav', link: '/documentation/components/nav',
                },
                {
                  header: 'Navbar', link: '/documentation/components/navbar',
                },
                {
                  header: 'Popovers & Tooltips', link: '/documentation/components/popovers',
                },
                {
                  header: 'Progress', link: '/documentation/components/progress',
                },
                {
                  header: 'Tabs & Accordion', link: '/documentation/components/tabs-accordion',
                },
              ]}
            />
            <LinksGroup
              onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
              activeItem={this.props.activeItem}
              header="Libs"
              isHeader
              link="/documentation/libs"
              index="libs"
            />
            {/*<LinksGroup*/}
              {/*onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}*/}
              {/*activeItem={this.props.activeItem}*/}
              {/*header="FAQ"*/}
              {/*isHeader*/}
              {/*link="/documentation/faq"*/}
              {/*index="faq"*/}
              {/*childrenLinks={[*/}
                {/*{*/}
                  {/*header: 'Analytics', link: '/app/main/analytics',*/}
                {/*}*/}
              {/*]}*/}
            {/*/>*/}
          </ul>

          <a className={classnames('d-md-down-none', sd.company)} href="http://flatlogic.com/" target="_blank" rel="noopener noreferrer">
            <img alt="company logo" src="https://cdn.dribbble.com/users/883507/avatars/small/7ca04141e335237d393ab41008adb46d.png?1509465697"/>
            Proudly built and maintained by <br/> Flatlogic
          </a>
        </nav >
      </Col>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
