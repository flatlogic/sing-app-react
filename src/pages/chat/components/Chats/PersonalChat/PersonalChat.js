import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import s from './PersonalChat.module.scss';

class ChatItem extends Component {

  state = {
    usersArray: []
  }

  personalChats = () => {
    let usersArray = [];
    return [...this.props.users].map(chat => {
      chat.dialog = this.props.user.dialogs.find(d => d.withId === chat.id);
      chat.title = chat.name + " " + chat.surname;
      usersArray.push(chat)
      this.setState({ usersArray })
    });
  }

  componentDidMount() {
    this.personalChats();
  }

  render() {
    return (
      <>
      <section className={`chat-section ${s.personalChats}`}>
        <h5>Personal Chats</h5>
        <ul className={`${s.chatList}`}>
          {this.state.usersArray.map((chatUser, i) => (
            <ChatListItem
              key={chatUser.id}
              user={chatUser} />
          ))}
        </ul>
      </section>
    </>
    )    
  }

}

export default ChatItem;