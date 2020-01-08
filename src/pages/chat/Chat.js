import React, { Component } from 'react';
import ChatDialog from './components/Chats';
import Info from './components/Info/';
import ChatList from './components/Chats/ChatColumn';
import { connect } from 'react-redux';
import s from './Chat.module.scss';

class Chat extends Component {
  render() {
    const { user, users, groups } = this.props
    return (
      <div className={s.chatPage}>
        <ChatList user={user} users={users} groups={groups} />
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
  }
}

export default connect(mapStateToProps)(Chat);