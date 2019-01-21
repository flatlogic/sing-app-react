import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import dashboard from '../../../images/documentation/sing-screenshot.jpg';
import Widget from "../../../components/Widget";

const Overview = () => (
  <Row>
    <Col md={10}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Getting Started</BreadcrumbItem>
        <BreadcrumbItem active>Overview</BreadcrumbItem>
      </Breadcrumb>
    </Col>
    <Col md={8}>
      <Widget>
        <h2>Overview</h2>
        <p className="lead">
          Sing App React is an admin dashboard template built with React 16.5.2. Sing App goes beyond usual admin
          templates and provides you entire intuitive programming framework. Server Side Rendering and Node.js backend
          will even further speed up your development. You can use Sing App React to build any type of web applications
          like SAAS, CMS, financial dashboards, project management tools, etc.
        </p>
        <img className="img-responsive w-100 border" src={dashboard} alt="screenshot" />
        <Link to="/app">Live demo</Link>
      </Widget>
      <Widget>
        <h3 className="">Features</h3>
        <ul className="mt">
          <li className="lead"><i className="la la-check" /> Hundreds of Pages</li>
          <li className="lead"><i className="la la-check" /> Fully Responsive</li>
          <li className="lead"><i className="la la-check" /> React 16 new</li>
          <li className="lead"><i className="la la-check" /> 8 Charts Library</li>
          <li className="lead"><i className="la la-check" /> 2 Dashboards</li>
          <li className="lead"><i className="la la-check" /> Theme Support</li>
          <li className="lead"><i className="la la-check" /> E-Commerce Section</li>
          <li className="lead"><i className="la la-check" /> Static & Hover Sidebar</li>
          <li className="lead"><i className="la la-check" /> Fully Documented Codebase</li>
          <li className="lead"><i className="la la-check" /> And even more coming soon!</li>
        </ul>
      </Widget>
      <Row>
        <Col md={4}>
          <Widget title="Continue with">
            <Link to="/documentation/getting-started/licences">
              <h4>Licences <i className="la la-arrow-right"/></h4>
            </Link>
          </Widget>
        </Col>
        <Col md={4}>
          <Widget title="Or learn about">
            <Link to="/documentation/getting-started/quick-start">
              <h4>How to start project <i className="la la-arrow-right"/></h4>
            </Link>
          </Widget>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Overview;
