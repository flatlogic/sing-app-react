import React, { PureComponent } from 'react';
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

import s from './Chats.module.scss';

class Chats extends PureComponent {

  state = {
    newMessage: '', 
    dialogParts: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  chat = () => {
    return this.props.chats.find(chat => chat.id === this.props.activeChatId);
  }

  title = () => {
    return this.chat().isGroup ? this.chat().name : `${this.interlocutor().name} ${this.interlocutor().surname}`
  }

  dialogParts = () => {
    let firstMessage = this.chat().messages[0];
    let dialogParts = [[this.shortCalendarDate(firstMessage.timestamp)],[firstMessage]];
    let messagesLength = this.chat().messages.length;

    for (let i = 1; i < messagesLength; i++) {
      let lastDialogPart = dialogParts[dialogParts.length - 1];
      let prevMessage = lastDialogPart[lastDialogPart.length - 1];
      let message = this.chat().messages[i];
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
    let calendarDate = moment(this.interlocutor().prevOnline).calendar();
    let firstLetter = calendarDate[0].toLowerCase();
    let substring = calendarDate.substr(1);

    return firstLetter + substring;
  }

  interlocutor = () => {
    if(this.chat().isGroup) {
      return  true;
    }

    return this.findInterlocutor(this.chat());
  }

  findInterlocutor = (chat) => {
    let id = chat.users.find(uid => uid !== this.props.user.id);
    return this.findUser(id);
  }

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
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
    return index === 0 || dialogPart[index - 1].userId !== message.userId;
  }

  newMessage = () => {
    this.setState({ newMessage: '' })
    this.props.dispatch(newMessageRequest({dialogId: this.chat().id, message: this.state.newMessage}))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      let dialogParts = this.dialogParts();
      this.setState({ dialogParts })      
    }
  }

  componentDidMount() {
    let dialogParts = this.dialogParts();
    this.setState({ dialogParts })   
  }
  
  render() {
    console.log(this.props)
    const { sendingMessage, user } = this.props;
    const { dialogParts } = this.state;
    
    return (
    <div className={`d-flex flex-column ${s.chatDialogSection}`}>
      <header className={s.chatDialogHeader}>
        <div>
          <h5 className="fw-normal mb-0">{this.title()}</h5>
          {!this.chat().isGroup ?
            <small className="text-muted ">{this.interlocutor().isOnline ? 'Online' : 'Was online ' + this.wasOnline()}</small>
          :null}
        </div>
        <i className={`${s.infoIcon} la la-ellipsis-v`}></i>
      </header>
      <div className={s.chatDialogBody}>
        {dialogParts.map((part,i) => {
          if(this.isTimeDivider(part)) {
            return (
              <div key={uuid()} className={s.dialogDivider}>{part[0]}</div>
            )
          } else {
            return (
              <div key={uuid()} className={s.dialogMessage}>
                {part.map((message, j) => 
                  <ChatMessage 
                    user={message.userId === user.id ? user : this.findUser(message.userId)}
                    owner={message.userId === user.id}
                    size={40}
                    showStatus={false}
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
      <div className={`chat-section ${s.newMessage} mb-0`}>
        <Button className={s.attachment} outline><i className="la la-plus"></i></Button>
        <Input onChange={this.handleChange} value={this.state.newMessage} name="newMessage" placeholder="Type Your Message"></Input>
        <Button color="danger" className={`px-4 ${s.newMessageBtn}`} onClick={this.newMessage}>
          {sendingMessage ? <Loader /> : <span>Send</span>}
        </Button>
      </div>
    </div>    

    )
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chat.chats,
    user: state.chat.user,
    users: state.chat.users,
    sendingMessage: state.chat.sendingMessage,
    activeChatId: state.chat.activeChatId,
  }
}

export default connect(mapStateToProps)(Chats)