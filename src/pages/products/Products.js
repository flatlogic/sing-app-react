import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import FilterElement from './components/FilterElement/FilterElement';
import ProductCard from './components/ProductCard/ProductCard';

import mock from './mock';
import s from './Products.scss';

const ProductList = () => (
  <div className="product-list">
    <Breadcrumb>
      <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
      <BreadcrumbItem active>E-commerce</BreadcrumbItem>
    </Breadcrumb>
    {/* eslint-disable */}
    <h1 className="page-title">E-commerce > <span className="fw-semi-bold">Product grid</span></h1>
    {/* eslint-enable */}
    <div className={s.productsListFilters}>
      <FilterElement defaultLable="Type" options={['Shoes', 'Boots', 'Trainers']} />
      <FilterElement defaultLable="Brands" options={['All', 'Nike', 'Adidas']} />
      <FilterElement defaultLable="Size" options={[7, 8, 9, 10, 11, 12, 12.5, 13]} />
      <FilterElement defaultLable="Colour" options={['All', 'White', 'Black']} />
      <FilterElement defaultLable="Range" options={['All', '-', 'None']} />
      <FilterElement defaultLable="Sort" options={['Favourite', 'Price', 'Popular']} />
    </div>
    <div className={s.productsListElements}>
      {mock.map(item => <ProductCard key={item.id} {...item} />)}
    </div>
  </div >
);

export default withStyles(s)(ProductList);
