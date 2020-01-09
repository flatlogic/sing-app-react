import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';
import moment from 'moment';
import { setActiveChat } from '../../../../../actions/chat';
import s from './GroupChat.module.scss';

class ChatListItem extends Component {

  lastMessage = () => {
    let messagesLength = this.props.chat.dialog.messages.length;
    return this.props.chat.dialog.messages[messagesLength - 1] || {};
  }

  time = () => {
    return moment(this.lastMessage.timestamp).format('d MMM') || "";
  }

  changeChat = () => {
    this.props.dispatch(setActiveChat(this.props.chat.id))
  }

  render() {
    const { chat, activeChatGroup } = this.props;
    return (
      <li 
        onClick={this.changeChat}
        className={`${s.chatListItem} ${activeChatGroup.id === chat.id ? s.active : ''}`}>
        <div className={`${s.chatListItemWrapper}`}>
        <Avatar user={chat} group size="45" showStatus={true}></Avatar>
        <section className={`${s.chatItemMain} ml-3`}>
          <header className="d-flex align-items-center justify-content-between mb-1">
            <h6 className={`${s.chatTitle}`}>
              <i className="fa fa-group"></i>
              <span>{chat.title} ({chat.usersCount})</span>
              <i className="fa fa-paperclip"></i> 
            </h6>
          </header>
          <p className={`${s.chatLastMessage}`}>
            {this.lastMessage().text}
          </p>
        </section>
        <div className={`d-flex align-items-center flex-column`}>
          <span className={`ml-auto ${s.timestamp}`}>
            {this.time()}
          </span>
          <span className={`ml-1 circle bg-${chat.updateImportance} text-white fw-bold mt-2`}>{chat.updates}</span>
        </div>
      </div>
    </li>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeChatGroup: state.chat.activeChatGroup
  }
}

export default connect(mapStateToProps)(ChatListItem);