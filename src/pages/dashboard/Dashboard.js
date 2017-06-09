import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import $ from 'jquery';

import Widget from '../../components/Widget';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alert1Visible: true,
      alert2Visible: true,
      alert3Visible: true,
      alert4Visible: true,
    };
  }


  render() {
    return (
      <div className={s.root}>
        <Breadcrumb>
          <BreadcrumbItem><span className="text-muted">YOU ARE HERE</span></BreadcrumbItem>
          <BreadcrumbItem active>Profile</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title">Dashboard</h1>
        <Row>
          <Col sm={6}>
            <Widget title={<div>Example Widget</div>}>
              <div>
                <p>You are looking at a completely new version of Sing App built
                with brand new <strong>Angular <em>2.0</em> Final Release</strong></p>
                <p>Made by <a href="http://flatlogic.com" target="_blank" rel="noopener noreferrer">Flatlogic</a>.</p></div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
