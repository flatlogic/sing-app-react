import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Buttons extends Component {
  state = {
    defaultCardTabId: '1',
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
            <BreadcrumbItem active>Card</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Card</h2>
          <p className="mb-lg">Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Card, CardBody } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultCardTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultCardTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultCardTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultCardTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultCardTabId}>
            <TabPane tabId="1">
              <Card className="border-0">
                <CardBody>
                  <button className="btn-link fw-semi-bold text-success">Avg Rating</button>
                  <button className="btn-link fw-semi-bold text-muted ml-sm">All Time</button>
                  <hr />
                  <div className="d-flex justify-content-between mb-lg">
                    <div className="text-warning">
                      <i className="fa fa-star mr-xs" />
                      <i className="fa fa-star mr-xs" />
                      <i className="fa fa-star mr-xs" />
                      <i className="fa fa-star mr-xs" />
                      <i className="fa fa-star" />
                    </div>
                    <span className="text-muted"><small>342 REVIEWS</small></span>
                  </div>
                  <div className="mb-lg">
                    <h3 className="text-success mb-0">69%</h3>
                    of customers recomend this product
                  </div>
                  <Button className="btn-rounded-f" color="success">Write a Review</Button>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Card className="border-0">\n' +
              '  <CardBody>\n' +
              '    <button className="btn-link fw-semi-bold text-success">Avg Rating</button>\n' +
              '    <button className="btn-link fw-semi-bold text-muted ml-sm">All Time</button>\n' +
              '    <hr />\n' +
              '    <div className="d-flex justify-content-between mb-lg">\n' +
              '      <div className="text-warning">\n' +
              '        <i className="fa fa-star mr-xs" />\n' +
              '        <i className="fa fa-star mr-xs" />\n' +
              '        <i className="fa fa-star mr-xs" />\n' +
              '        <i className="fa fa-star mr-xs" />\n' +
              '        <i className="fa fa-star" />\n' +
              '      </div>\n' +
              '      <span className="text-muted"><small>342 REVIEWS</small></span>\n' +
              '    </div>\n' +
              '    <div className="mb-lg">\n' +
              '      <h3 className="text-success mb-0">69%</h3>\n' +
              '      of customers recomend this product\n' +
              '    </div>\n' +
              '    <Button className="btn-rounded-f" color="success">Write a Review</Button>\n' +
              '  </CardBody>\n' +
              '</Card>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">Reactstrap Card</a>
        </Col>
      </Row>
    );
  }
}

export default Buttons;
