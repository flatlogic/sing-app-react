import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Rating from '../Rating/Rating';

import s from './General.scss';

const General = ({ rating, title, subtitle, price }) => (
  <div className={s.general}>
    <Rating rating={rating} />
    <span className={s.title}>{title}</span>
    <span className={s.subtitle}>{subtitle}</span>
    <span className={s.price}>${price}</span>
  </div>
);

General.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
};

export default withStyles(s)(General);
