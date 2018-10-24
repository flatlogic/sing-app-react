import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Rating from '../../../product/components/Rating/Rating';

import star from '../../../../images/stars/star.svg';
import starFilled from '../../../../images/stars/star-filled.svg';

import s from './ProductCard.module.scss';

class ProductCard extends Component {
  state = {
    favourite: this.props.favourite,
  }

  changeFavourite() {
    this.setState(pvState => ({ favourite: !pvState.favourite }));
  }

  render() {
    const { img, label, title, description, price, rating } = this.props;
    const { favourite } = this.state;
    return (
      <div className={[s.productCard, 'product-card'].join(' ')}>
        <div className={s.productCardPhoto} style={{ backgroundImage: `url(${img})` }}>
          {label && <div className={cx(s.label, label === 'Sale' ? 'bg-danger' : 'bg-success')}>{label}</div>}
          <button className={s.star} onClick={() => this.changeFavourite()}>
            <img src={favourite ? starFilled : star} alt="star" />
          </button>
        </div>
        <div className={s.productCardDataWrapper}>
          <div className={cx(s.productsCardTitle, 'title')}>{title}</div>
          <div className={cx(s.productsCardDescription, 'description')}>{description}</div>
        </div>
        <div className={s.productsCardPrice}>
          {typeof price === 'number'
            ? `$${price}`
            : <div className={s.sale}>
              <span className={s.old}>${price.old}</span>
              {price.percents}% off
           <span className={s.new}> ${price.new}</span>
            </div>
          }
          {rating && <Rating rating={rating} size="sm" />}
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
  favourite: PropTypes.bool.isRequired,
  rating: PropTypes.number,
};

ProductCard.getDefaultProps = {
  rating: null,
};

export default ProductCard;
