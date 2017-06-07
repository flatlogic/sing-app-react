import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';


import s from './Chat.scss';

class Chat extends React.Component {
  static propTypes = {
    chatOpen: PropTypes.bool,
  };

  static defaultProps = {
    chatOpen: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      todayConversations: [{
        id: 0,
        name: 'Chris Gray',
        status: 'success',
        lastMessage: 'Hey! What\'s up? So many times since we',
        image: 'assets/img/people/a2.jpg',
      }],
      lastWeekConversations: [{
        id: 0,
        name: 'Freda Edison',
        status: 'gray-light',
        lastMessage: 'Hey what\'s up? Me and Monica going for a lunch somewhere. Wanna join?',
        image: 'assets/img/people/a6.jpg',
      }],
    };
  }

  render() {
    return (
      <aside className={[s.root, this.props.chatOpen ? s.chatOpen : ''].join(' ')}>
        <header className={s.chatSidebarHeader}>
          <h4 className={s.chatSidebarTitle}>Contacts</h4>
          <div className="form-group no-margin">
            <div className="input-group input-group-dark">
              <input className="form-control fs-mini" type="text" placeholder="Search..." />
              <span className="input-group-addon">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </header>
        <div className={[s.chatSidebarPanel].join(' ')}>
          <h5 className="sidebar-nav-title">Today</h5>
          <ListGroup className="chat-sidebar-user-group">
            {this.state.todayConversations.map(item =>
              <ListGroupItem key={item.id}>
                <i className="fa fa-circle flex-last" />
                <span className="thumb-sm pull-left mr">
                  <img className="rounded-circle" src="" alt="..." />
                </span>
                <div>
                  <h6 className={s.messageSender}>{item.name}</h6>
                  <p className="message-preview">{item.lastMessage}</p>
                </div>
              </ListGroupItem>,
            )}
          </ListGroup>

          <h5 className="sidebar-nav-title">Last Week</h5>
          <div className="list-group chat-sidebar-user-group">
            {this.state.lastWeekConversations.map(item =>
              <a key={item.id} className="list-group-item">
                <i className="fa fa-circle flex-last" />
                <span className="thumb-sm pull-left mr">
                  <img className="rounded-circle" src="" alt="..." />
                </span>
                <div>
                  <h6 className="message-sender">{item.name}</h6>
                  <p className="message-preview">{item.lastMessage}</p>
                </div>
              </a>,
            )}
          </div>
        </div>
      </aside>
    );
  }
}

export default withRouter((withStyles(s)(Chat)));
