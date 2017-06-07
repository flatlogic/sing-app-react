import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  ListGroupItem,
} from 'reactstrap';

class Progress extends React.Component {
  render() {
    return (
      <ListGroupItem>
        <span className="thumb-sm float-left mr clearfix">
          <img className="rounded-circle" src="public/img/people/a3.jpg" alt="..." />
        </span>
        <p className="no-margin overflow-hidden">
          Hello Progress
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

export default withStyles()(Progress);
