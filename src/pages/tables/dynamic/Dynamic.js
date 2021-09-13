import React from 'react';
import {
  Progress
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import ReactTable from 'react-table';


import { reactTableData, reactBootstrapTableData } from './data';
import Widget from '../../../components/Widget';
import s from './Dynamic.modules.scss';

const { SearchBar } = Search;
class Dynamic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reactTable: reactTableData(),
      reactBootstrapTable: reactBootstrapTableData(),
    };
  }

  render() {
    const sizePerPageOptionRenderer = ({
      text,
      page,
      onSizePerPageChange
    }) => (
    <li
      key={ text }
      role="presentation"
      className="dropdown-item"
      >
      <a href="#" tabIndex="-1"
         role="menuitem"
         data-page={page}
         onMouseDown={(e) => {
           e.preventDefault();
            onSizePerPageChange(page);
         }}
        style={{display:'block',color:'#495057'}}
        >
        { text }
      </a>
    </li>
    );

    const options = {
      sizePerPageOptionRenderer
    };

    function infoFormatter(cell) {
      return (
        <div>
          <small>
            Type:&nbsp;<span className="fw-semi-bold">{cell.type}</span>
          </small>
          <br />
          <small>
            Dimensions:&nbsp;<span className="fw-semi-bold">{cell.dimensions}</span>
          </small>
        </div>
      );
    }

    function descriptionFormatter(cell) {
      return (
        <button className="btn-link">
          {cell}
        </button>
      );
    }

    const columns = [{
      dataField: 'id',
      text: 'ID',
      classes: `width-100 fs-sm`
    },{
      dataField: 'name',
      text: 'Name',
      classes: `fs-sm`,
      dataSort: true,
      sort: true
    },{
      dataField: 'info',
      text: 'Info',
      formatter: infoFormatter,
      classes: `d-md-table-cell fs-sm`
    },{
      dataField: 'description',
      text: 'Description',
      formatter: descriptionFormatter,
      classes: `d-md-table-cell fs-sm`
    },{
      dataField: 'date',
      text: 'Date',
      dataSort: true,
      sort: true,
      classes: `d-md-table-cell fs-sm`,
    },{
      dataField: 'status',
      text: 'Status',
      formatter: (cell) => {
        return <Progress style={{ height: '15px' }} color={cell.type} value={cell.progress} />
      },
      sort: true,
      sortValue: cell => cell.progress,
      classes: `d-md-table-cell fs-sm`
    }
    ];


    return (
      <div>
        <h2 className="page-title">Tables - <span className="fw-semi-bold">Dynamic</span></h2>
        <Widget title={<h4>The <span className="fw-semi-bold">React</span> Way</h4>} collapse close>
          <p>
            Fully customizable Table. Built with <a href="https://react-bootstrap-table.github.io/react-bootstrap-table2/" target="_blank" rel="noopener noreferrer">react-bootstrap-table2</a>
          </p>

          <ToolkitProvider
            keyField="id"
            data={this.state.reactBootstrapTable}
            columns={ columns }
            search
          >
            {
              props => (
                <div>
                  <div className="mb-sm-5 offset-md-8" style={{float: 'right'}}>
                    <SearchBar { ...props.searchProps } />
                  </div>

                  <BootstrapTable bootstrap4 class="table table-responsive table-striped table-hover"  pagination={ paginationFactory(options)} keyField='id' data={this.state.reactBootstrapTable} columns={ columns }
                    { ...props.baseProps }
                  />
                </div>
              )
            }
          </ToolkitProvider>
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

export default Dynamic;
