import React, { Component } from 'react';
import GroupChat from './GroupChat';
import PersonalChat from './PersonalChat';
import s from './Chats.module.scss';

class Chats extends Component {
  render() {
    return (
      <div className={s.groupChats}>
        {this.props.group ?
        < GroupChat /> : <PersonalChat />
        }
      </div>
    )
  }
}

export default Chats