import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'reactstrap';

import react from '../../images/react.png';

import Widget from '../../components/Widget';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;
          <small>
            <small>The Lucky One</small>
          </small>
        </h1>
        <Row>
          <Col md={6}>
            <Widget title={<h5>Example <span className="fw-semi-bold">Widget</span></h5>}>
              <img className="float-left mr-sm" src={react} alt="React JS" width="80" />
              <p className="lead">You are looking at a completely new version of Sing App built
                with <strong>React JS</strong></p>
              <p>Made by <a href="http://flatlogic.com" target="_blank" rel="noopener noreferrer">Flatlogic</a>.</p>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
