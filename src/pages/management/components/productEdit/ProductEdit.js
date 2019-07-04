import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput'
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
    DropdownToggle,
    Popover,
    PopoverHeader,
    PopoverBody
} from "reactstrap";

import {
  loadProductRequest,
  receiveProduct,
  updateProduct,
  updateProductRequest,
  createProductRequest,
  deleteProductRequest,
  getProductsImagesRequest
} from '../../../../actions/products';
import Widget from '../../../../components/Widget';
import Loader from '../../../../components/Loader';
import s from './ProductEdit.module.scss';

class ProductEdit extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        images: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: [],
        images: []
    };

    constructor(props) {
        super(props);
        this.updateProductRequest = this.updateProductRequest.bind(this);
        this.createProductRequest = this.createProductRequest.bind(this);
        this.deleteProductRequest = this.deleteProductRequest.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false,
            popover: false
        };

        this.description_1 = React.createRef();
        this.description_2 = React.createRef();

        let newProduct = {
          id: -1,
          price: 0.01,
          rating: 5,
          technology: []
        };
        let product = this.findProduct(this.getId());
        if (this.getId() > -1) {
            if (!product) {
                this.props.dispatch(loadProductRequest(this.getId()));
            }
        } else {
            if (!product) {
                this.props.dispatch(receiveProduct(newProduct));
            }

        }

        this.props.dispatch(getProductsImagesRequest(newProduct));
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
        debugger;
        this.props.dispatch(deleteProductRequest({
            id: this.getId(),
            history: this.props.history
        }));
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

    togglePopover() {
        this.setState({
            popover: !this.state.popover
        });
    }

    componentDidUpdate() {
        let product = this.findProduct(this.getId()) || {
            technology: []
        };
        if (this.description_1.current) {
            this.description_1.current.value = product.description_1 || "";
        }

        if (this.description_2.current) {
            this.description_2.current.value = product.description_2 || "";
        }
    }

    render() {
        const isNew = this.getId() === -1;
        let image = this.getImage();
        let product = this.findProduct(this.getId()) || {
            technology: []
        };

        return (
            <div>
                <h2 className="page-title">Product - <span className="fw-semi-bold">Detail</span></h2>
                <Widget title={(isNew ? "New" : "Edit") + " product"} collapse close>
                    {!isNew && this.props.isReceiving ? <Loader size={40}/> :
                        <Form>
                            <FormGroup row>
                                <Label md={2} for="productImage">Image</Label>
                                <Col md={5}>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}
                                              id="productImage">
                                        <DropdownToggle caret color="info">
                                          {image && <img className={s.productImage} alt="img" src={image}/>}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {this.props.images.map(img => (
                                                <DropdownItem key={img} onClick={() => this.updateProduct(img, 'img')}>
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
                                    <Input id="productTitle" type="text" defaultValue={product.title}
                                           onChange={(event) => this.updateProduct(event.target.value, 'title')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productSubtitle">Subtitle</Label>
                                <Col md={5}>
                                    <Input id="productSubtitle" type="text" defaultValue={product.subtitle}
                                           onChange={(event) => this.updateProduct(event.target.value, 'subtitle')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productPrice">Price</Label>
                                <Col md={2}>
                                    <Input id="productPrice" type="number" step={0.01} min={0.01}
                                           defaultValue={product.price}
                                           onChange={(event) => this.updateProduct(event.target.value, 'price')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productDiscount">Discount</Label>
                                <Col md={2}>
                                    <Input id="productDiscount" type="number" step={1} min={0} max={100}
                                           defaultValue={product.discount || 0}
                                           onChange={(event) => this.updateProduct(event.target.value, 'discount')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productDescription_1">Description 1</Label>
                                <Col md={5}>
                                <textarea rows={3} className="form-control" id="productDescription_1"
                                          ref={this.description_1}
                                          onChange={(event) => this.updateProduct(event.target.value, 'description_1')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productDescription_2">Description 2</Label>
                                <Col md={5}>
                                <textarea rows={3} className="form-control" id="productDescription_2"
                                          ref={this.description_2}
                                          onChange={(event) => this.updateProduct(event.target.value, 'description_2')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productCode">Code</Label>
                                <Col md={2}>
                                    <Input id="productCode" type="text"
                                           defaultValue={product.code}
                                           onChange={(event) => this.updateProduct(event.target.value, 'code')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productHashtag">Hashtag</Label>
                                <Col md={5}>
                                    <Input id="productHashtag" type="text"
                                           defaultValue={product.hashtag}
                                           onChange={(event) => this.updateProduct(event.target.value, 'hashtag')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productTechnology">Technology</Label>
                                <Col md={5}>
                                    <TagsInput className="react-tagsinput form-control" id="productTechnology"
                                               value={product.technology}
                                               onChange={(tags) => this.updateProduct(tags, 'technology')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="productRating">Rating</Label>
                                <Col md={2}>
                                    <Input id="productRating" step={0.1} min={0} max={5} type="number"
                                           defaultValue={product.rating}
                                           onChange={(event) => this.updateProduct(event.target.value, 'rating')}/>
                                </Col>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button color="success"
                                        onClick={!isNew ? this.updateProductRequest : this.createProductRequest}>
                                    {this.props.isUpdating ? <Loader/> : 'Save'}
                                </Button>
                                <Button color="default" onClick={() => {
                                    this.goBack()
                                }}>Back</Button>
                                {!isNew && (
                                    <span>
                                        <Button id="deleteProductPopover" color="danger">
                                            {this.props.isDeleting ? <Loader/> : 'Delete'}
                                        </Button>
                                        <Popover className="popover-danger" target="deleteProductPopover"
                                                 placement="top"
                                                 isOpen={this.state.popover}
                                                 toggle={() => {
                                                     this.togglePopover()
                                                 }}
                                        >
                                            <PopoverHeader className="px-5">Are you sure?</PopoverHeader>
                                            <PopoverBody className="px-5 d-flex justify-content-center">
                                                <ButtonToolbar>
                                                    <Button color="success" size="xs" onClick={this.deleteProductRequest}>
                                                        Yes
                                                    </Button>
                                                    <Button color="danger" size="xs" onClick={() => {
                                                        this.togglePopover()
                                                    }}>
                                                        No
                                                    </Button>
                                                </ButtonToolbar>
                                            </PopoverBody>
                                        </Popover>
                                    </span>
                                )}
                            </ButtonToolbar>
                        </Form>
                    }
                </Widget>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
        images: state.products.images,
        isReceiving: state.products.isReceiving,
        isUpdating: state.products.isUpdating,
        isDeleting: state.products.isDeleting,
    };
}

export default withRouter(connect(mapStateToProps)(ProductEdit));
