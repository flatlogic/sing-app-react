/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Navbar, MenuItem, Nav, NavDropdown, NavItem, Glyphicon, Badge, ListGroup, ListGroupItem} from 'react-bootstrap';
import {logoutUser} from '../../actions/user';

import s from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    sidebarToggle: PropTypes.func,
    chatToggle: PropTypes.func,
  };

  static defaultProps = {
    sidebarToggle: () => {
    },
    chatToggle: () => {
    },
  };

  doLogout() {
    this.props
      .dispatch(logoutUser());
  }

  render() {
    return (
      <Navbar fluid>
        <Nav pullLeft>
          <NavItem className={s.menuButton} eventKey={1} href="#" onClick={this.props.sidebarToggle}>
            <Glyphicon glyph="menu-hamburger"/>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={1} title={
            <span>
                <Glyphicon glyph="user" className="mr-sm"/>
            John <span className="fw-semi-bold">Willington</span>
                <Badge className="ml-sm badge-warning">4</Badge>
              </span>
          } noCaret id="basic-nav-dropdown"
          >
            <section className="panel notifications">
              <header className="panel-heading">
                <div className="text-align-center mb-sm">
                  <strong>You have 13 notifications</strong>
                </div>
                <div className="btn-group btn-group-sm btn-group-justified" id="notifications-toggle">
                  <label className="btn btn-default active">
                    Notifications
                  </label>
                  <label className="btn btn-default">
                    Notifications
                  </label>
                  <label className="btn btn-default">
                    Notifications
                  </label>
                </div>
              </header>
              <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>Item 3</ListGroupItem>
              </ListGroup>
            </section>
          </NavDropdown>
          <Nav>
            <NavDropdown
              eventKey={1} title={<Glyphicon glyph="user"/>} noCaret
            >
              <MenuItem><Glyphicon glyph="user"/> &nbsp; My Account</MenuItem>
              <MenuItem divider />
              <MenuItem>Calendar</MenuItem>
              <MenuItem>Inbox &nbsp;&nbsp;<span className="badge bg-danger">9</span></MenuItem>
              <MenuItem divider />
              <MenuItem><Glyphicon glyph="user"/> &nbsp; Log Out</MenuItem>
            </NavDropdown>
          </Nav>
          <NavItem><Glyphicon glyph="user" onClick={this.props.chatToggle}/></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    init: state.runtime.initialNow,
  };
}
export default connect(mapStateToProps)(withStyles(s)(Header));
