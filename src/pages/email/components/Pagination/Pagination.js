import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Pagination.scss';

const Pagination = () => (
  <div className={s.pagination}>
    <span className={s.paginationText}>Showing 1 - 10 of 96 messages</span>
    <div className={s.paginationPages}>
      <button className={cx(s.button, s.buttonDisabled)}><i className="fa fa-chevron-left" /></button>
      <button className={cx(s.button, s.buttonActive)}>1</button>
      <button className={s.button}>2</button>
      <button className={s.button}><i className="fa fa-chevron-right" /></button>
    </div>
  </div>
);

export default withStyles(s)(Pagination);
