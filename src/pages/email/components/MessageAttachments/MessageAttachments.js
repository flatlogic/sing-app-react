import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './MessageAttachments.scss';

const MessageAttachments = ({ attachments }) => (
  <div className={s.messageAttachments}>
    <hr />
    <div className={s.attachmentsInfo}>
      <strong>{attachments.length} attachments</strong> -
      <a href="#">Download all attachments</a>
      <a href="#">View all attachments</a>
    </div>
    {attachments.map(att =>
      <div className={s.attachment} key={att.id}>
        <img src={att.photo} alt="attachment" />
        <h5>{att.photoName}</h5>
        <div className={s.attachmentButtons}>
          {att.weight}
          <a href="#">View</a>
          <a href="#">Download</a>
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

export default withStyles(s)(MessageAttachments);
