import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import FilterElement from './components/FilterElement/FilterElement';
import GridFilter from './components/GridFilter/GridFilter';
import ProductCard from './components/ProductCard/ProductCard';
import { changeGridStyle } from '../../actions/products';

import mock from './mock';
import s from './Products.scss';

const ProductList = (props) => {
  const { gridStyle, dispatch } = props;
  return (
    <div className="product-list">
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem active>E-commerce</BreadcrumbItem>
      </Breadcrumb>
      <h1 className="page-title">E-commerce > <span className="fw-semi-bold">Product grid</span></h1>
      <div className={s.productsListFilters}>
        <FilterElement defaultLable="Type" options={['Shoes', 'Boots', 'Trainers']} />
        <FilterElement defaultLable="Brands" options={['All', 'Nike', 'Adidas']} />
        <FilterElement defaultLable="Size" options={[7, 8, 9, 10, 11, 12, 12.5, 13]} />
        <FilterElement defaultLable="Colour" options={['All', 'White', 'Black']} />
        <FilterElement defaultLable="Range" options={['All', '-', 'None']} />
        <FilterElement defaultLable="Sort" options={['Favourite', 'Price', 'Popular']} />
      </div>
      <div className={s.productListGridTypes}>
        <GridFilter active={gridStyle} dispatch={dispatch} onChange={changeGridStyle} />
      </div>
      <div className={[s.productsListElements, s[`productsListElements${gridStyle}`]].join(' ')}>
        {mock.map(item => <ProductCard key={item.id} {...item} />)}
      </div>
    </div >
  );
};

ProductList.propTypes = {
  gridStyle: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  gridStyle: state.products.gridStyle,
});

export default connect(mapStateToProps)(withStyles(s)(ProductList));
