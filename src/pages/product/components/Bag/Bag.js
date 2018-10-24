import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import bag from '../../../../images/bag.svg';
import star from '../../../../images/stars/star.svg';
import starFilled from '../../../../images/stars/star-filled.svg';
import s from './Bag.module.scss';

class Bag extends Component {
  state = {
    favourite: this.props.favourite || false,
  }

  changeFavourite() {
    this.setState(pvState => ({ favourite: !pvState.favourite }));
  }

  render() {
    const { favourite } = this.state;
    return (
      <div className={s.bag} >
        <button className={cx('btn', s.add)}>
          add to bag
      <img src={bag} alt="bag" />
        </button>
        <button className={cx('btn', s.star)} onClick={() => this.changeFavourite()}>
          <img src={favourite ? starFilled : star} alt="star" />
        </button>
      </div>
    );
  }
}

Bag.propTypes = {
  favourite: PropTypes.bool,
};

Bag.getDefaultProps = {
  favourite: false,
};

export default Bag;
