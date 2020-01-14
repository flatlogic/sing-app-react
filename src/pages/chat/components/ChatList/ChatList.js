import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatListItem from './ChatListItem';
import ChatSearch from '../ChatSearch';
import s from './ChatList.module.scss';

class ChatList extends Component {

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
  }

  getChats = (isGroup) => {
    return this.props.chats
      .filter(chat => {
        return chat.isGroup === isGroup && chat.users.indexOf(this.props.user.id) > -1
      })
      .map(chat => {
        let interlocutors = [];
        chat.users.forEach(uid => {
          if (uid !== this.props.user.id) {
            interlocutors.push(this.findUser(uid));
          }
        });
        let lastMessage = chat.messages[chat.messages.length - 1] || {};
        lastMessage.owner = lastMessage.userId === this.props.user.id;
        return {
          id: chat.id,
          isGroup,
          title: isGroup ? chat.name : interlocutors[0].name + " " + interlocutors[0].surname,
          interlocutors,
          lastMessage
        }
      });
  }

  render() {
  const { activeChatId } = this.props;
  return (
    <div className={`chat-list-section`}>
      
      <ChatSearch />

      <section className={`chat-section ${s.chatsSectionWrap} ${s.groupChats} d-none d-lg-block`}>
        <h5>Group Chats</h5>
        <ul className={`${s.chatList}`}>
          {this.getChats(true).map((chat, i) => (
            <ChatListItem
              key={chat.id}
              isActive={chat.id === activeChatId ? true : false}
              chat={chat} />
          ))}
        </ul>
      </section>
      <section className={`chat-section ${s.chatsSectionWrap} ${s.personalChats} d-none d-lg-block mb-0`}>
        <h5>Personal Chats</h5>
        <ul className={`${s.chatList}`}>
          {this.getChats(false).map((chat, i) => (
            <ChatListItem
              key={chat.id}
              isActive={chat.id === activeChatId ? true : false}
              chat={chat} />
          ))}
        </ul>
      </section>
      <section className={`chat-section mb-0 d-lg-none ${s.allChats}`}>
        <h5>Group chats</h5>
        <ul className={`${s.chatList} mb-3`}>
          {this.getChats(true).map((chat, i) => (
            <ChatListItem
              key={chat.id}
              isActive={chat.id === activeChatId ? true : false}
              chat={chat} />
          ))}
        </ul>
        <h5>Group chats</h5>
        <ul className={`${s.chatList}`}>
          {this.getChats(false).map((chat, i) => (
            <ChatListItem
              key={chat.id}
              isActive={chat.id === activeChatId ? true : false}
              chat={chat} />
          ))}
        </ul>
      </section>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.chat.user,
    users: state.chat.users,
    chats: state.chat.chats,
    activeChatId: state.chat.activeChatId, 
    sendingMessage: state.chat.sendingMessage
  }
}

export default connect(mapStateToProps)(ChatList);