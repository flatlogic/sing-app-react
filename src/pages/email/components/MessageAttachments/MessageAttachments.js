import React from 'react';
import PropTypes from 'prop-types';

import s from './MessageAttachments.module.scss';

const MessageAttachments = ({ attachments }) => (
  <div className={s.messageAttachments}>
    <hr />
    <div className={s.attachmentsInfo}>
      <strong>{attachments.length} attachments</strong> -
      <button className="btn-link">Download all attachments</button>
      <button className="btn-link">View all attachments</button>
    </div>
    {attachments.map(att =>
      <div className={s.attachment} key={att.id}>
        <img src={att.photo} alt="attachment" />
        <h5>{att.photoName}</h5>
        <div className={s.attachmentButtons}>
          {att.weight}
          <button className="btn-link">View</button>
          <button className="btn-link">Download</button>
        </div>
      </div>,
    )}
  </div>
);

MessageAttachments.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string,
    photoName: PropTypes.string,
    weight: PropTypes.string,
  })).isRequired,
};

export default MessageAttachments;
