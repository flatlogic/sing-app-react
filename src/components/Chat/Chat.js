import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import * as a2 from '../../images/people/a2.jpg';
import * as a6 from '../../images/people/a6.jpg';

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
        image: a2,
      }],
      lastWeekConversations: [{
        id: 0,
        name: 'Freda Edison',
        status: 'gray-light',
        lastMessage: 'Hey what\'s up? Me and Monica going for a lunch somewhere. Wanna join?',
        image: a6,
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
          <h5 className={s.navTitle}>TODAY</h5>
          <ListGroup>
            {this.state.todayConversations.map(item =>
              <ListGroupItem key={item.id}>
                <i className={['fa fa-circle flex-last', s.cirle, 'text-'+ item.status].join(' ')}/>
                <span className="thumb-sm pull-left mr">
                  <img className="rounded-circle" src={item.image} alt="..." />
                </span>
                <div>
                  <h6 className={s.messageSender}>{item.name}</h6>
                  <p className={s.messagePreview}>{item.lastMessage}</p>
                </div>
              </ListGroupItem>
            )}
          </ListGroup>

          <h5 className={s.navTitle}>LAST WEEK</h5>
          <ListGroup>
            {this.state.lastWeekConversations.map(item =>
              <ListGroupItem key={item.id}>
                <i className={['fa fa-circle flex-last', s.cirle, 'text-'+ item.status].join(' ')}/>
                <span className="thumb-sm pull-left mr">
                  <img className="rounded-circle" src={item.image} alt="..." />
                </span>
                <div>
                  <h6 className={s.messageSender}>{item.name}</h6>
                  <p className={s.messagePreview}>{item.lastMessage}</p>
                </div>
              </ListGroupItem>,
            )}
          </ListGroup>
        </div>
      </aside>
    );
  }
}

export default withRouter((withStyles(s)(Chat)));
