import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterElement from './components/FilterElement/FilterElement';
import ProductCard from './components/ProductCard/ProductCard';
import MobileModal from './components/MobileModal/MobileModal';

import s from './Products.module.scss';
import { getProductsRequest } from '../../actions/products';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const filtersData = [{
  title: 'Filter',
  data: [{
    id: 0,
    label: 'Type',
    options: ['Shoes', 'Boots', 'Trainers'],
  },
  {
    id: 1,
    label: 'Brands',
    options: ['All', 'Nike', 'Adidas'],
  },
  {
    id: 2,
    label: 'Size',
    options: [7, 8, 9, 10, 11, 12, 12.5, 13],
  },
  {
    id: 3,
    label: 'Colour',
    options: ['All', 'White', 'Black'],
  },
  {
    id: 4,
    label: 'Range',
    options: ['All', '-', 'None'],
  }],
},
{
  id: 6,
  title: 'Sort',
  data: ['Favourite', 'Price', 'Popular'],
}];

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: []
  };

  state = {
    isModalActive: false,
    modalId: null,
  };

  openModal(id) {
    this.setState({ isModalActive: true, modalId: id });
  }

  closeModal = () => {
    this.setState({ isModalActive: false, modalId: null });
  };

  componentDidMount() {
      this.props.dispatch(getProductsRequest());
  }

  render() {
    const products = this.props.products;
    const { isModalActive, modalId } = this.state;
    return (
      <div>
        {!isModalActive &&
          <div>
            {/* eslint-disable */}
            <h1 className="page-title">E-commerce - <span className="fw-semi-bold">Product Grid</span></h1>
            {/* eslint-enable */}
            <div className={s.productsListFilters}>
              {filtersData.map(item =>
                (typeof item.data[0] === 'string'
                  ? <FilterElement defaultLable={item.title} options={item.data} key={item.id} />
                  : item.data.map(i =>
                    <FilterElement defaultLable={i.label} options={i.options} key={i.id} />)),
              )}
            </div>
            <div className={s.mobileFilterButtons}>
              <button
                className="btn btn-transparent btn-lg"
                onClick={() => this.openModal(1)}
              >
                Sort <i className="fa fa-2x fa-angle-down" />
              </button>
              <button
                className="btn btn-transparent btn-lg"
                onClick={() => this.openModal(0)}
              >
                Filter <i className="fa fa-2x fa-angle-down" />
              </button>
            </div>
            <div className={s.productsListElements}>
              {products.map(item => <ProductCard key={item.id} {...item} />)}
            </div>
          </div>
        }
        <MobileModal active={isModalActive && modalId === 0} data={filtersData[0]} close={this.closeModal} />
        <MobileModal active={isModalActive && modalId === 1} data={filtersData[1]} close={this.closeModal} />
      </div >
    );
  }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
    };
}

export default withRouter(connect(mapStateToProps)(ProductList));
