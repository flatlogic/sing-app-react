import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../../../../components/Widget';
import MessageHeader from '../MessageHeader/MessageHeader';
import MessageAttachments from '../MessageAttachments/MessageAttachments';

const Message = ({ message, compose }) => (
  <Widget>
    <MessageHeader
      title={message.theme}
      name={message.from}
      email={message.fromEmail}
      to={message.to}
      date={message.date}
      compose={compose}
    />
    {/* eslint-disable */}
    <div
      dangerouslySetInnerHTML={{ __html: message.content }}
    />
    {/* eslint-enable */}
    {message.attachments && <MessageAttachments attachments={message.attachments} />}
  </Widget>
);

Message.propTypes = {
  message: PropTypes.shape({
    theme: PropTypes.string,
    from: PropTypes.string,
    fromEmail: PropTypes.string,
    to: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  compose: PropTypes.func.isRequired,
};

export default Message;
