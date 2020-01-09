import React, { Component } from 'react';
import ChatDialog from './components/Chats';
import Info from './components/Info/';
import ChatList from './components/Chats/ChatColumn';
import { connect } from 'react-redux';
import s from './Chat.module.scss';

class Chat extends Component {
  render() {
    const { user, users, groups, chats } = this.props
    return (
      <div className={s.chatPage}>
        <ChatList user={user} users={users} groups={groups} chats={chats} />
        <ChatDialog />
        <Info />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.chat.users,
    user: state.chat.user,
    groups: state.chat.groups,
    chats: state.chat.chats
  }
}

export default connect(mapStateToProps)(Chat);