import React from 'react';
import PersonalChat from '../PersonalChat';
import GroupChat from '../GroupChat'
import Search from '../../Search'
import s from './ChatColumn.module.scss';

const ChatColumn = ({ user, users, groups, chats }) => {
  return (
    <div className={s.chatTextSection}>
      <Search />
      <GroupChat user={user} users={users} groups={groups} chats={chats} />
      <PersonalChat user={user} users={users} groups={groups} chats={chats} />
    </div>
  )
}

export default ChatColumn;