import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  ListGroupItem,
} from 'reactstrap';

import * as a3 from '../../../images/people/a3.jpg';

class Notifications extends React.Component {
  render() {
    return (
      <ListGroupItem>
        <span className="thumb-sm float-left mr clearfix">
          <img className="rounded-circle" src={a3} alt="..." />
        </span>
        <p className="no-margin overflow-hidden">
          1 new user just signed up! Check out
          {/* eslint-disable */}
          <a href="#">Monica Smith</a>'s account.
          {/* eslint-enable */}
          <time className="help-block no-margin">
            2 mins ago
          </time>
        </p>
      </ListGroupItem>
    );
  }
}

export default withStyles()(Notifications);
