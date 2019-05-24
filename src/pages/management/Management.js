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
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";

import Widget from '../../components/Widget';
import Rating from '../product/components/Rating/Rating';
import s from './Management.module.scss';

import { getProductsRequest } from '../../actions/products'

class Management extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    constructor(props) {
        super();
        props.dispatch(getProductsRequest());
    }

    imageFormatter(cell) {
        return (
            <img src={cell} className={s.image} title="image"/>
        )
    }

    ratingFormatter(cell) {
        return (
            <Rating rating={parseFloat(cell)}/>
        )
    }

    titleFormatter(cell, row) {
        return cell ? (
            <Link to={'/app/ecommerce/management/' + row.id}>
               {cell[0].toUpperCase() + cell.slice(1)}
            </Link>
        ) : ""
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
                    <BootstrapTable data={this.props.products} version="4" pagination options={options} search
                                    tableContainerClass={`table-striped ${s.bootstrapTable}`}>
                        <TableHeaderColumn dataField="img" dataFormat={this.imageFormatter}>
                            <span className="fs-sm">Image</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn isKey={true} dataField="title" dataFormat={this.titleFormatter}>
                            <span className="fs-sm">Title</span>
                        </TableHeaderColumn>
                        {window.innerWidth >= 768 && (
                            <TableHeaderColumn dataField="description">
                                <span className="fs-sm">Description</span>
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
                    </BootstrapTable>
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

export default withRouter(connect(mapStateToProps)(Management));
