import React from 'react';
import PropTypes from 'prop-types';

import ReplyDropdown from '../ReplyDropdown/ReplyDropdown';

import userPhoto from '../../../../images/people/a5.jpg';
import s from './MessageHeader.module.scss';

const MessageHeader = ({ title, name, email, to, date, compose }) => (
  <div className={s.messageHeader}>
    <h3>{title}</h3>
    <div className={s.messageHeaderLine}>
      <div className={s.messageFrom}>
        <img src={userPhoto} alt="user" className="rounded-circle" />
        <div className={s.messageFromInfo}>
          <span>
            <strong>{name}</strong>
            <span className={s.email}>
              {`<${email}>`}
            </span>
          </span>
          <span className={s.to}>to {to}</span>
        </div>
      </div>
      <div className={s.messageHeaderDate}>
        {date}
        <ReplyDropdown compose={() => compose(true, { from: name, theme: title })} />
      </div>
    </div>
  </div>
);

MessageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  compose: PropTypes.func.isRequired,
};

export default MessageHeader;
