import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';

import ReactTable from 'react-table';

import { reactTableData, reactBootstrapTableData } from './data';
import Widget from '../../../components/Widget';
import s from './Dynamic.scss';

class Dynamic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reactTable: reactTableData(),
      reactBootstrapTable: reactBootstrapTableData(),
    };
  }

  renderSizePerPageDropDown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(<DropdownItem key={limit} onClick={() => props.changeSizePerPage(limit)}>{ limit }</DropdownItem>);
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle caret>
          { props.currSizePerPage }
        </DropdownToggle>
        <DropdownMenu>
          { limits }
        </DropdownMenu>
      </Dropdown>
    );
  };

  render() {
    const options = {
      sizePerPage: 10,
      paginationSize: 3,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
    };

    function infoFormatter(cell) {
      return (
        <div>
          <small>
            <span className="fw-semi-bold">Type:</span>&nbsp;{cell.type}
          </small>
          <br />
          <small>
            <span className="fw-semi-bold">Dimensions:</span>&nbsp;{cell.dimensions}
          </small>
        </div>
      );
    }

    function descriptionFormatter(cell) {
      return (
        <a href="#">
          {cell}
        </a>
      );
    }

    function progressFormatter(cell) {
      return (
        <Progress color={cell.type} value={cell.progress} />
      );
    }

    function progressSortFunc(a, b, order) {
      if (order === 'asc') {
        return a.status.progress - b.status.progress;
      }
      return b.status.progress - a.status.progress;
    }

    function dateSortFunc(a, b, order) {
      if (order === 'asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>Tables Dynamic</BreadcrumbItem>
        </Breadcrumb>
        <h2 className="page-title">Tables - <span className="fw-semi-bold">Dynamic</span></h2>
        <Widget title={<h4>The <span className="fw-semi-bold">React</span> Way</h4>} collapse close>
          <p>
            Fully customizable Table. Built with <a href="https://allenfang.github.io/react-bootstrap-table/" target="_blank" rel="noopener noreferrer">react-bootstrap-table</a>
          </p>
          <BootstrapTable data={this.state.reactBootstrapTable} version="4" pagination options={options} search tableContainerClass={`table-striped table-hover ${s.bootstrapTable}`}>
            <TableHeaderColumn className="width-50" columnClassName="width-50" dataField="id" isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
            <TableHeaderColumn className="d-none d-md-table-cell" columnClassName="d-none d-md-table-cell" dataField="info" dataFormat={infoFormatter}>Info</TableHeaderColumn>
            <TableHeaderColumn className="d-none d-md-table-cell" columnClassName="d-none d-md-table-cell" dataField="description" dataFormat={descriptionFormatter}>Description</TableHeaderColumn>
            <TableHeaderColumn className="d-none d-md-table-cell" columnClassName="d-none d-md-table-cell" dataField="date" dataSort sortFunc={dateSortFunc}>Date</TableHeaderColumn>
            <TableHeaderColumn className="width-150" columnClassName="width-150" dataField="status" dataSort dataFormat={progressFormatter} sortFunc={progressSortFunc}>Status</TableHeaderColumn>
          </BootstrapTable>
        </Widget>
        <Widget title={<h4>React <span className="fw-semi-bold">Table</span></h4>} collapse close>
          <p>
            Simple table extension with sorting, filtering and pagination for React apps. Built with <a href="https://react-table.js.org/" target="_blank" rel="noopener noreferrer">react-table</a>
          </p>
          <ReactTable
            data={this.state.reactTable}
            filterable
            columns={[
              {
                Header: 'NAME',
                accessor: 'name',
              },
              {
                Header: 'POSITION',
                accessor: 'position',
              },
              {
                Header: 'OFFICE',
                accessor: 'office',
              },
              {
                Header: 'EXT',
                accessor: 'ext',
              },
              {
                Header: 'START DATE',
                accessor: 'startDate',
              },
              {
                Header: 'SALARY',
                accessor: 'salary',
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </Widget>
      </div>
    );
  }

}

export default withStyles(s)(Dynamic);
