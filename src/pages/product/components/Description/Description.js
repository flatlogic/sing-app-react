import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Rating from '../Rating/Rating';

import s from './Description.scss';

const Description = ({ description, code, technologies, tag, rating, reviews }) => (
  <div className={s.productDescription}>
    <div className={s.productDescriptionInfo}>
      <h3>PRODUCT DESCRIPTION</h3>
      {description.map((text, index) => <p key={index}>{text}</p>)}
    </div>
    <div>
      <h3>PRODUCT CODE</h3>
      {code}
    </div>
    <div>
      <h3>SHARE</h3>
      <span>Share a photo with a tag <a href="#">{tag}</a></span>
      <div className={s.socialList}>
        <div />
        <div />
        <div />
      </div>
    </div>
    <div>
      <h3>TECHNOLOGY</h3>
      <ul>
        {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
    </div>
    <div>
      <h3>RATING & REVIEWS</h3>
      <Rating rating={rating} />
      {reviews} Reviews
      <a href="#">Read all</a>
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  tag: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default withStyles(s)(Description);
