import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatListItem from '../PersonalChat/ChatListItem';
import Search from '../../Search'
import s from './ChatColumn.module.scss';

class ChatColumn extends Component {

  state = {
    group: [],
    personal: []
  }  

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
        let lastMessage = chat.messages?.[chat.messages.length - 1] || {};
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

  componentDidMount() {
    let group = this.getChats(true);
    let personal = this.getChats(false);

    this.setState({ group, personal})
  }

  render() {
  const { activeChatId } = this.props;
  const { group, personal } = this.state;
  return (
    <div className={s.chatTextSection}>
      <Search />
      <section className={`chat-section ${s.chatsSectionWrap}`}>
        <h5>Group Chats</h5>
        <ul className={`${s.chatList}`}>
          {group.map((chat, i) => (
            <ChatListItem
              key={chat.id}
              isActive={chat.id === activeChatId ? true : false}
              chat={chat} />
          ))}
        </ul>
      </section>
      <section className={`chat-section ${s.chatsSectionWrap}`}>
        <h5>Personal Chats</h5>
        <ul className={`${s.chatList}`}>
          {personal.map((chat, i) => (
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
    activeChatId: state.chat.activeChatId
  }
}

export default connect(mapStateToProps)(ChatColumn);