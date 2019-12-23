import React, { Component } from 'react';
import {
  Button,
  Input,
} from 'reactstrap';
import img1 from '../../../../images/people/a1.jpg';

import s from './Chats.module.scss';

class Chats extends Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <div className={s.dialogHeading}>
          <div className={s.personName}>
            <h4>Jane Rowlis</h4>
            <span>Was online today at 6:35 AM</span>
          </div>
          <i className="fa fa-ellipsis-v"></i>
        </div>
        <div className={s.dialog}>
          <div className={s.incomingMessage}>
            <div className={s.incomingMessageWrapper}>
              <span className="thumb-sm mr">
                <img className="rounded-circle" src={img1} alt="..." />
              </span>
              <p className={s.messageText}> 45 BC, making it over 2000 years old.</p>
            </div>
            <span className={s.messageDate}>6:28 PM</span>
          </div>
          <div className={s.outcomingMessage}>
            <div className={s.outcomingMessageWrapper}>
              <p className={s.messageText}>Contrary atin literature from 45 BC, making it over 2000 years old.</p>
              <p className={s.messageText}>Contrary to popular belief</p>
              <span className="thumb-sm ml">
                <img className="rounded-circle" src={img1} alt="..." />
              </span>
            </div>
            <span className={s.messageDate}>6:28 PM</span>
          </div>
        </div>
        <div className={`chat-block-style bg-white d-flex ${s.justifySelfEnd}`}>
          <i className={`fi flaticon-add ${s.plusIcon}`}></i>
          <Input className={`${s.chatInput}`} placeholder="Type your message" />
          <Button color="danger" className={`width-150 ml-3 ${s.sendButton}`}>Send</Button>
        </div>
      </div>
    )
  }
}

export default Chats