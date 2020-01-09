import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';
import moment from 'moment';
import { setActiveUser } from '../../../../../actions/chat';
import s from './PersonalChat.module.scss';

class ChatListItem extends Component {

  lastMessage = () => {
    let messagesLength = this.props.user.dialog.messages.length;
    return this.props.user.dialog.messages[messagesLength - 1] || {};
  }

  time = () => {
    return moment(this.lastMessage.timestamp).format('d MMM') || "";
  }

  changeChat = () => {
    this.props.dispatch(setActiveUser(this.props.user.id))
  }

  render() {
    const { user, activeChatUser } = this.props;
    return (
      <li 
        onClick={this.changeChat}
        className={`${s.chatListItem} ${activeChatUser.id === user.id ? s.active : ''}`}>
        <div className={`${s.chatListItemWrapper}`}>
        <Avatar user={user} size="45" showStatus={true}></Avatar>
        <section className={`${s.chatItemMain} ml-3`}>
          <header className="d-flex align-items-center justify-content-between mb-1">
            <h6 className={`${s.chatTitle}`}>{user.title}</h6>
            <span className={`ml-auto ${s.timestamp}`}>
            {this.time()}
            </span>
          </header>
          <p className={`${s.chatLastMessage}`}>
            {this.lastMessage().text}
          </p>
        </section>
      </div>
    </li>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeChatUser: state.chat.activeChatUser
  }
}

export default connect(mapStateToProps)(ChatListItem);