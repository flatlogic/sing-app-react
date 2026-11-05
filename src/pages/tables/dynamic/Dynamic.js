import React from 'react';
import {
  Progress,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import ReactTable from 'react-table';

import { reactTableData, reactBootstrapTableData } from './data';
import Widget from '../../../components/Widget';
import s from './Dynamic.module.scss';

class Dynamic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      reactTable: reactTableData(),
      reactBootstrapTable: reactBootstrapTableData(),
    };
  }


  render() {

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

    function progressFormatter(cell) {
      return (
        <Progress style={{ height: '15px' }} color={cell.type} value={cell.progress} />
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
        <h2 className="page-title">Tables - <span className="fw-semi-bold">Dynamic</span></h2>
        <Widget title={<h4>The <span className="fw-semi-bold">React</span> Way</h4>} collapse close>
          <p>
            Fully customizable Table. Built with <a href="https://allenfang.github.io/react-bootstrap-table/" target="_blank" rel="noopener noreferrer">react-bootstrap-table</a>
          </p>
          <input className="form-control mb-3" aria-label="Search sample rows" placeholder="Search"
            value={this.state.search} onChange={event => this.setState({search:event.target.value})} />
          <BootstrapTable keyField="id" bootstrap4 bordered={false} striped hover
            data={this.state.reactBootstrapTable.filter(row => JSON.stringify(row).toLowerCase().includes(this.state.search.toLowerCase()))}
            wrapperClasses={s.bootstrapTable}
            pagination={paginationFactory({sizePerPage:10,paginationSize:3})}
            columns={[
              {dataField:'id',text:'ID',headerClasses:`width-50 ${s.columnHead}`,classes:'width-50'},
              {dataField:'name',text:'Name',sort:true,headerClasses:s.columnHead},
              {dataField:'info',text:'Info',formatter:infoFormatter,headerClasses:s.columnHead},
              {dataField:'description',text:'Description',formatter:descriptionFormatter,headerClasses:s.columnHead},
              {dataField:'date',text:'Date',sort:true,headerClasses:s.columnHead,
                sortFunc:(a,b,order,rowA,rowB)=>dateSortFunc(rowA,rowB,order)},
              {dataField:'status',text:'Status',sort:true,formatter:progressFormatter,headerClasses:`width-150 ${s.columnHead}`,classes:'width-150',
                sortFunc:(a,b,order,rowA,rowB)=>progressSortFunc(rowA,rowB,order)}
            ]} />
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
