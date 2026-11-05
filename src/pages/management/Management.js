import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Popover, PopoverBody, PopoverHeader, Alert } from 'reactstrap';

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
import cx from 'classnames';

class Management extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    state = {
        search: '',
        popovers: {},
        promoAlert: false,
    };

    constructor() {
        super();
        this.apiFormatter = this.apiFormatter.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProductsRequest());
        setTimeout(() => {
            this.showPromoAlert();
        }, 100);
    }

    showPromoAlert() {
        this.setState({promoAlert: true});
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

    togglePopover(id) {
        this.setState(({popovers}) => ({
            popovers: {...popovers, [id]: !popovers[id]}
        }));
    }

    apiFormatter(cell, row) {
        return (
            <ButtonToolbar>
                <Button color="info" size="xs" onClick={()=> this.props.history.push('/app/ecommerce/management/' + row.id)}>
                    <span className="d-none d-md-inline-block">Edit</span>
                    <span className="d-md-none"><i className='la la-edit'/></span>
                </Button>
                <Button id={'popoverDelete_' + row.id} color="danger" size="xs">
                    {this.props.isDeleting && this.props.idToDelete === row.id ? <Loader size={14}/> :
                        <span>
                            <span className="d-none d-md-inline-block">Delete</span>
                            <span className="d-md-none"><i className='la la-remove'/></span>
                        </span>
                    }
                </Button>
                <Popover className="popover-danger" target={'popoverDelete_' + row.id} placement="top" isOpen={this.state.popovers[row.id]}
                         toggle={()=>{this.togglePopover(row.id)}}
                >
                    <PopoverHeader className="px-5">Are you sure?</PopoverHeader>
                    <PopoverBody className="px-5 d-flex justify-content-center">
                        <ButtonToolbar>
                            <Button color="success" size="xs" onClick={() => {this.deleteProduct(row.id)}}>
                                Yes
                            </Button>
                            <Button color="danger" size="xs" onClick={() => {this.togglePopover(row.id)}}>
                                No
                            </Button>
                        </ButtonToolbar>
                    </PopoverBody>
                </Popover>
            </ButtonToolbar>
        )
    }


  createNewProduct() {
    this.props.history.push('/app/ecommerce/management/create');
  }

  render() {

    return (
      <div>
        <div className="page-top-line">
          <h2 className="page-title">Product - <span className="fw-semi-bold">Management</span></h2>
          <Alert
            color="warning"
            className={cx(s.promoAlert, {[s.showAlert]: this.state.promoAlert})}
          >
            This page is only available in <a className="text-white fw-bold" rel="noreferrer noopener" href="https://flatlogic.com/templates/sing-app-react-node-js" target="_blank">Sing App React with NodeJS/.NET</a> integration!
          </Alert>
        </div>
        <Widget title="List of Products" collapse close
          fetchingData={this.props.isReceiving}
        >
          <Button color="success" onClick={() => this.createNewProduct()}>Create Product</Button>
          <input className="form-control my-3" aria-label="Search products" placeholder="Search"
            value={this.state.search} onChange={event => this.setState({search:event.target.value})} />
          <BootstrapTable keyField="id" bootstrap4 bordered={false} striped
            data={this.props.products.filter(row => JSON.stringify(row).toLowerCase().includes(this.state.search.toLowerCase()))}
            wrapperClasses={s.bootstrapTable}
            pagination={paginationFactory({sizePerPage:10,paginationSize:3})}
            columns={[
              {dataField:'id',text:'ID',headerClasses:'width-50',classes:'width-50'},
              {dataField:'img',text:'Image',formatter:this.imageFormatter},
              {dataField:'title',text:'Title',formatter:this.titleFormatter},
              {dataField:'subtitle',text:'Subtitle',hidden:window.innerWidth<768},
              {dataField:'price',text:'Price($)',hidden:window.innerWidth<768},
              {dataField:'rating',text:'Rating',formatter:this.ratingFormatter,hidden:window.innerWidth<768},
              // Cells memoize formatter output, including the popover and delete spinner.
              {dataField:'api',text:'Api',formatter:this.apiFormatter,
                formatExtraData:{popovers:this.state.popovers,isDeleting:this.props.isDeleting,idToDelete:this.props.idToDelete}}
            ]} />
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
