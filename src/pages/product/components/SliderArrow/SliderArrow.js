import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import arrow from '../../../../images/arrow.svg';

import s from './SliderArrow.module.scss';

const SliderArrow = ({ orientation, itemsToDisplay, currentSlide, slideCount, ...otherProps }) => {
  const active = orientation === 'left'
    ? currentSlide !== 0
    : currentSlide + itemsToDisplay < slideCount;
  const orientationClass = orientation === 'left' ? s['arrow--left'] : s['arrow--right'];
  return (
    <button {...otherProps} className={cx(s.arrow, orientationClass, { [s.active]: active })}>
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


export default SliderArrow;
