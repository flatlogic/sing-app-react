import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import arrow from '../../../../images/arrow.svg';

import s from './SliderArrow.scss';

const SliderArrow = ({ orientation, itemsToDisplay, currentSlide, slideCount, ...otherProps }) => {
  const active = orientation === 'left'
    ? currentSlide !== 0
    : currentSlide + itemsToDisplay < slideCount;
  return (
    <button {...otherProps} className={[s.arrow, s[`arrow--${orientation}`], s[active && 'active']].join(' ')}>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

SliderArrow.propTypes = {
  orientation: PropTypes.string.isRequired,
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  itemsToDisplay: PropTypes.number.isRequired,
};

SliderArrow.getDefaultProps = {
  currentSlide: null,
  slideCount: null,
};


export default withStyles(s)(SliderArrow);
