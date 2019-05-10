import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Collapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

class Buttons extends Component {
  state = {
    defaultTabsTabId: '1',
    accordion: [false, false, false],
  };

  changeTab(field, id) {
    this.setState({
      [field]: id,
    })
  }

  toggleAccordion(id) {
    const arr = [];
    arr.length = this.state.accordion.length;
    arr.fill(false);
    arr[id] = !this.state.accordion[id];
    this.setState({
      accordion: arr,
    });
  }

  render() {
    return (
      <Row>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Tabs & Accordion</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Tabs</h2>
          <p className="mb-lg">Activates a tab element and content container.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { TabContent, TabPane } from 'reactstrap';"}
          </SyntaxHighlighter>
          <h4 className="mt-lg">Example</h4>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultTabsTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultTabsTabId', '1');
                }}
              >
                Tab 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultTabsTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultTabsTabId', '2');
                }}
              >
                Tab 2
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultTabsTabId}>
            <TabPane tabId="1">
              First tab content
            </TabPane>
            <TabPane tabId="2">
              Second tab content
            </TabPane>
          </TabContent>
          <h4>Code</h4>
          <SyntaxHighlighter language='javascript' style={tomorrow}>{'<TabContent className="mb-xlg" activeTab={this.state.activeTabId}>\n' +
          '  <TabPane tabId="1">\n' +
          '    First tab content\n' +
          '  </TabPane>\n' +
          '  <TabPane tabId="2">\n' +
          '    Second tab content\n' +
          '  </TabPane>\n' +
          '</TabContent>'}</SyntaxHighlighter>
          For more examples please refer to <a href="https://reactstrap.github.io/components/tabs/"
                                               rel="noopener noreferrer" target="_blank">Reactstrap Tabs</a>
          <h2 className="mt-lg">Accordion</h2>
          <p className="mb-lg">Activates a tab element and content container.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Collapse } from 'reactstrap';"}
          </SyntaxHighlighter>
          <h4 className="mt-lg">Example</h4>
          <div className="card panel mt-lg mb-xs">
            { /* eslint-disable */ }
            <div
              className="card-header panel-header bg-light" role="button"
              onClick={() => { this.toggleAccordion(0); }}
            >
              { /* eslint-enable */ }
              <div className="mb-0">
                {/* eslint-disable-next-line */}
                <a className="accordion-toggle" role="button">
                  Collapsible Group Item
                  <i className={`fa fa-angle-down ${this.state.accordion[0] ? 'expanded' : ''}`} />
                </a>
              </div>
            </div>
            <Collapse className="panel-body" isOpen={this.state.accordion[0]}>
              <p>Get base styles and flexible support for collapsible components like accordions and navigation.
                Using the collapse plugin, we built a simple accordion by extending the panel component.
              </p>
            </Collapse>
          </div>
          <div className="card panel mb-xs">
            { /* eslint-disable */ }
            <div
              className="card-header panel-header bg-light" role="button"
              onClick={() => { this.toggleAccordion(1); }}
            >
              { /* eslint-enable */ }
              <div className="mb-0">
                {/* eslint-disable-next-line */}
                <a className="accordion-toggle" role="button">
                  Normal Text Insertion
                  <i className={`fa fa-angle-down ${this.state.accordion[1] ? 'expanded' : ''}`} />
                </a>
              </div>
            </div>
            <Collapse className="panel-body" isOpen={this.state.accordion[1]}>
              <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually.
              </p>
            </Collapse>
          </div>
          <div className="card panel mb-lg">
            { /* eslint-disable */ }
            <div
              className="card-header panel-header bg-light" role="button"
              onClick={() => { this.toggleAccordion(2); }}
            >
              { /* eslint-enable */ }
              <div className="mb-0">
                {/* eslint-disable-next-line */}
                <a className="accordion-toggle" role="button">
                  Random from the Web
                  <i className={`fa fa-angle-down ${this.state.accordion[2] ? 'expanded' : ''}`} />
                </a>
              </div>
            </div>
            <Collapse className="panel-body" isOpen={this.state.accordion[2]}>
              <p><span className="fw-semi-bold">Light Blue</span> - is a next generation admin template based
                on the latest Metro design. There are few reasons we want to tell you, why we have created it:
                We didn't like the darkness of most of admin templates, so we created this light one.
                We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
                We searched for a solution of how to make widgets look like real widgets, so we decided that
                deep background - is what makes widgets look real.
              </p>
              <p className="no-margin text-muted"><em>- Some One</em></p>
            </Collapse>
          </div>
          <h4>Code</h4>
          <SyntaxHighlighter language='javascript' style={tomorrow}>{'<div className="card panel mb-xs">\n' +
          '  <div\n' +
          '    className="card-header panel-header bg-light" role="button"\n' +
          '    onClick={this.toggleAccordion}\n' +
          '  >\n' +
          '    <div className="mb-0">\n' +
          '      <a className="accordion-toggle" role="button">\n' +
          '        Normal Text Insertion\n' +
          '        <i className={["fa fa-angle-down", this.state.isAccordionOpened ? "expanded" : ""].join(" ")} />\n' +
          '      </a>\n' +
          '    </div>\n' +
          '  </div>\n' +
          '  <Collapse className="panel-body" isOpen={this.state.isAccordionOpened}>\n' +
          '    <p>Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.\n' +
          '    </p>\n' +
          '  </Collapse>\n' +
          '</div>'}</SyntaxHighlighter>
          For more examples please refer to <a href="https://reactstrap.github.io/components/collapse/" target="_blank" rel="noopener noreferrer">Reactstrap Collapse</a>
        </Col>
      </Row>
    );
  }
}

export default Buttons;
