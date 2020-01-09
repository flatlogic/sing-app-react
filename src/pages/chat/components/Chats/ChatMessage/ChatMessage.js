import React, { Component } from 'react';
import Avatar from '../../Avatar/Avatar';
import moment from 'moment';
import s from './ChatMessage.module.scss';

class ChatMessage extends Component {

  messageDate = (message) => {
    return moment(message.timestamp).format('h:mm a')
  }

  render() {
    const { user, size, showStatus, message, showAvatar } = this.props;
    return (
      <div className={`${s.chatMessage} ${message.owner ? s.owner : ''}`}>
        {showAvatar 
          ? <div className={`${s.avatar} ${s.messageAvatar}`}><Avatar user={user} size={size} showStatus={showStatus}/></div>
          :null}
      
      <p className={s.messageBody}>
        {message.text}
      </p>
      <small className="d-block text-muted">
        {this.messageDate(message)}
      </small>
    </div>
    )
  }
}

export default ChatMessage;