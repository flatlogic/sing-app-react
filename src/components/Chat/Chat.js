import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import $ from 'jquery';

import * as a1 from '../../images/people/a1.jpg';
import * as a2 from '../../images/people/a2.jpg';
import * as a3 from '../../images/people/a3.jpg';
import * as a4 from '../../images/people/a4.jpg';
import * as a5 from '../../images/people/a5.jpg';
import * as a6 from '../../images/people/a6.jpg';
import * as avatar from '../../images/avatar.png';

import s from './Chat.module.scss';

class Chat extends React.Component {
  static propTypes = {
    chatOpen: PropTypes.bool,
  };

  static defaultProps = {
    chatOpen: false,
  };

  constructor(props) {
    super(props);

    this.handleChangeContacts = this.handleChangeContacts.bind(this);
    this.openMessages = this.openMessages.bind(this);
    this.filterConversations = this.filterConversations.bind(this);
    this.filterMessages = this.filterMessages.bind(this);
    this.addMessage = this.addMessage.bind(this);

    this.state = {
      todayConversations: [{
        name: 'Chris Gray',
        status: 'success',
        lastMessage: 'Hey! What\'s up? So many times since we',
        image: a2,
        messages: [{
          id: 0,
          text: 'Hey! What\'s up?',
        }, {
          id: 1,
          text: 'Are you there?',
        }, {
          id: 2,
          text: 'Let me know when you come back.',
        }, {
          id: 3,
          text: 'I am here!',
          fromMe: true,
        }],
      }, {
        name: 'Jamey Brownlow',
        status: 'gray-light',
        lastMessage: 'Good news coming tonight. Seems they agreed to proceed',
        image: avatar,
      }, {
        name: 'Livia Walsh',
        status: 'danger',
        lastMessage: 'Check out my latest email plz!',
        image: a1,
      }, {
        name: 'Jaron Fitzroy',
        status: 'gray-light',
        lastMessage: 'What about summer break?',
        image: avatar,
      }, {
        name: 'Mike Lewis',
        status: 'success',
        lastMessage: 'Just ain\'t sure about the weekend now. 90% I\'ll make it.',
        image: a4,
      }],
      lastWeekConversations: [{
        name: 'Freda Edison',
        status: 'gray-light',
        lastMessage: 'Hey what\'s up? Me and Monica going for a lunch somewhere. Wanna join?',
        image: a6,
      }, {
        name: 'Livia Walsh',
        status: 'success',
        lastMessage: 'Check out my latest email plz!',
        image: a5,
      }, {
        name: 'Jaron Fitzroy',
        status: 'warning',
        lastMessage: 'What about summer break?',
        image: a3,
      }, {
        name: 'Mike Lewis',
        status: 'gray-light',
        lastMessage: 'Just ain\'t sure about the weekend now. 90% I\'ll make it.',
        image: avatar,
      }],
      chatMessageOpened: true,
      conversation: Object,
      searchValue: '',
    };
  }

  openMessages(conversation, e) {
    this.setState({
      conversation,
      chatMessageOpened: false,
    });
    $(e.currentTarget).removeClass('active').find('.badge').remove();
  }

  addMessage(e) {
    if (e.key === 'Enter') {
      const value = {
        text: e.target.value,
        fromMe: true,
      };

      this.setState({
        conversation: Object.assign({}, this.state.conversation, {
          messages: [
            ...this.state.conversation.messages || [],
            value,
          ],
        }),
      });

      e.target.value = ''; // eslint-disable-line
    }
  }

  handleChangeContacts(event) {
    this.setState({ searchValue: event.target.value });
  }

  filterConversations(item) {
    const isFindName = item.name.toLowerCase()
        .indexOf(this.state.searchValue.toLowerCase()) !== -1;
    const isFindMessage = item.lastMessage.toLowerCase()
        .indexOf(this.state.searchValue.toLowerCase()) !== -1;
    return isFindName || isFindMessage;
  }

  filterMessages(item) {
    return item.text.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
  }

  render() {
    return (
      <aside className={[s.root, this.props.chatOpen ? s.chatOpen : ''].join(' ')}>
        <header className={s.chatHeader}>
          <h4 className={s.chatTitle}>Contacts</h4>
          <div className="input-group input-group-transparent">
            <input className="form-control fs-mini" type="text" placeholder="Search..." value={this.state.searchValue} onChange={this.handleChangeContacts} />
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
          </div>
        </header>
        <div className={[s.chatPanel, s.chatContacts, this.state.chatMessageOpened ? s.chatMessageOpen : ''].join(' ')}>
          <h5 className={s.navTitle}>TODAY</h5>
          <ListGroup id="chat-sidebar-user-group" className={s.chatSidebarUserGroup}>
            {this.state.todayConversations
              .filter(this.filterConversations)
              .map(item =>
                <ListGroupItem
                  key={item.name}
                  onClick={e => this.openMessages(item, e)}
                >
                  <i className={['fa fa-circle float-right', `text-${item.status}`].join(' ')} />
                  <span className="thumb-sm float-left mr">
                    <img className="rounded-circle" src={item.image} alt="..." />
                  </span>
                  <div>
                    <h6 className={s.messageSender}>{item.name}</h6>
                    <p className={s.messagePreview}>{item.lastMessage}</p>
                  </div>
                </ListGroupItem>,
            )}
          </ListGroup>

          <h5 className={s.navTitle}>LAST WEEK</h5>
          <ListGroup className={s.chatSidebarUserGroup}>
            {this.state.lastWeekConversations
              .filter(this.filterConversations)
              .map(item =>
                <ListGroupItem
                  key={item.name}
                  onClick={e => this.openMessages(item, e)}
                >
                  <i className={['fa fa-circle float-right', `text-${item.status}`].join(' ')} />
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
        <div className={[s.chatPanel, s.chatMessages, this.state.chatMessageOpened ? '' : s.chatMessageOpen].join(' ')}>
          <h6 className={s.messagesTitle}>
            {/* eslint-disable */}
            <a onClick={() => this.setState({ chatMessageOpened: true })}>
              <i className="fa fa-angle-left mr-xs" />
              {this.state.conversation.name}
            </a>
            {/* eslint-disable */}
          </h6>
          <ListGroup>
            {this.state.conversation.messages &&
            this.state.conversation.messages
            .filter(this.filterMessages)
            .map(item => <ListGroupItem key={item.id} className={[item.fromMe ? s.fromMe : '', s.messageItem]}>
                              <span className="thumb-sm">
                                <img className="rounded-circle"
                                     src={item.fromMe ? avatar : this.state.conversation.image} alt="..."/>
                              </span>
                <div className={s.messageBody}>{item.text}</div>
              </ListGroupItem>,
            )}
          </ListGroup>

          <footer className={[s.chatFooter, 'form-group'].join(' ')}>
            <input className="form-control fs-mini" onKeyPress={this.addMessage} type="text"
                   placeholder="Type your message"/>
          </footer>
        </div>
      </aside>
    );
  }
}

export default withRouter(Chat);
