import React from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';

import s from './InfoCard.module.scss';

const InfoCard = (props) => {
  const { activeChatUser } = props;
  return (
    <div>
      <section className={`${s.chatInfoHeader} chat-section bg-info`}>
        <div className="d-flex mb-3 justify-content-between">
          <header>
            <h3 className="mb-3 fw-semi-bold">{activeChatUser.name} {activeChatUser.surname}</h3>
            <h5>{activeChatUser.company}</h5>
            <h6>{activeChatUser.position}</h6>
          </header>
          <Avatar className="ml-auto mr-3" user={activeChatUser} size="70" showStatus={false}/>
        </div>
      <footer className="d-flex align-items-center justify-content-between">
        <a href={'mailto:' + activeChatUser.email} className="text-white mt-2">{activeChatUser.email}</a>
        {activeChatUser.social ? (
          <ul className={`${s.socialLinks} mt-2`}>
            <li className={`${s.socialLink}`}>
              <a href={activeChatUser.social.facebook}><i className="fa fa-facebook"></i></a>
            </li>
            <li className={`${s.socialLink}`}>
              <a href={activeChatUser.social.twitter}><i className="fa fa-twitter"></i></a>
            </li>
            <li className={`${s.socialLink}`}>
              <a href={activeChatUser.social.linkedin}><i className="fa fa-linkedin"></i></a>
            </li>
          </ul>
        ):null}
      </footer>
    </section>
  </div>
  )
}

function mapStateToProps(state) {
  return {
    activeChatUser: state.chat.activeChatUser,
  }
}

export default connect(mapStateToProps)(InfoCard);