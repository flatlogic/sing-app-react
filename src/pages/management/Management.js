import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    BootstrapTable,
    TableHeaderColumn,
} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Button,
    ButtonToolbar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";

import Widget from '../../components/Widget';
import Rating from '../product/components/Rating/Rating';
import s from './Management.module.scss';

import { getProductsRequest, deleteProductRequest } from '../../actions/products'
import Loader from '../../components/Loader';

class Management extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    constructor() {
        super();
        this.apiFormatter = this.apiFormatter.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProductsRequest());
    }

    imageFormatter(cell) {
        return (
            <img src={cell} alt="..." className={s.image} title="image"/>
        )
    }

    ratingFormatter(cell) {
        return (
            <Rating rating={parseFloat(cell)}/>
        )
    }

    titleFormatter(cell, row) {
        return cell ? (
            <Link to={'/app/ecommerce/product/' + row.id}>
               {cell[0].toUpperCase() + cell.slice(1)}
            </Link>
        ) : ""
    }

    deleteProduct(id) {
        this.props.dispatch(deleteProductRequest({
            id,
            history: this.props.history
        }))
    }

    apiFormatter(cell, row) {
        return (
            <ButtonToolbar>
                <Button color="info" size="xs" onClick={()=> this.props.history.push('/app/ecommerce/management/' + row.id)}>Edit</Button>
                <Button color="danger" size="xs" onClick={()=>{this.deleteProduct(row.id)}}>
                    {this.props.isDeleting && this.props.idToDelete === row.id ? <Loader size={14}/> : 'Delete'}
                </Button>
            </ButtonToolbar>
        )
    }

    renderSizePerPageDropDown = (props) => {
        const limits = [];
        props.sizePerPageList.forEach((limit) => {
            limits.push(<DropdownItem key={limit}
                                      onClick={() => props.changeSizePerPage(limit)}>{limit}</DropdownItem>);
        });

        return (
            <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
                <DropdownToggle color="default" caret>
                    {props.currSizePerPage}
                </DropdownToggle>
                <DropdownMenu>
                    {limits}
                </DropdownMenu>
            </Dropdown>
        );
    };

    createNewProduct() {
        this.props.history.push('/app/ecommerce/management/create');
    }

    render() {
        const options = {
            sizePerPage: 10,
            paginationSize: 3,
            sizePerPageDropDown: this.renderSizePerPageDropDown,
        };

        return (
            <div>
                <h2 className="page-title">Product - <span className="fw-semi-bold">Management</span></h2>
                <Widget title="List of Products" collapse close>
                    <Button color="success" onClick={() => this.createNewProduct()}>Create Product</Button>
                    {this.props.isReceiving ?
                        <Loader className="my-5" size={40}/> :
                        <BootstrapTable data={this.props.products} version="4" pagination options={options} search
                                        tableContainerClass={`table-striped ${s.bootstrapTable}`}>
                            <TableHeaderColumn dataField="id" isKey={true} className="width-50"
                                               columnClassName="width-50">
                                <span className="fs-sm">ID</span>
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField="img" dataFormat={this.imageFormatter}>
                                <span className="fs-sm">Image</span>
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField="title" dataFormat={this.titleFormatter}>
                                <span className="fs-sm">Title</span>
                            </TableHeaderColumn>
                            {window.innerWidth >= 768 && (
                                <TableHeaderColumn dataField="subtitle">
                                    <span className="fs-sm">Subtitle</span>
                                </TableHeaderColumn>
                            )}
                            {window.innerWidth >= 768 && (
                                <TableHeaderColumn dataField="price">
                                    <span className="fs-sm">Price($)</span>
                                </TableHeaderColumn>
                            )}
                            {window.innerWidth >= 768 && (
                                <TableHeaderColumn dataField="rating" dataFormat={this.ratingFormatter}>
                                    <span className="fs-sm">Rating</span>
                                </TableHeaderColumn>
                            )}
                            <TableHeaderColumn dataFormat={this.apiFormatter}>
                                <span className="fs-sm">Api</span>
                            </TableHeaderColumn>
                        </BootstrapTable>
                    }
                </Widget>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
        isReceiving: state.products.isReceiving,
        isDeleting: state.products.isDeleting,
        idToDelete: state.products.idToDelete,
    };
}

export default withRouter(connect(mapStateToProps)(Management));
