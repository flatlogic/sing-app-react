import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import * as a2 from '../../images/a2.png';

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
        <h1 className="page-title">Dashboard <small><small>The Lucky One</small></small></h1>
        <Row>
          <Col md={6}>
            <Widget title={<h4>Example <span className="fw-semi-bold">Widget</span></h4>}>
              <div className={s.widgetBody}>
                <img className="pull-left mr-sm" src={a2} alt="Angular 2.0" width="100"/>
                <p className="lead">You are looking at a completely new version of Sing App built
                with brand new <strong>Angular <em>2.0</em> Final Release</strong></p>
                <p>Made by <a href="http://flatlogic.com" target="_blank" rel="noopener noreferrer">Flatlogic</a>.</p>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
