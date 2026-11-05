import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Badge, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Badges extends Component {
  state = {
    defaultBadgesTabId: '1',
    pillsBadgesTabId: '1',
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
            <BreadcrumbItem active>Badge</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col lg={9}>
          <h2>Badge</h2>
          <p className="mb-lg">Documentation and examples for badges, our small count and labeling component.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Badge } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultBadgesTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultBadgesTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultBadgesTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultBadgesTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultBadgesTabId}>
            <TabPane tabId="1">
              <h1>Example heading <Badge color="primary">Primary</Badge></h1>
              <h2>Example heading <Badge color="info">Info</Badge></h2>
              <h3>Example heading <Badge color="warning">Warning</Badge></h3>
              <h4>Example heading <Badge color="success">Success</Badge></h4>
              <h5>Example heading <Badge color="danger">Danger</Badge></h5>
              <h6>Example heading <Badge color="secondary">Secondary</Badge></h6>
              <p>Badges can be used as part of links or buttons to provide a counter.</p>
              <Button color="primary">Notifications <Badge color="danger">4</Badge></Button>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<h1>Example heading <Badge color="primary">Primary</Badge></h1>\n' +
              '<h2>Example heading <Badge color="info">Info</Badge></h2>\n' +
              '<h3>Example heading <Badge color="warning">Warning</Badge></h3>\n' +
              '<h4>Example heading <Badge color="success">Success</Badge></h4>\n' +
              '<h5>Example heading <Badge color="danger">Danger</Badge></h5>\n' +
              '<h6>Example heading <Badge color="secondary">Secondary</Badge></h6>\n\n' +
              '<Button color="primary">Notifications <Badge color="danger">4</Badge></Button>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.pillsBadgesTabId === '1' })}
                onClick={() => {
                  this.changeTab('pillsBadgesTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.pillsBadgesTabId === '2' })}
                onClick={() => {
                  this.changeTab('pillsBadgesTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.pillsBadgesTabId}>
            <TabPane tabId="1">
              <h4>Pill badges</h4>
              <p>
                <Badge className="mr-xs" color="primary" pill>Primary</Badge>
                <Badge className="mr-xs" color="info" pill>Info</Badge>
                <Badge className="mr-xs" color="warning" pill>Warning</Badge>
                <Badge className="mr-xs" color="success" pill>Success</Badge>
                <Badge className="mr-xs" color="danger" pill>Danger</Badge>
                <Badge className="mr-xs" color="secondary" pill>Secondary</Badge>
                <Badge className="mr-xs" color="light" pill>Light</Badge>
                <Badge className="mr-xs" color="dark" pill>Dark</Badge>
              </p>
              <h4>Badges with link</h4>
              <p>
                <Badge className="mr-xs" href="#" color="primary">Primary</Badge>
                <Badge className="mr-xs" href="#" color="info">Info</Badge>
                <Badge className="mr-xs" href="#" color="warning">Warning</Badge>
                <Badge className="mr-xs" href="#" color="success">Success</Badge>
                <Badge className="mr-xs" href="#" color="danger">Danger</Badge>
                <Badge className="mr-xs" href="#" color="secondary">Secondary</Badge>
                <Badge className="mr-xs" href="#" color="light">Light</Badge>
                <Badge className="mr-xs" href="#" color="dark">Dark</Badge>
              </p>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>
                {'<Badge className="mr-xs" color="primary" pill>Primary</Badge> \n' +
                '<Badge className="mr-xs" href="#" color="primary">Primary</Badge>'}
              </SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/badge/" target="_blank" rel="noopener noreferrer">Reactstrap Badge</a>
        </Col>
      </Row>
    );
  }
}

export default Badges;
