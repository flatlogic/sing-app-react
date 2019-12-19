import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import SortableTree from 'react-sortable-tree';

import Widget from '../../../components/Widget';

import './ListGroups.scss';

const SortableItem = SortableElement(({ value }) => <li className="list-group-item">
  <i className="fa fa-sort" />
  <button className="close flex-last ml-auto" data-dismiss="alert">&times;</button>
  &nbsp;&nbsp;&nbsp; {value.id} &nbsp;&nbsp;&nbsp;
  {value.text}
</li>);


const SortableList = SortableContainer(({ items }) => (
  <ul className="list-group list-group-sortable mt-xs">
    {items.map((value, index) => (
      <SortableItem key={`item-${index.toString()}`} index={index} value={value} />
      ))}
  </ul>
  ));

const NestableItem = SortableElement(({ value }) => {
  if (value.children) {
    return (
      <li className="dd-item">
        <div className="dd-handle" data-id={value.id}> {value.text} </div>
        <ol className="dd-list">
          {value.children.map((child, index) => (
            <NestableItem key={`nest-${index.toString()}`} index={index} value={child} />
          ))}
        </ol>
      </li>);
  }
  return (
    <li className="dd-item">
      <div className="dd-handle" data-id={value.id}> {value.text} </div>
    </li>
  );
});

class ListGroups extends React.Component {

  constructor() {
    super();
    this.state = {
      nestableFirstItems: [{ id: 1, title: 'Item 1' }, {
        id: 2,
        expanded: true,
        title: 'Item 2',
        children: [{ id: 3, title: 'Item 3' }, { id: 4, title: 'Item 4' }, {
          id: 5,
          title: 'Item 5',
          expanded: true,
          children: [{ id: 6, title: 'Item 6' }, {
            id: 7, title: 'Item 7',
          }, {
            id: 8, title: 'Item 8',
          }],
        }, { id: 9, title: 'Item 9' }],
      }],
      nestableSecondItems: [{ id: 13, title: 'Item 13' }, { id: 14, title: 'Item 14' }, {
        id: 15,
        expanded: true,
        title: 'Item 15',
        children: [{ id: 16, title: 'Item 16' }, { id: 17, title: 'Item 17' }, {
          id: 18, title: 'Item 18',
        }],

      }],
      sortableList: [{
        id: '03', text: ' Barnard\'s Star',
      }, {
        id: '01', text: 'The Sun',
      }, {
        id: '04', text: 'Wolf 359',
      }, {
        id: '02', text: 'Proxima Centauri',
      }, {
        id: '05', text: 'Lalande 21185',
      }],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      sortableList: arrayMove(this.state.sortableList, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <div>
        <h1 className="page-title">Lists - <span className="fw-semi-bold">Sortable Groups</span>
        </h1>
        <Widget
          title={<h4> Grouped <span className="fw-semi-bold">Lists</span></h4>}
          close refresh settings
        >
          <h3>Closest <span className="fw-semi-bold">Stars</span></h3>
          <p>
            Try to play around with this list. Are you ready to pass an exam on astronomy?
          </p>

          <SortableList items={this.state.sortableList} onSortEnd={this.onSortEnd} />
        </Widget>

        <Widget
          title={<h3>Nestable <span className="fw-semi-bold">List</span></h3>}
          close refresh settings
        >
          <p className="fs-mini">
            There is a scientific theory that you can arrange this list in such way that there will
            be no more saddness
            in the whole world. Can you? Touch devices supported
          </p>
          <Row className="nestable">
            <Col md="6" xs="12" className="mb-xs">
              <SortableTree
                treeData={this.state.nestableFirstItems}
                onChange={nestableFirstItems => this.setState({ nestableFirstItems })}
              />
            </Col>
            <Col md="6">
              <SortableTree
                treeData={this.state.nestableSecondItems}
                onChange={nestableSecondItems => this.setState({ nestableSecondItems })}
              />
            </Col>
          </Row>
        </Widget>

      </div>
    );
  }

}

export default ListGroups;
