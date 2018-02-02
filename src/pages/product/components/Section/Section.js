import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Section.scss';

const Section = ({ title, children }) => (
  <div className={s.section}>
    <h2 className={s.sectionTitle}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(s)(Section);
