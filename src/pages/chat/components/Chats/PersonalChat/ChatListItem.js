import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';
import moment from 'moment';
import uuid from 'uuid/v4';
import { setActiveChat } from '../../../../../actions/chat';
import s from './PersonalChat.module.scss';

class ChatListItem extends Component {

  time = () => {
    return moment(this.props.chat.lastMessage.timestamp).format('d MMM') || "";
  }

  chatUsers = () => {
    if (this.props.chat.interlocutors.length <= 2) {
      return [...this.props.chat.interlocutors, this.props.user];
    } else {
      return this.props.chat.interlocutors.slice(0, 3);
    }
  }

  changeChat = () => {
    this.props.dispatch(setActiveChat(this.props.chat.id))
  }

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
  }


  render() {
    const { chat, isActive } = this.props;
    return (
      <li 
        onClick={this.changeChat}
        className={`${s.chatListItem} ${isActive ? s.active : ''}`}>
        <div className={`${s.chatListItemWrapper}`}>
          {!chat.isGroup ? 
          <Avatar user={chat.interlocutors[0]} size={45} className="mr-3" showStatus={true} />
          : <ul className={s.avatarsColumn}>
              {this.chatUsers().map(user => (
                <li key={uuid()}><Avatar user={user} size={35} showStatus={false} className="mr-3" stroke={true} /></li>
              ))}
            </ul>
          }
        
        <section className={`${s.chatItemMain} ml-3`}>
          <header className="d-flex align-items-center justify-content-between mb-1">
            <h6 className={`${s.chatTitle}`}>{chat.title}</h6>
            {chat.isGroup ? <span>({chat.interlocutors.length + 1})</span> : ''}
            <span className={`ml-auto ${s.timestamp}`}>
            {this.time()}
            </span>
          </header>
          <p className={`${s.chatLastMessage}`}>
            {chat.lastMessage.owner ? <span className={`${s.ownerIndicator} mr-1`}> You:</span> : ''}
            {chat.lastMessage.owner && chat.isGroup ? <span className={`${s.ownerIndicator} mr-1`}>{this.findUser(chat.lastMessage.userId)}</span> : ''}
            {chat.lastMessage.text || 'Write a first message'}
          </p>
        </section>
      </div>
    </li>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeChatId: state.chat.activeChatId,
    user: state.chat.user,
    users: state.chat.users
  }
}

export default connect(mapStateToProps)(ChatListItem);