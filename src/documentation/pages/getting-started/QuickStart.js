import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Widget from "../../../components/Widget/Widget";

const QuickStart = () => (
  <Row>
    <Col md={10}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Getting Started</BreadcrumbItem>
        <BreadcrumbItem active>Quick Start</BreadcrumbItem>
      </Breadcrumb>
    </Col>
    <Col md={9}>
      <Widget>
        <h5>Requirements:</h5>
        <ol>
          <li>1. Mac OS X, Windows, or Linux</li>
          <li>2. Yarn package + Node.js v6.5 or newer</li>
        </ol>
        <h5>Quick Start:</h5>
        <ol>
          <li>1. Run <code>yarn install</code></li>
          <li>2. Run <code>yarn start</code></li>
        </ol>
        <h5>There are also other npm tasks:</h5>
        <ul>
          <li><code>yarn run build</code>: if you need just to build the app (without running a dev server)</li>
          <li><code>yarn run lint</code>: to check the source code for syntax errors and potential issues</li>
        </ul>
      </Widget>
      <p>For more instruction please refer to Sing App React readme.md.</p>
    </Col>
  </Row>
);

export default QuickStart;
