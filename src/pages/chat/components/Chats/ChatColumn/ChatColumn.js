import React from 'react';
import PersonalChat from '../PersonalChat';
import GroupChat from '../GroupChat'
import Search from '../../Search'
import s from './ChatColumn.module.scss';

const ChatColumn = ({ user, users, groups }) => {
  return (
    <div className={s.chatTextSection}>
      <Search />
      <GroupChat />
      <PersonalChat user={user} users={users} groups={groups} />
    </div>
  )
}

export default ChatColumn;