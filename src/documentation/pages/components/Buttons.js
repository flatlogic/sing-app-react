import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

class Buttons extends Component {
  state = {
    defaultButtonTabId: '1',
    outlineButtonsTabId: '1',
    buttonsSizeTabId: '1'
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
            <BreadcrumbItem active>Buttons</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Buttons</h2>
          <p className="mb-lg">Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Button } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultButtonTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultButtonTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultButtonTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultButtonTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultButtonTabId}>
            <TabPane tabId="1">
              <Button color="default" className="width-100 mb-xs mr-xs">Default</Button>
              <Button color="primary" className="width-100 mb-xs mr-xs">Primary</Button>
              <Button color="info" className="width-100 mb-xs mr-xs">Info</Button>
              <Button color="success" className="width-100 mb-xs mr-xs">Success</Button>
              <Button color="warning" className="width-100 mb-xs mr-xs">Warning</Button>
              <Button color="danger" className="width-100 mb-xs mr-xs">Danger</Button>
              <Button color="gray" className="width-100 mb-xs mr-xs">Gray</Button>
              <Button color="inverse" className="width-100 mb-xs mr-xs">Inverse</Button>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Button color="default" className="width-100 mb-xs mr-xs">Default</Button>\n' +
              '<Button color="primary">Primary</Button>\n' +
              '<Button color="info">Info</Button>\n' +
              '<Button color="success">Success</Button>\n' +
              '<Button color="warning"">Warning</Button>\n' +
              '<Button color="danger">Danger</Button>\n' +
              '<Button color="gray">Gray</Button>\n' +
              '<Button color="inverse">Inverse</Button>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.outlineButtonsTabId === '1' })}
                onClick={() => {
                  this.changeTab('outlineButtonsTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.outlineButtonsTabId === '2' })}
                onClick={() => {
                  this.changeTab('outlineButtonsTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.outlineButtonsTabId}>
            <TabPane tabId="1">
              <Button outline color="default" className="width-100 mb-xs mr-xs">Default</Button>
              <Button outline color="primary" className="width-100 mb-xs mr-xs">Primary</Button>
              <Button outline color="info" className="width-100 mb-xs mr-xs">Info</Button>
              <Button outline color="success" className="width-100 mb-xs mr-xs">Success</Button>
              <Button outline color="warning" className="width-100 mb-xs mr-xs">Warning</Button>
              <Button outline color="danger" className="width-100 mb-xs mr-xs">Danger</Button>
              <Button outline color="gray" className="width-100 mb-xs mr-xs">Gray</Button>
              <Button outline color="inverse" className="width-100 mb-xs mr-xs">Inverse</Button>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>
                {'<Button outline color="default">Default</Button>\n' +
                '<Button outline color="primary">Primary</Button>\n' +
                '<Button outline color="info">Info</Button>\n' +
                '<Button outline color="success">Success</Button>\n' +
                '<Button outline color="warning">Warning</Button>\n' +
                '<Button outline color="danger">Danger</Button>\n' +
                '<Button outline color="gray"">Gray</Button>\n' +
                '<Button outline color="inverse">Inverse</Button>'}
              </SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.buttonsSizeTabId === '1' })}
                onClick={() => {
                  this.changeTab('buttonsSizeTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.buttonsSizeTabId === '2' })}
                onClick={() => {
                  this.changeTab('buttonsSizeTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.buttonsSizeTabId}>
            <TabPane tabId="1">
              <p className="fs-mini text-muted">
                Fancy larger or smaller buttons?
                Four separate sizes available for all use cases:
                from tiny 10px button to large one.
              </p>
              <p>
                <Button color="default" size="lg" className="mb-xs mr-xs">Large button</Button>
                <Button color="primary" className="mb-xs mr-xs">Default button</Button>
                <Button color="info" size="sm" className="mb-xs mr-xs">Small button</Button>
                <Button color="success" size="xs" className="mb-xs mr-xs">Tiny button</Button>
              </p>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>
                {'<Button color="default" size="lg">Large button</Button>\n' +
                '<Button color="primary">Default button</Button>\n' +
                '<Button color="info" size="sm">Small button</Button>\n' +
                '<Button color="success" size="xs">Tiny button</Button>'}
              </SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/buttons/" target="_blank" rel="noopener noreferrer">Reactstrap Buttons</a>
        </Col>
      </Row>
    );
  }
}

export default Buttons;
