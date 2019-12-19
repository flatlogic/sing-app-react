import React from 'react';
import PropTypes from 'prop-types';

import Section from './components/Section/Section';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Slider from './components/Slider/Slider';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getProductsRequest } from '../../actions/products';

class Product extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.dispatch(getProductsRequest());
    }

    findProduct(id) {
        const {products} = this.props;
        return products.find(p => p.id === id);
    }

    getId() {
        const {match} = this.props;
        return parseInt(match.params.id);
    }

    render () {
        let product;
        if (this.getId()) {
            product = this.findProduct(this.getId());
        } else {
            product = {
                img: 'static/media/img1.jpg',
                title: 'trainers',
                subtitle: 'Trainers In White',
                price: 76,
                rating: 4.6,
                description_1: "Sneakers (also known as athletic shoes, tennis shoes,gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.",
                description_2: "The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.",
                code: 135234,
                hashtag: "whitetrainers",
                technology: [
                    "Ollie patch",
                    "Cup soles",
                    "Vulcanized rubber soles"
                ],
                reviews: 32
            }
        }
        const products = this.props.products;

        return (
            <div className="product-details">
                <h1 className="page-title">E-commerce - <span className="fw-semi-bold">Product Detail</span></h1>
                {
                    product && (
                        <div>
                            <Banner data={product}/>
                            <Section title="Product Description" h>
                                <Description data={product}/>
                            </Section>
                            <Section title="You may also like">
                                <Slider slides={products}/>
                            </Section>
                        </div>
                    )
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products.data,
    };
}

export default withRouter(connect(mapStateToProps)(Product));
