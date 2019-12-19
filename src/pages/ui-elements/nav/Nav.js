import React, { Component } from 'react';
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Widget from '../../../components/Widget';

import s from './Nav.module.scss'

class NavExamples extends Component {
  state = {
    isDropdownOpened: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpened: !prevState.isDropdownOpened,
    }));
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <Widget
              title={<h5>Base <span className="fw-semi-bold">Nav</span></h5>}
              close collapse
            >
              <p>
                Navigation available in Bootstrap share general markup and styles,
                from the base .nav class to the active and disabled states. Swap
                modifier classes to switch between each style.
              </p>
              <div className="bg-light p-3">
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
                <pre className="bg-light border-0 w-100 h-100">
                  <code className="text-danger">{'<Nav>\n'}</code>
                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Another Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink disabled href="#">\n'}</code>
                  <code>{'      Disabled Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>
                  <code className="text-danger">{'</Nav>'}</code>
                </pre>
              </div>
              <h5 className="mt">With dropdown</h5>
              <Nav className="bg-light p-2">
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <Dropdown isOpen={this.state.isDropdownOpened} toggle={this.toggleDropdown}>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              title={<h5>Tabs & Pills</h5>}
              close collapse
            >
              <p>
                Takes the basic <code>&lt;Nav&gt;</code> from above and adds the <code>tabs</code> property to generate a
                tabbed interface. Use them to create tabbable regions with our tab
                JavaScript plugin.
              </p>
              <div className="bg-light p-3">
                <Nav tabs  className={`${s.coloredNav}`}>
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
                <pre className="bg-light border-0 w-100 h-100">
                  <code className="text-danger">{'<Nav tabs>\n'}</code>
                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink href="#">\n'}</code>
                  <code>{'      Another Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>

                  <code className="text-info">{'  <NavItem>\n'}</code>
                  <code className="text-warning">{'    <NavLink disabled href="#">\n'}</code>
                  <code>{'      Disabled Link\n'}</code>
                  <code className="text-warning">{'    </NavLink>\n'}</code>
                  <code className="text-info">{'  </NavItem>\n'}</code>
                  <code className="text-danger">{'</Nav>'}</code>
                </pre>
              </div>
              <p className="mt">Do the same thing with the <code>pills</code> property.</p>
              <div className="bg-light p-3">
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
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavExamples;
