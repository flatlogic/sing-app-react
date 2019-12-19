import React, { Component } from 'react';
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Widget from '../../../components/Widget';

class NavbarExamples extends Component {
  state = {
    navs: [false, false, false, false],
  }

  toggle(id) {
    const newState = Array(4).fill(false);

    if (!this.state.navs[id]) {
      newState[id] = true;
    }

    this.setState({ navs: newState });
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={9}>
            <Widget
              title={<h5>Navbar <span className="fw-semi-bold">Example</span></h5>}
              close collapse
            >
              <p>Here’s what you need to know before getting started with the navbar:</p>
              <ul>
                <li>Navbars require a wrapping <code>&lt;Navbar&gt;</code> with <code>expand=&quot;*&quot;</code> for
                    responsive collapsing and color scheme classes.</li>
                <li>Navbars and their contents are fluid by default. Use optional containers
                  to limit their horizontal width.</li>
                <li>Use our spacing and flex utility classes for controlling spacing and alignment within navbars.</li>
                <li>Navbars are responsive by default, but you can easily modify them to change that. Responsive
                  behavior depends on our Collapse JavaScript plugin.</li>
                <li>Navbars are hidden by default when printing. Force them to be printed by adding <code>.d-print</code>
                to the <code>.navbar</code>. See the display utility class.</li>
              </ul>
              <Navbar className="px-2 mt-lg" color="light" light expand="md">
                <NavbarBrand href="/">Navbar</NavbarBrand>
                <NavbarToggler className="ml-auto" onClick={() => this.toggle(0)} />
                <Collapse isOpen={this.state.navs[0]} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Features</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Widget>
          </Col>
          <Col xs={12} md={9}>
            <Widget
              title={<h5>Navbar <span className="fw-semi-bold">Example</span></h5>}
              close collapse
            >
              <p>Theming the navbar has never been easier thanks to the combination of
                theming classes and background-color utilities. Choose from <code>color=&quot;light&quot;</code>
                for use with light background colors, or <code>color=&quot;dark&quot;</code> for dark background
                colors. Then, customize with <code>.bg-*</code> utilities.</p>
              <Navbar className="px-2 mt-lg" color="inverse" dark expand="md">
                <NavbarBrand href="/">Navbar</NavbarBrand>
                <NavbarToggler className="ml-auto" onClick={() => this.toggle(1)} />
                <Collapse isOpen={this.state.navs[1]} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Features</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Navbar className="px-2 mt-lg" color="primary" dark expand="md">
                <NavbarBrand href="/">Navbar</NavbarBrand>
                <NavbarToggler className="ml-auto" onClick={() => this.toggle(2)} />
                <Collapse isOpen={this.state.navs[2]} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Features</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Navbar className="px-2 mt-lg" color="light" light expand="md">
                <NavbarBrand href="/">Navbar</NavbarBrand>
                <NavbarToggler className="ml-auto" onClick={() => this.toggle(3)} />
                <Collapse isOpen={this.state.navs[3]} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Features</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavbarExamples;
