import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';
import moment from 'moment';
import { setActiveChat } from '../../../../../actions/chat';
import s from './PersonalChat.module.scss';

class ChatListItem extends Component {



  changeChat = () => {
    this.props.dispatch(setActiveChat(this.props.chat.id))
  }

  render() {
    const { chat, activeChatId } = this.props;
    return (
      <li 
        onClick={this.changeChat}
        className={`${s.chatListItem} ${activeChatId.id === chat.id ? s.active : ''}`}>
        <div className={`${s.chatListItemWrapper}`}>
        <Avatar user={chat.interlocutors[0]} size="45" showStatus={true}></Avatar>
        <section className={`${s.chatItemMain} ml-3`}>
          <header className="d-flex align-items-center justify-content-between mb-1">
            <h6 className={`${s.chatTitle}`}>{chat.title}</h6>
            <span className={`ml-auto ${s.timestamp}`}>
            
            </span>
          </header>
          <p className={`${s.chatLastMessage}`}>
            
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
  }
}

export default connect(mapStateToProps)(ChatListItem);