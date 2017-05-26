import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router-dom';

import s from './Chat.scss';

class Chat extends React.Component {
  static propTypes = {
    chatOpen: PropTypes.bool,
  };

  static defaultProps = {
    chatOpen: false
  };

  render() {
    return (<aside className={[s.root, this.props.chatOpen ? s.chatOpen : ''].join(' ')}></aside>)
  };
}

export default withRouter((withStyles(s)(Chat)));
