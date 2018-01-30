import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import star from '../../../../images/stars/star.svg';
import starFilled from '../../../../images/stars/star-filled.svg';

import s from './ProductCard.scss';

const ProductCard = (props) => {
  const { img, lable, title, description, price, favourite } = props;
  return (
    <div className={s.productCard}>
      <div className={s.productCardPhoto} style={{ backgroundImage: `url(${img})` }}>
        {lable && <div className={[s.lable, s[`lable--${lable.color}`]].join(' ')}>{lable.title}</div>}
        <div className={s.star}>
          <img src={favourite ? starFilled : star} alt="star" />
        </div>
      </div>
      <div className={s.productsCardTitle}>{title}</div>
      <div className={s.productsCardDescription}>{description}</div>
      <div className={s.productsCardPrice}>
        {typeof price === 'number'
          ? `$${price}`
          : <div className={s.sale}>
            <span className={s.old}>${price.old}</span>
            {price.percents}% off
           <span className={s.new}> ${price.new}</span>
          </div>
        }
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  lable: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
  favourite: PropTypes.bool.isRequired,
};

export default withStyles(s)(ProductCard);
