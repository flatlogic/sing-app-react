import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    Input,
    Label,
    Form,
    FormGroup,
    Col,
    Button,
    ButtonToolbar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";

import { loadProductRequest, receiveProduct, updateProduct, updateProductRequest, createProductRequest, deleteProductRequest } from '../../../../actions/products';
import Widget from '../../../../components/Widget';
import s from './ProductDetail.module.scss';
import img1 from "../../../../images/products/img1.jpg";
import img2 from "../../../../images/products/img2.jpg";
import img3 from "../../../../images/products/img3.jpg";
import img4 from "../../../../images/products/img4.jpg";
import img5 from "../../../../images/products/img5.jpeg";
import img6 from "../../../../images/products/img6.jpg";

class ProductDetail extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    constructor() {
        super();
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.updateProductRequest = this.updateProductRequest.bind(this);
        this.createProductRequest = this.createProductRequest.bind(this);
        this.deleteProductRequest = this.deleteProductRequest.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false
        }
    }

    componentDidMount() {
        let product;
        if(this.getId() > -1) {
            product = this.findProduct(this.getId());
            if (!product) {
                this.props.dispatch(loadProductRequest(this.getId()));
            }
        } else {
            this.props.dispatch(receiveProduct({
                id: -1,
                img: img1,
                price: 0.01,
                rating: 5
            }));
        }
    }

    findProduct(id) {
        const {products} = this.props;
        return products.find(p => p.id === id);
    }

    getId() {
        const {match} = this.props;
        return parseInt(match.params.id) || -1;
    }

    updateProductRequest() {
        this.props.dispatch(updateProductRequest(this.findProduct(this.getId())));
    }

    createProductRequest() {
        this.props.dispatch(createProductRequest({
            product: this.findProduct(this.getId()),
            history: this.props.history
        }));
    }

    deleteProductRequest() {
        this.props.dispatch(deleteProductRequest({
            id: this.getId(),
            history: this.props.history
        }));
    }

    updateTitle(event) {
        this.updateProduct(event.target.value, 'title');
    }

    updateDescription(event) {
        this.updateProduct(event.target.value, 'description');
    }

    updatePrice(event) {
        this.updateProduct(event.target.value, 'price');
    }

    updateRating(event) {
        this.updateProduct(event.target.value, 'rating');
    }

    updateImage(img) {
        this.updateProduct(img, 'img');
    }

    getImage() {
        let product = this.findProduct(this.getId());
        return product ? product.img : null;
    }

    updateProduct(value, key) {
        let product = this.findProduct(this.getId());
        product[key] = value;
        this.props.dispatch(updateProduct(product));
    }

    goBack() {
        this.props.history.push('/app/ecommerce/management');
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        const isNew = this.getId() === -1;
        let product = this.findProduct(this.getId()) || {};

        let image = this.getImage();

        return (
            <div>
                <h2 className="page-title">Product - <span className="fw-semi-bold">Detail</span></h2>
                <Widget title={(isNew ? "New" : "Edit") + " product"} collapse close>
                    <Form>
                        <FormGroup row>
                            <Label md={2} for="productImage">Image</Label>
                            <Col md={5}>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} id="productImage">
                                    <DropdownToggle caret color="info">
                                        <img className={s.productImage} alt="img" src={image}/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {[img1, img2, img3, img4, img5, img6].map(img => (
                                            <DropdownItem key={img} onClick={() => this.updateImage(img)}>
                                                <img className={s.productImage} alt={img} src={img}/>
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} for="productTitle">Title</Label>
                            <Col md={5}>
                                <Input id="productTitle" type="text" defaultValue={product.title} onChange={this.updateTitle}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} for="productDescription">Description</Label>
                            <Col md={5}>
                                <Input id="productDescription" type="text" defaultValue={product.description}
                                       onChange={this.updateDescription}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} for="productPrice">Price</Label>
                            <Col md={2}>
                                <Input id="productPrice" type="number" step={0.01} min={0.01} defaultValue={product.price}
                                       onChange={this.updatePrice}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} for="productRating">Rating</Label>
                            <Col md={2}>
                                <Input id="productRating" step={0.1} min={0} max={5} type="number" defaultValue={product.rating}
                                       onChange={this.updateRating}/>
                            </Col>
                        </FormGroup>
                        <ButtonToolbar>
                            <Button color="success" onClick={!isNew ? this.updateProductRequest : this.createProductRequest}>Save</Button>
                            <Button color="default" onClick={() => {this.goBack()}}>Back</Button>
                            {!isNew && (<Button color="danger" onClick={this.deleteProductRequest}>Delete</Button>)}
                        </ButtonToolbar>
                    </Form>
                </Widget>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
    };
}

export default withRouter(connect(mapStateToProps)(ProductDetail));
