import React, { Component } from 'react';
import ChatDialog from './components/Chats';
import Info from './components/Info/';
import ChatList from './components/Chats/ChatColumn';
import s from './Chat.module.scss';

class Chat extends Component {
  render() {
    return (
      <div className={s.chatPage}>
        <ChatList />
        <ChatDialog />
        <Info />
      </div>
    )
  }
}


export default Chat;