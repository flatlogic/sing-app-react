import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

class NavPage extends Component {
  state = {
    defaultNavTabId: '1',
    verticalNavTabId: '1',
    pillsNavTabId: '1',
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
            <BreadcrumbItem active>Nav</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Nav</h2>
          <p className="mb-lg">Change the style of Nav component with modifiers and utilities. Mix and match as needed, or build your own.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Nav, NavItem, NavLink } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultNavTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultNavTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultNavTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultNavTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultNavTabId}>
            <TabPane tabId="1">
              <Nav>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Nav>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Another Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink disabled href="#">Disabled Link</NavLink>\n' +
              '  </NavItem>\n' +
              '</Nav>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.verticalNavTabId === '1' })}
                onClick={() => {
                  this.changeTab('verticalNavTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.verticalNavTabId === '2' })}
                onClick={() => {
                  this.changeTab('verticalNavTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.verticalNavTabId}>
            <TabPane tabId="1">
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Nav vertical>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Another Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink disabled href="#">Disabled Link</NavLink>\n' +
              '  </NavItem>\n' +
              '</Nav>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.pillsNavTabId === '1' })}
                onClick={() => {
                  this.changeTab('pillsNavTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.pillsNavTabId === '2' })}
                onClick={() => {
                  this.changeTab('pillsNavTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.pillsNavTabId}>
            <TabPane tabId="1">
              <Nav pills>
                <NavItem>
                  <NavLink href="#" active>Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Nav>\n' +
              '  <NavItem pills>\n' +
              '    <NavLink href="#" active>Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink href="#">Another Link</NavLink>\n' +
              '  </NavItem>\n' +
              '  <NavItem>\n' +
              '    <NavLink disabled href="#">Disabled Link</NavLink>\n' +
              '  </NavItem>\n' +
              '</Nav>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">Reactstrap Card</a>
        </Col>
      </Row>
    );
  }
}

export default NavPage;
