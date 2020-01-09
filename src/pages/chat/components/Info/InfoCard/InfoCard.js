import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';

import s from './InfoCard.module.scss';

class InfoCard extends Component {

  info = () => {
    let chat = this.props.chats.find(chat => chat.id === this.props.activeChatId);
    if (chat.isGroup) {
      return {}
    }
    return this.findInterlocutor(chat);
  }

  findInterlocutor = (chat) => {
    let id = chat.users.find(uid => uid !== this.props.user.id);
    return this.findUser(id);
  }

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
  }

  render() {
    return (
      <div>
        <section className={`${s.chatInfoHeader} chat-section bg-info`}>
          <div className="d-flex mb-3 justify-content-between">
            <header>
              <h3 className="mb-3 fw-semi-bold">{this.info().name} {this.info().surname}</h3>
              <h5>{this.info().company}</h5>
              <h6>{this.info().position}</h6>
            </header>
            <Avatar className="ml-auto mr-3" user={this.info()} size="70" showStatus={false}/>
          </div>
        <footer className="d-flex align-items-center justify-content-between">
          <a href={'mailto:' + this.info().email} className="text-white mt-2">{this.info().email}</a>
          {this.info().social ? (
            <ul className={`${s.socialLinks} mt-2`}>
              <li className={`${s.socialLink}`}>
                <a href={this.info().social.facebook}><i className="fa fa-facebook"></i></a>
              </li>
              <li className={`${s.socialLink}`}>
                <a href={this.info().social.twitter}><i className="fa fa-twitter"></i></a>
              </li>
              <li className={`${s.socialLink}`}>
                <a href={this.info().social.linkedin}><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          ):null}
        </footer>
      </section>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeChatId: state.chat.activeChatId,
    chats: state.chat.chats,
    user: state.chat.user,
    users: state.chat.users,
  }
}

export default connect(mapStateToProps)(InfoCard);