import React from 'react';
import {
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';

import Widget from '../../../components/Widget';

const tableData = [
  {
    id: 0,
    state: 'Success',
    usage: ['text-success', 'btn-success'],
  },
  {
    id: 1,
    state: 'Warning',
    usage: ['badge-warning', 'bg-warning'],
  },
  {
    id: 2,
    state: 'Danger',
    usage: ['btn-danger', 'text-danger'],
  },
  {
    id: 3,
    state: 'Info',
    usage: ['alert-info', 'badge-info'],
  },
  {
    id: 4,
    state: 'Primary',
    usage: ['bg-primary', 'text-primary'],
  },
  {
    id: 5,
    state: 'Secondary',
    usage: ['bg-secondary'],
  },
];

const Colors = () => (
  <div>
    <h1 className="page-title">Colors</h1>
    <Row>
      <Col>
        <Widget
          title={<h5>States <span className="fw-semi-bold">Colors</span></h5>}
          close collapse
        >
          <p>Sing comes with a number of state colors that can be applied to
          the most of elements and components. It reuses Bootstrap&apos;s original 6 states:</p>
          <Table>
            <thead>
              <tr>
                <th>STATE</th>
                <th>PREVIEW</th>
                <th>CLASS POSTFIX</th>
                <th>USAGE EXAMPLE</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ state, usage, id }) =>
                <tr key={id}>
                  <th scope="row" className="fw-thin">{state}</th>
                  <td><span className={`circle bg-${state.toLowerCase()}`}>&nbsp;</span></td>
                  <td><code>*-{state.toLowerCase()}</code></td>
                  <td>{usage.map(item => <code key={item} className="mr-xs">{item}</code>)}</td>
                </tr>,
              )}
            </tbody>
          </Table>
        </Widget>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Text <span className="fw-semi-bold">Colors</span></h5>}
          close collapse
        >
          <p>Convey meaning through color with a handful of color utility classes.
            Includes support for styling links with hover states, too. Use <code>text-*</code> class to fill text.</p>
          <div className="widget-padding-md border rounded w-100 h-100 text-left">
            <h1 className="text-danger">h1. Heading</h1>
            <h2 className="text-warning">h2. Heading</h2>
            <h3 className="text-success">h3. Heading</h3>
            <h4 className="text-primary">h4. Heading</h4>
            <h5 className="text-info">h5. Heading</h5>
            <h6 className="text-inverse">h6. Heading</h6>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Example <span className="fw-semi-bold">Buttons</span></h5>}
          close collapse
        >
          <p>Use any of the available button classes to quickly create a styled button.
            Semantically distinguishable beauty.</p>
          <Button className="width-100 mb-xs mr-xs" color="default">Default</Button>
          <Button className="width-100 mb-xs mr-xs" color="primary">Primary</Button>
          <Button className="width-100 mb-xs mr-xs" color="info">Info</Button>
          <Button className="width-100 mb-xs mr-xs" color="success">Success</Button>
          <Button className="width-100 mb-xs mr-xs" color="warning">Warning</Button>
          <Button className="width-100 mb-xs mr-xs" color="danger">Danger</Button>
          <Button className="width-100 mb-xs mr-xs" color="gray">Gray</Button>
          <Button className="width-100 mb-xs mr-xs" color="inverse">Inverse</Button>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Colors;
