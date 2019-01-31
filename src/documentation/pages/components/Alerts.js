import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Alert, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const alerts = [{
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
}];

class Overview extends Component {
  state = {
    defaultAlertsTabId: '1',
    transparentAlertsTabId: '1',
  };

  changeTab(field, id) {
    this.setState({
      [field]: id,
    })
  }

  render() {
    return (
      <Row>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Alerts</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col lg={9}>
          <h2>Alerts</h2>
          <p className="mb-lg">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Alert } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultAlertsTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultAlertsTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultAlertsTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultAlertsTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultAlertsTabId}>
            <TabPane tabId="1">
              <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
              {alerts.map((alert, index) => <Alert
                key={alert.id} isOpen={alert.visible[0]} toggle={() => this.closeAlert(index, 0)}
                color={alert.type}
              >
                <span dangerouslySetInnerHTML={{__html: alert.msg}}/>
              </Alert>)}
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Alert\n' +
              '  isOpen={true}\n' +
              '  toggle={this.closeAlert}\n' +
              '  color="danger"\n' +
              '>\n' +
              '  <h1>Alert Content</h1>\n' +
              '</Alert>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.transparentAlertsTabId === '1' })}
                onClick={() => {
                  this.changeTab('transparentAlertsTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.transparentAlertsTabId === '2' })}
                onClick={() => {
                  this.changeTab('transparentAlertsTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.transparentAlertsTabId}>
            <TabPane tabId="1">
              <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
              {alerts.map((alert, index) => <Alert
                className="alert-transparent"
                key={alert.id} isOpen={alert.visible[0]} toggle={() => this.closeAlert(index, 0)}
                color={alert.type}
              >
                <span dangerouslySetInnerHTML={{__html: alert.msg}}/>
              </Alert>)}
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Alert\n' +
              '  className="alert-transparent"\n' +
              '  isOpen={true}\n' +
              '  toggle={this.closeAlert}\n' +
              '  color="danger"\n' +
              '>\n' +
              '  <h1>Alert Content</h1>\n' +
              '</Alert>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/alerts/" target="_blank">Reactstrap Alerts</a>
        </Col>
      </Row>
    );
  }
}

export default Overview;
