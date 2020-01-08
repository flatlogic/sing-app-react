import React, { Component } from 'react';
import {
  Button,
  Input,
} from 'reactstrap';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from '../../../../components/Loader';
import ChatMessage from './ChatMessage'
import { newMessageRequest } from '../../../../actions/chat';
import img1 from '../../../../images/people/a1.jpg';
import img2 from '../../../../images/people/a2.jpg';

import s from './Chats.module.scss';

class Chats extends Component {

  state = {
    newMessage: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  dialog = () => {
    return this.props.user.dialogs.find(d => d.withId === this.props.activeChatUser.id);
  }

  dialogParts = () => {
    let firstMessage = this.dialog().messages[0];
    let dialogParts = [[this.shortCalendarDate(firstMessage.timestamp)],[firstMessage]];
    let messagesLength = this.dialog().messages.length;

    for (let i = 1; i < messagesLength; i++) {
      let lastDialogPart = dialogParts[dialogParts.length - 1];
      let prevMessage = lastDialogPart[lastDialogPart.length - 1];
      let message = this.dialog().messages[i];
      let messageDate = moment(message.timestamp).format('YYYY MM dd');
      let prevMessageDate = moment(prevMessage.timestamp).format('YYYY MM dd');
      if (messageDate === prevMessageDate) {
        lastDialogPart.push(message);
      } else {
        dialogParts.push([this.shortCalendarDate(message.timestamp)], [message]);
      }
    }

    return dialogParts;
  }

  wasOnline = () => {
    let calendarDate = moment(this.props.activeChatUser.prevOnline).calendar();
    let firstLetter = calendarDate[0].toLowerCase();
    let substring = calendarDate.substr(1);

    return firstLetter + substring;
  }

  shortCalendarDate = (date) => {
    return moment(date).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'dddd, MMMM Do'
    })
  }

  isTimeDivider = (dialogPart) => {
    return typeof dialogPart[0] === 'string';
  }

  showAvatar = (dialogPart, message, index) => {
    return index === 0 || dialogPart[index - 1].owner !== message.owner;
  }
  
  render() {

    const { activeChatUser, sendingMessage, user } = this.props;
    const { newMessage } = this.state;

    return (
    <div className={`d-flex flex-column ${s.chatDialogSection}`}>
      <header className={s.chatDialogHeader}>
        <div>
          <h5 className="fw-normal mb-0">{activeChatUser.name} {activeChatUser.surname}</h5>
          <small className="text-muted ">{activeChatUser.isOnline ? 'Online' : 'Was online ' + this.wasOnline()}</small>
        </div>
        <i className={`${s.infoIcon} la la-ellipsis-v`}></i>
      </header>
      <div className={s.chatDialogBody}>
        {this.dialogParts().map((part,i) => {
          if(this.isTimeDivider(part)) {
            return (
              <div key={uuid()} className={s.dialogDivider}>{part[0]}</div>
            )
          } else {
            return (
              <div key={uuid()} className={s.dialogMessage}>
                {part.map((message, j) => 
                  <ChatMessage 
                    user={message.owner ? user : activeChatUser}
                    key={message.id}
                    message={message}
                    showAvatar={this.showAvatar(part,message,j)}
                  />            
                )}
              </div>
            )
          }
        })}
      </div>
      <form className={`chat-section ${s.newMessage} mb-0`}>
        <Button className={s.attachment} outline><i className="la la-plus"></i></Button>
        <Input onChange={this.handleChange} name="newMessage" placeholder="Type Your Message"></Input>
        <Button color="danger" className={`px-4 ${s.newMessageBtn}`} type="submit">
          {sendingMessage ? <Loader /> : <span>Send</span>}
        </Button>
      </form>
    </div>    

    )
  }
}

function mapStateToProps(state) {
  return {
    activeChatUser: state.chat.activeChatUser,
    user: state.chat.user,
    sendingMessage: state.chat.sendingMessage,
  }
}

export default connect(mapStateToProps)(Chats)