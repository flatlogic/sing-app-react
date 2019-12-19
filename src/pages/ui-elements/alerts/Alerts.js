import React, { Component } from 'react';
import cx from 'classnames';
import {
  Row,
  Col,
  Alert,
} from 'reactstrap';

import Widget from '../../../components/Widget';

class Alerts extends Component {
  state = {
    alerts: [{
      id: 'al-1',
      type: 'success',
      msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
      visible: [true, true, true],
    }, {
      id: 'al-2',
      type: 'info',
      msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
      visible: [true, true, true],
    }, {
      id: 'al-3',
      type: 'warning',
      msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
      visible: [true, true, true],
    }, {
      id: 'al-4',
      type: 'danger',
      msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
      visible: [true, true, true],
    }],
  }

  closeAlert(index, alertGroup) {
    const newAlerts = [...this.state.alerts];
    newAlerts[index].visible[alertGroup] = false;

    this.setState({ alerts: newAlerts });
  }

  render() {
    const { alerts } = this.state;

    return (
      <div>
        <h1 className="page-title">Alerts</h1>
        <Row>
          <Col xs={12} md={8}>
            <Widget
              title={<h5>Alert <span className="fw-semi-bold">Messages</span></h5>}
              close collapse
            >
              <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
              {alerts.map((alert, index) => <Alert
                key={alert.id} isOpen={alert.visible[0]} toggle={() => this.closeAlert(index, 0)}
                color={alert.type}
              >
                <span dangerouslySetInnerHTML={{ __html: alert.msg }} />
              </Alert>)}
            </Widget>
          </Col>
          <Col xs={12} md={8}>
            <Widget
              title={<h5>Transparent <span className="fw-semi-bold">Alerts</span></h5>}
              close collapse
            >
              <p>Transparent  alerts are available by adding <code>.alert-transparent</code> class.</p>
              {alerts.map((alert, index) => <Alert
                className="alert-transparent"
                key={alert.id} isOpen={alert.visible[1]} toggle={() => this.closeAlert(index, 1)}
                color={alert.type}
              >
                <span dangerouslySetInnerHTML={{ __html: alert.msg }} />
              </Alert>)}
            </Widget>
          </Col>
          <Col xs={12} md={8}>
            <Widget
              title={<h5>Rounded <span className="fw-semi-bold">Alerts</span></h5>}
              close collapse
            >
              <p>Rounded alerts are available by adding <code>.alert-rounded</code> class.</p>
              {alerts.map((alert, index) => <Alert
                className={cx('alert-rounded', { 'alert-transparent': index % 2 !== 1 })}
                key={alert.id} isOpen={alert.visible[2]} toggle={() => this.closeAlert(index, 2)}
                color={alert.type}
              >
                <span dangerouslySetInnerHTML={{ __html: alert.msg }} />
              </Alert>)}
            </Widget>
          </Col>
          <Col xs={12} md={8}>
            <Widget
              title={<h5>Additional <span className="fw-semi-bold">Content</span></h5>}
              close collapse
            >
              <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
              <Alert color="success">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
              </Alert>
              <Alert color="danger">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                </p>
              </Alert>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Alerts;
