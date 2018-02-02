import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import Section from './components/Section/Section';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Slider from './components/Slider/Slider';
import cardsMock from '../products/mock';
import mock from './mock';

import img from '../../images/products/img1.jpg';

const Product = () => (
  <div className="product-details">
    <Breadcrumb>
      <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
      <BreadcrumbItem active>E-commerce</BreadcrumbItem>
    </Breadcrumb>
    <h1 className="page-title">E-commerce > <span className="fw-semi-bold">Product details</span></h1>
    <Banner image={img} />
    <Section title="PRODUCT DESCRIPTION">
      <Description {...mock} />
    </Section>
    <Section title="YOU MAY ALSO LIKE">
      <Slider slides={cardsMock} />
    </Section>
  </div >
);


export default Product;
