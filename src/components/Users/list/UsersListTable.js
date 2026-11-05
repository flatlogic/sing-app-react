import * as dataFormat from '../../../components/Users/list/UsersDataFormatters';
import actions from '../../../actions/usersListActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import Widget from '../../../components/Widget';

import s from '../Users.module.scss';

class UsersListTable extends Component {
  state = {
    search: '',
    modalOpen: false,
    idToDelete: null,
  }

  handleDelete() {
    const userId = this.props.idToDelete;
    this.props.dispatch(actions.doDelete(userId));
  }

  openModal(cell) {
    const userId = cell;
    this.props.dispatch(actions.doOpenConfirm(userId));
  }

  closeModal() {
    this.props.dispatch(actions.doCloseConfirm());
  }

  actionFormatter(cell) {
    return (
      <div className={`d-flex justify-content-between`}>
        <Button
          className={s.controBtn}
          color="info"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/users/${cell}`))}
        >
          View
        </Button>
        <Button
          className={s.controBtn}
          color="success"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/users/${cell}/edit`))}
        >
          Edit
        </Button>
        <Button
          className={s.controBtn}
          color="danger"
          size="xs"
          onClick={() => this.openModal(cell)}
        >
          Delete
        </Button>
      </div>
     )
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }

  render() {
    const {
      rows
    } = this.props;

    const columns = [
      { dataField: 'avatars', text: 'Avatar', sort: true,
        formatter: (cell, row, rowIndex) => dataFormat.imageFormatter(cell, row, undefined, rowIndex) },
      { dataField: 'firstName', text: 'First Name', sort: true },
      { dataField: 'lastName', text: 'Last Name', sort: true },
      { dataField: 'phoneNumber', text: 'Phone Number', sort: true },
      { dataField: 'email', text: 'E-mail', sort: true },
      { dataField: 'role', text: 'Role', sort: true },
      { dataField: 'disabled', text: 'Disabled', sort: true, formatter: dataFormat.booleanFormatter },
      { dataField: 'id', text: 'Actions', formatter: cell => this.actionFormatter(cell) },
    ];

    const query = this.state.search.toLowerCase();
    const filteredRows = rows.filter(row => columns.some(column =>
      String(row[column.dataField] == null ? '' : row[column.dataField]).toLowerCase().includes(query)
    ));

    return (
        <div>
          <Widget title="Users" collapse close>
            <div>
              <input className="form-control mb-3" aria-label="Search users" placeholder="Search"
                value={this.state.search} onChange={event => this.setState({ search: event.target.value })} />
              <BootstrapTable keyField="id" data={filteredRows} columns={columns} bootstrap4 bordered={false} striped hover
                wrapperClasses={`table-responsive ${s.usersListTableMobile}`}
                pagination={paginationFactory({ sizePerPage: 10, paginationSize: 5 })} />
            </div>
          </Widget>

          <Modal size="sm" isOpen={this.props.modalOpen} toggle={() => this.closeModal()}>
            <ModalHeader toggle={() => this.closeModal()}>Confirm delete</ModalHeader>
            <ModalBody className="bg-white">
              Are you sure you want to delete this item?
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => this.closeModal()}>Cancel</Button>
              <Button color="primary" onClick={() => this.handleDelete()}>Delete</Button>
            </ModalFooter>
          </Modal>

        </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.list.loading,
    rows: store.users.list.rows,
    modalOpen: store.users.list.modalOpen,
    idToDelete: store.users.list.idToDelete,
  };
}

export default connect(mapStateToProps)(UsersListTable);
