import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'reactstrap';
import { Route } from 'react-router';

import s from './LinksGroup.scss';

class LinksGroup extends Component {
  /* eslint-disable */
  static propTypes = {
    header: PropTypes.node.isRequired,
    headerLink: PropTypes.string,
    childrenLinks: PropTypes.array,
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string,
    badge: PropTypes.string,
    activeItem: PropTypes.string,
    isActive: PropTypes.bool,
    onActiveSidebarItemChange: PropTypes.func,
  };
  /* eslint-enable */

  static defaultProps = {
    headerLink: null,
    childrenLinks: null,
    className: '',
  };

  constructor(props) {
    super(props);
    this.togglePanelCollapse = this.togglePanelCollapse.bind(this);

    this.state = {
      headerLinkWasClicked: true,
    };
  }

  togglePanelCollapse() {
    this.props.onActiveSidebarItemChange();
    this.setState({ headerLinkWasClicked:
    !this.state.headerLinkWasClicked || !this.props.isActive });
  }

  render() {
    const isOpen = this.props.isActive && this.state.headerLinkWasClicked;

    if (!this.props.childrenLinks) {
      return (
        <li className={[s.headerLink, this.props.className].join(' ')}>
          <NavLink to={this.props.headerLink} activeClassName={s.headerLinkActive} exact>
            <span className={s.icon}>
              <i className={`fa ${this.props.iconName}`} />
            </span>
            {this.props.header}
            {this.props.badge ? <Badge className={s.badge} color="danger">9</Badge> : null}
          </NavLink>
        </li>
      );
    }
    /* eslint-disable */
    return (
      <Route
        path={this.props.headerLink}
        children={(params) => {
          const { match } = params;
          return (
            <li className={[s.headerLink, this.props.className].join(' ')}>
              <a className={[match ? s.headerLinkActive : '', isOpen ? s.collapsed : ''].join(' ')}
                 onClick={this.togglePanelCollapse} href="#"
              >
                <span className={s.icon}>
                  <i className={`fa ${this.props.iconName}`} />
                </span>
                {this.props.header}
                <b className={['fa fa-angle-left', s.caret].join(' ')} />
              </a>
              {/* eslint-enable */}
              <Collapse className={s.panel} isOpen={isOpen}>
                <ul>
                  {this.props.childrenLinks &&
                  this.props.childrenLinks.map(child =>
                    <li key={child.name}>
                      <NavLink
                        onClick={() => (child.onClick ? child.onClick() : null)}
                        to={child.link}
                        exact
                        activeClassName={s.headerLinkActive}
                      >
                        {child.name}
                      </NavLink>
                    </li>,
                  )}
                </ul>
              </Collapse>
            </li>
          );
        }}
      />
    );
  }
}

export default withRouter(withStyles(s)(LinksGroup));
