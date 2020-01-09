import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import s from './GroupChat.module.scss';

class ChatItem extends Component {

  state = {
    chatArray: []
  }

  groupChats = () => {
    let chatArray = [];
    return [...this.props.groups].map(chat => {
      chat.dialog = this.props.user.dialogs.find(d => d.withId === chat.id);
      chatArray.push(chat)
      this.setState({ chatArray })
    });
  }

  componentDidMount() {
    this.groupChats();
  }

  render() {
    return (
      <>
      <section className={`chat-section ${s.groupChats}`}>
        <h5>Group Chats</h5>
        <ul className={`${s.chatList}`}>
          {this.state.chatArray.map((chatItem, i) => (
            <ChatListItem
              key={chatItem.id}
              chat={chatItem} />
          ))}
        </ul>
      </section>
    </>
    )    
  }

}

export default ChatItem;