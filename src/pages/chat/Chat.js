import React, { Component } from 'react';
import ChatDialog from './components/ChatDialog';
import ChatInfo from './components/ChatInfo/';
import ChatList from './components/ChatList/ChatList';
import { connect } from 'react-redux';
import { MobileChatStates } from '../../reducers/chat';
import s from './Chat.module.scss';

class Chat extends Component {
  render() {
    const { mobileState } = this.props;
    return (
      <div className={`
        ${s.chatPage} 
        ${mobileState === MobileChatStates.LIST ? 'list-state' : ''}
        ${mobileState === MobileChatStates.CHAT ? 'chat-state' : ''}
        ${mobileState === MobileChatStates.INFO ? 'info-state' : ''}
        chat-page-wrapper`}>
        <ChatList />
        <ChatDialog />
        <ChatInfo />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileState: state.chat.mobileState
  }
}

export default connect(mapStateToProps)(Chat);