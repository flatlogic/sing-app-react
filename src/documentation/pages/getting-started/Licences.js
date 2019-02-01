import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';

import Widget from '../../../components/Widget/Widget';
import Scrollspy from "../ScrollSpyComponent";

const Licences = () => (
  <Row>
    <Col md={10}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Getting Started</BreadcrumbItem>
        <BreadcrumbItem active>Licences</BreadcrumbItem>
      </Breadcrumb>
    </Col>
    <Col lg={9}>
      <Widget id="Licences">
        <h2>Licences</h2>
        <p className="lead">
          A license grants you a non-exclusive and non-transferable right to use
          and incorporate the item in your personal or commercial projects.
          If your end product including an item is going to be free to the end user then
          a Single License is what you need. An Extended License is required if the
          end user must pay to use the end product.
        </p>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Single</th>
              <th>Extended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hundreds unique components</td>
              <td className="text-success fw-bold">+</td>
              <td className="text-success fw-bold">+</td>
            </tr>
            <tr>
              <td>All pages</td>
              <td className="text-success fw-bold">+</td>
              <td className="text-success fw-bold">+</td>
            </tr>
            <tr>
              <td>Free Updates</td>
              <td>3 months</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td>Paying users allowed</td>
              <td className="text-danger fw-bold">-</td>
              <td className="text-success fw-bold">+</td>
            </tr>
          </tbody>
        </Table>
      </Widget>
      <Widget id="Single">
        <h3>Single Application License</h3>
        <p className="lead">
          Your use of the item is restricted to a single application. You may use the item
          in work which you are creating for your own purposes or for your client. You must
          not incorporate the item in a work which is created for redistribution or resale
          by you or your client. The item may not be redistributed or resold. You may not
          charge users for using your application.
        </p>
      </Widget>
      <Widget id="Extended">
        <h3>Extended Application License</h3>
        <p className="lead">
          Your use of the item is restricted to a single application.
          You may use the item in work which you are creating for your own
          purposes or for your clients. You are licensed to use the Item to create one single
          End Product for yourself or for one client (a “single application”), and the
          End Product may be Sold and users may be charged for using it (e.g. you are building
          SAAS application).
        </p>
      </Widget>
      <p class="mt">
        In case if you need any clarifications considering licenses feel free
        to contact us via email: <a class="text-warning" href="mailto:support@flatlogic.com">support@flatlogic.com</a>.
      </p>
    </Col>
    <Col lg={3}>
      <Scrollspy
        title="LICENCES"
        prefix="getting-started/licences"
        ids={[
        'Licences',
        'Single',
        'Extended',
      ]} />
    </Col>
  </Row>
);

export default Licences;
