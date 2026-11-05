import React, { Component } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  UncontrolledTooltip,
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

class NavbarPage extends Component {
  state = {
    defaultPopoversTabId: '1',
    defaultTooltipsTabId: '1',
    popovers: {
      1: false,
      2: false,
      3: false,
      4: false,
    }
  };

  changeTab(field, id) {
    this.setState({
      [field]: id,
    })
  }

  toggle(id) {
    this.setState(prevState => ({
      popovers: {
        ...prevState.popovers,
        [id]: !prevState.popovers[id],
      },
    }))
  }

  render() {
    return (
      <Row>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Popovers & Tooltips</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Popovers</h2>
          <p className="mb-lg">The Popover is similar to Tooltip; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { Popover, PopoverHeader, PopoverBody, UncontrolledTooltip } from 'reactstrap';"}
          </SyntaxHighlighter>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultPopoversTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultPopoversTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultPopoversTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultPopoversTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultPopoversTabId}>
            <TabPane tabId="1">
              <Button className="mr" id="popover-1" type="button" color="success" onClick={() => this.toggle(1)}>
                Bottom
              </Button>
              <Button className="mr" id="popover-2" type="button" color="danger" onClick={() => this.toggle(2)}>
                Right
              </Button>
              <Button className="mr" id="popover-3" type="button" color="warning" onClick={() => this.toggle(3)}>
                Top
              </Button>
              <Button className="mr" id="popover-4" type="button" color="info" onClick={() => this.toggle(4)}>
                Left
              </Button>
              <Popover placement="bottom" isOpen={this.state.popovers[1]} target="popover-1" toggle={() => this.toggle(1)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
              <Popover placement="right" isOpen={this.state.popovers[2]} target="popover-2" toggle={() => this.toggle(2)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
              <Popover placement="top" isOpen={this.state.popovers[3]} target="popover-3" toggle={() => this.toggle(3)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
              <Popover placement="left" isOpen={this.state.popovers[4]} target="popover-4" toggle={() => this.toggle(4)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Button id="popover" type="button" color="info" onClick={this.toggle}>\n' +
              '  Top\n' +
              '</Button>\n\n' +
              '<Popover placement="top" isOpen={this.state.isPopoverActive} target="popover" toggle={this.toggle}>\n' +
              '  <PopoverHeader>Popover Title</PopoverHeader>\n' +
              '  <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>\n' +
              '</Popover>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          <h2>Tooltips</h2>
          <Nav tabs className="bg-transparent mt">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultTooltipsTabId === '1' })}
                onClick={() => {
                  this.changeTab('defaultTooltipsTabId', '1');
                }}
              >
                Example
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.defaultTooltipsTabId === '2' })}
                onClick={() => {
                  this.changeTab('defaultTooltipsTabId', '2');
                }}
              >
                Code
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-xlg" activeTab={this.state.defaultTooltipsTabId}>
            <TabPane tabId="1">
              <Button className="mr" id="tooltip-1" type="button" color="success">
                Bottom
              </Button>
              <Button className="mr" id="tooltip-2" type="button" color="danger">
                Right
              </Button>
              <Button className="mr" id="tooltip-3" type="button" color="warning">
                Top
              </Button>
              <Button className="mr" id="tooltip-4" type="button" color="info">
                Left
              </Button>
              <UncontrolledTooltip placement="bottom" target="tooltip-1">
                Hello world!
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="right" target="tooltip-2">
                Hello world!
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="top" target="tooltip-3">
                Hello world!
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="left" target="tooltip-4">
                Hello world!
              </UncontrolledTooltip>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Button className="mr" id="tooltip" type="button" color="info">\n' +
              '  Left\n' +
              '</Button>\n\n' +
              '<UncontrolledTooltip placement="left" target="tooltip">\n' +
              '  Hello world!\n' +
              '</UncontrolledTooltip>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/popovers/" target="_blank" rel="noopener noreferrer">Reactstrap Popovers</a>
          &nbsp;and <a href="https://reactstrap.github.io/components/tooltips/" target="_blank" rel="noopener noreferrer">Reactstrap Tooltips</a>
        </Col>
      </Row>
    );
  }
}

export default NavbarPage;
