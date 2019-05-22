import React from 'react';
import PropTypes from 'prop-types';
import {
    BootstrapTable,
    TableHeaderColumn,
} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Widget from '../../components/Widget';
import Rating from '../product/components/Rating/Rating';
import s from './Management.module.scss';

import { getProducts } from '../../actions/products'

class Management extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

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
        return (
            <Link to={'/app/ecommerce/management/' + row.id}>
               {cell[0].toUpperCase() + cell.slice(1)}
            </Link>
        )
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
    }

    render() {
        const options = {
            sizePerPage: 10,
            paginationSize: 3,
        };

        return (
            <div>
                <h2 className="page-title">Product - <span className="fw-semi-bold">Management</span></h2>
                <Widget title="List of Products" collapse close>
                    <BootstrapTable data={this.props.products} version="4" pagination options={options} search
                                    tableContainerClass={`table-striped ${s.bootstrapTable}`}>
                        <TableHeaderColumn className="width-50" columnClassName="width-50" dataField="id" isKey>
                            <span className="fs-sm">ID</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="img" dataFormat={this.imageFormatter}>
                            <span className="fs-sm">Image</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="title" dataFormat={this.titleFormatter}>
                            <span className="fs-sm">Title</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="description">
                            <span className="fs-sm">Description</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="price">
                            <span className="fs-sm">Price($)</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="rating" dataFormat={this.ratingFormatter}>
                            <span className="fs-sm">Rating</span>
                        </TableHeaderColumn>
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

export default connect(mapStateToProps)(Management);
