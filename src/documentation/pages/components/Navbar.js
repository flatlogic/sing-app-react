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
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

class NavbarPage extends Component {
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
            <BreadcrumbItem active>Navbar</BreadcrumbItem>
          </Breadcrumb>
        </Col>

        <Col lg={9}>
          <h2>Navbar</h2>
          <p className="mb-lg">Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar.
            Includes support for branding, navigation, and more, including support for our collapse plugin.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import {\n" +
            "  Nav,\n" +
            "  NavItem,\n" +
            "  NavLink,\n" +
            "  Navbar,\n" +
            "  NavbarBrand,\n" +
            "  NavbarToggler,\n" +
            "  Collapse,\n" +
            "  UncontrolledDropdown,\n" +
            "  DropdownToggle,\n" +
            "  DropdownMenu,\n" +
            "  DropdownItem\n" +
            "} from 'reactstrap';"}
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
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Sing</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Documentation</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </TabPane>
            <TabPane tabId="2">
              <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Navbar color="light" light expand="md">\n' +
              '  <NavbarBrand href="/">Sing</NavbarBrand>\n' +
              '  <NavbarToggler />\n' +
              '  <Collapse navbar>\n' +
              '    <Nav className="ml-auto" navbar>\n' +
              '      <NavItem>\n' +
              '        <NavLink href="#">Components</NavLink>\n' +
              '      </NavItem>\n' +
              '      <NavItem>\n' +
              '        <NavLink href="#">Documentation</NavLink>\n' +
              '      </NavItem>\n' +
              '      <UncontrolledDropdown nav inNavbar>\n' +
              '        <DropdownToggle nav caret>\n' +
              '          Options\n' +
              '        </DropdownToggle>\n' +
              '        <DropdownMenu right>\n' +
              '          <DropdownItem>\n' +
              '            Option 1\n' +
              '          </DropdownItem>\n' +
              '          <DropdownItem>\n' +
              '            Option 2\n' +
              '          </DropdownItem>\n' +
              '          <DropdownItem divider />\n' +
              '          <DropdownItem>\n' +
              '            Reset\n' +
              '          </DropdownItem>\n' +
              '        </DropdownMenu>\n' +
              '      </UncontrolledDropdown>\n' +
              '    </Nav>\n' +
              '  </Collapse>\n' +
              '</Navbar>'}</SyntaxHighlighter>
            </TabPane>
          </TabContent>
          For more examples please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">Reactstrap Card</a>
        </Col>
      </Row>
    );
  }
}

export default NavbarPage;
