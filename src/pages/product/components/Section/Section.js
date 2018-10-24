import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Section.module.scss';

const Section = ({ title, children, h }) => (
  <div className={s.section}>
    <h2 className={cx(s.sectionTitle, { 'hideon-sm': h })}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  h: PropTypes.bool,
};

Section.defaultProps = {
  h: false,
};

export default Section;
