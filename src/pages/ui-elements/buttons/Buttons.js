import React from 'react';
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Widget from '../../../components/Widget';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
    this.toggleFour = this.toggleFour.bind(this);

    this.onRadioBtnClickOne = this.onRadioBtnClickOne.bind(this);
    this.onRadioBtnClickTwo = this.onRadioBtnClickTwo.bind(this);
    this.onCheckboxBtnClickOne = this.onCheckboxBtnClickOne.bind(this);
    this.onCheckboxBtnClickTwo = this.onCheckboxBtnClickTwo.bind(this);

    this.state = {
      dropdownOpenOne: false,
      dropdownOpenTwo: false,
      dropdownOpenThree: false,
      dropdownOpenFour: false,
      cSelectedOne: [2],
      cSelectedTwo: [1, 3],
      rSelectedTwo: 2,
      rSelectedOne: null,
    };
  }

  onRadioBtnClickOne(rSelectedOne) {
    this.setState({ rSelectedOne });
  }

  onRadioBtnClickTwo(rSelectedTwo) {
    this.setState({ rSelectedTwo });
  }

  onCheckboxBtnClickOne(selected) {
    const index = this.state.cSelectedOne.indexOf(selected);
    if (index < 0) {
      this.state.cSelectedOne.push(selected);
    } else {
      this.state.cSelectedOne.splice(index, 1);
    }
    this.setState({ cSelectedOne: [...this.state.cSelectedOne] });
  }

  onCheckboxBtnClickTwo(selected) {
    const index = this.state.cSelectedTwo.indexOf(selected);
    if (index < 0) {
      this.state.cSelectedTwo.push(selected);
    } else {
      this.state.cSelectedTwo.splice(index, 1);
    }
    this.setState({ cSelectedTwo: [...this.state.cSelectedTwo] });
  }

  toggleOne() {
    this.setState({
      dropdownOpenOne: !this.state.dropdownOpenOne,
    });
  }

  toggleTwo() {
    this.setState({
      dropdownOpenTwo: !this.state.dropdownOpenTwo,
    });
  }

  toggleThree() {
    this.setState({
      dropdownOpenThree: !this.state.dropdownOpenThree,
    });
  }

  toggleFour() {
    this.setState({
      dropdownOpenFour: !this.state.dropdownOpenFour,
    });
  }

  render() {
    return (
      <div>

        <h1 className="page-title">Buttons - <span className="fw-semi-bold">Styles </span></h1>

        <Row>
          {/* Color options */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Color <span className="fw-semi-bold">Options</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Use any of the available button classes to quickly create a styled button.
                  Semantically distinguishable beauty.
                </p>
                <p className="text-start">
                  <Button color="default" className="width-100 mb-1 me-1">Default</Button>
                  <Button color="primary" className="width-100 mb-1 me-1">Primary</Button>
                  <Button color="info" className="width-100 mb-1 me-1">Info</Button>
                  <Button color="success" className="width-100 mb-1 me-1">Success</Button>
                  <Button color="warning" className="width-100 mb-1 me-1">Warning</Button>
                  <Button color="danger" className="width-100 mb-1 me-1">Danger</Button>
                  <Button color="gray" className="width-100 mb-1 me-1">Gray</Button>
                  <Button color="inverse" className="width-100 mb-1 me-1">Inverse</Button>
                </p>
              </div>
            </Widget>
          </Col>

          {/* Size variants */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Size <span className="fw-semi-bold">Variants</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Fancy larger or smaller buttons?
                  Four separate sizes available for all use cases:
                  from tiny 10px button to large one.
                </p>
                <p>
                  <Button color="default" size="lg" className="mb-1 me-1">Large button</Button>
                  <Button color="primary" className="mb-1 me-1">Default button</Button>
                  <Button color="info" size="sm" className="mb-1 me-1">Small button</Button>
                  <Button color="success" size="xs" className="mb-1 me-1">Tiny button</Button>
                </p>
              </div>
            </Widget>
          </Col>

          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5>Outline <span className="fw-semi-bold">Buttons</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini">
                  In need of a button, but not the hefty background colors they bring?
                  Use <code>outline</code> property to remove all
                  background images and colors on any button.
                </p>
                <p>
                  <Button outline color="default" className="width-100 mb-1 me-1">Default</Button>
                  <Button outline color="primary" className="width-100 mb-1 me-1">Primary</Button>
                  <Button outline color="info" className="width-100 mb-1 me-1">Info</Button>
                  <Button outline color="success" className="width-100 mb-1 me-1">Success</Button>
                  <Button outline color="warning" className="width-100 mb-1 me-1">Warning</Button>
                  <Button outline color="danger" className="width-100 mb-1 me-1">Danger</Button>
                  <Button outline color="gray" className="width-100 mb-1 me-1">Gray</Button>
                  <Button outline color="inverse" className="width-100 mb-1 me-1">Inverse</Button>
                </p>
              </div>
            </Widget>
          </Col>

          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5>Rounded <span className="fw-semi-bold">Buttons</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini">
                  Use any of the available button properties to quickly create a styled button.
                  Semantically distinguishable beauty. Use <code>.btn-rounded</code> or <code>.btn-rounded-f</code>.
                </p>
                <p>
                  <Button color="default" className="btn-rounded-f width-100 mb-1 me-1">Default</Button>
                  <Button color="primary" className="btn-rounded-f width-100 mb-1 me-1">Primary</Button>
                  <Button color="info" className="btn-rounded-f width-100 mb-1 me-1">Info</Button>
                  <Button color="success" className="btn-rounded-f width-100 mb-1 me-1">Success</Button>
                  <Button outline color="warning" className="btn-rounded width-100 mb-1 me-1">Warning</Button>
                  <Button outline color="danger" className="btn-rounded width-100 mb-1 me-1">Danger</Button>
                  <Button outline color="gray" className="btn-rounded width-100 mb-1 me-1">Gray</Button>
                  <Button outline color="inverse" className="btn-rounded width-100 mb-1 me-1">Inverse</Button>
                </p>
              </div>
            </Widget>
          </Col>

          {/* Block Buttons */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Block <span className="fw-semi-bold">Buttons</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Create block level buttons - those that span the full width
                  of a parent— by adding <code>block</code>
                  to <code>&lt;Button&gt;</code> component.
                  Great for menu & social buttons.
                </p>
                <div className="d-grid gap-2">
                  <Button color="info">Block Button</Button>
                  <Button color="default">Show Menu &nbsp;&nbsp;&nbsp;<i
                    className="fa fa-bars"
                  /></Button>
                  <Button color="primary"><i className="fa fa-facebook" />&nbsp;&nbsp;Login mit
                    Facebook</Button>
                  <Button color="warning">Are you sure?</Button>
                </div>
              </div>
            </Widget>
          </Col>

          {/* Disabled Buttons */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Disabled <span className="fw-semi-bold">Buttons</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Make buttons look unclickable by fading them back 50%.
                  Add the <code>disabled</code> to <code>&lt;Button&gt;</code> component.
                </p>
                <p>
                  <Button color="primary" disabled className="me-1">Primary button</Button>
                  <Button color="default" disabled className="me-1">Button</Button>
                </p>
                <p>
                  <Button color="success" size="sm" disabled className="me-1">Primary Link</Button>
                  <Button color="default" size="sm" disabled className="me-1">Link</Button>
                </p>
              </div>
            </Widget>
          </Col>

          {/* Buttons Groups */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Button <span className="fw-semi-bold">Groups</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Group a series of buttons together on a single
                  line with the button group.
                  Add on optional JavaScript radio and checkbox
                  style behavior with Bootstrap buttons plugin.
                </p>
                <ButtonGroup className="mb-1">
                  <Button color="default">Block left</Button>
                  <Button color="default">Block Middle</Button>
                  <Button color="default">Block Right</Button>
                </ButtonGroup>

                <ButtonToolbar className="mb-1">
                  <ButtonGroup className="me-2">
                    <Button color="default" className="ms-0">1</Button>
                    <Button color="default">2</Button>
                    <Button color="default">3</Button>
                    <Button color="default">4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2">
                    <Button color="default">5</Button>
                    <Button color="default">6</Button>
                    <Button color="default">7</Button>
                  </ButtonGroup>
                  <ButtonGroup className="me-2">
                    <Button color="default">8</Button>
                  </ButtonGroup>
                </ButtonToolbar>

              </div>
            </Widget>
          </Col>

          {/* Button Dropdowns */}
          {/* todo: check after reactstrap update */}
          <Col md={6} sm={12} xs={12}>
            <Widget
              title={<h5> Button <span className="fw-semi-bold">Dropdowns</span>
              </h5>} close collapse
            >
              <div>
                <p className="fs-mini text-muted">
                  Add dropdown menus to nearly anything with
                  this simple plugin, including the buttons,
                  navbar, tabs, and pills.
                  Both solid & segmented dropdown options available.
                </p>

                <div className="mb-1">
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpenOne} toggle={this.toggleOne}
                    className="me-1"
                  >
                    <DropdownToggle caret color="danger">
                      &nbsp; One &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>

                </div>
                <div className="mb-1">
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpenThree} toggle={this.toggleThree} className="me-1"
                  >
                    <DropdownToggle color="primary" caret className="dropdown-toggle-split">
                      Button with dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Widget
              title={<h6> Button <span className="fw-semi-bold">Options</span>
              </h6>} close collapse
            >
              <Row>
                {/* Checkboxes */}
                <Col xs={12}>
                  <h4> Button <span className="fw-semi-bold">Checkboxes</span></h4>
                  <p className="fs-mini text-muted">
                    Do more with buttons. Control button states
                    or create groups of buttons for more components like
                    toolbars.
                    Use <code>ButtonGroup</code> to a group
                    of checkboxes for checkbox style toggling on
                    btn-group.
                  </p>
                  <div className="mb-3">
                    <ButtonGroup>
                      <Button
                        color="default" onClick={() => this.onCheckboxBtnClickOne(1)}
                        active={this.state.cSelectedOne.includes(1)}
                      >Left way</Button>
                      <Button
                        color="default" onClick={() => this.onCheckboxBtnClickOne(2)}
                        active={this.state.cSelectedOne.includes(2)}
                      >Middle way</Button>
                      <Button
                        color="default" onClick={() => this.onCheckboxBtnClickOne(3)}
                        active={this.state.cSelectedOne.includes(3)}
                      >Right way</Button>
                    </ButtonGroup>
                  </div>
                  <div className="mb-3">
                    <ButtonGroup>
                      <Button
                        size="sm" color="default" onClick={() => this.onCheckboxBtnClickTwo(1)}
                        active={this.state.cSelectedTwo.includes(1)}
                      >Left way</Button>
                      <Button
                        size="sm" color="default" onClick={() => this.onCheckboxBtnClickTwo(2)}
                        active={this.state.cSelectedTwo.includes(2)}
                      >Middle way</Button>
                      <Button
                        size="sm" color="default" onClick={() => this.onCheckboxBtnClickTwo(3)}
                        active={this.state.cSelectedTwo.includes(3)}
                      >Right way</Button>
                    </ButtonGroup>
                  </div>

                </Col>

                {/* Radios */}
                <Col xs={12}>
                  <h4> Button <span className="fw-semi-bold">Radios</span></h4>
                  <p className="fs-mini text-muted">
                    Do more with buttons. Control button states
                    or create groups of buttons for more components like toolbars.
                    Use <code>ButtonGroup</code> to a group of radio
                    inputs for radio style toggling on btn-group.
                  </p>
                  <div className="mb-3">
                    <ButtonGroup>
                      <Button
                        color="default" onClick={() => this.onRadioBtnClickOne(1)}
                        active={this.state.rSelectedOne === 1}
                      >Left way</Button>
                      <Button
                        color="default" onClick={() => this.onRadioBtnClickOne(2)}
                        active={this.state.rSelectedOne === 2}
                      >Middle way</Button>
                      <Button
                        color="default" onClick={() => this.onRadioBtnClickOne(3)}
                        active={this.state.rSelectedOne === 3}
                      >Right way</Button>
                    </ButtonGroup>
                  </div>
                  <div className="mb-3">
                    <ButtonGroup>
                      <Button
                        size="sm" color="default" onClick={() => this.onRadioBtnClickTwo(1)}
                        active={this.state.rSelectedTwo === 1}
                      >Left way</Button>
                      <Button
                        size="sm" color="default" onClick={() => this.onRadioBtnClickTwo(2)}
                        active={this.state.rSelectedTwo === 2}
                      >Middle way</Button>
                      <Button
                        size="sm" color="default" onClick={() => this.onRadioBtnClickTwo(3)}
                        active={this.state.rSelectedTwo === 3}
                      >Right way</Button>
                    </ButtonGroup>
                  </div>
                </Col>

                {/* Buttons with Icons */}
                <Col xs={12}>
                  <h4> Use with <span className="fw-semi-bold">Icons</span></h4>
                  <p className="fs-mini text-muted">
                    Fontawesome and Glyph- icons may be used in buttons,
                    button groups for a toolbar, navigation, or prepended form inputs.
                    Let your buttons shine!
                  </p>
                  <div className="mb-3">
                    <Button color="default" className="width-100 me-1">
                      <i className="glyphicon glyphicon-tree-conifer text-success me-1 mb-1" />
                      Forest
                    </Button>
                    <Button color="default" className="width-100 me-1">
                      <i className="fa fa-check text-danger me-1 mb-1" />
                      Submit
                    </Button>
                    <Button color="default" className="width-100 me-1">
                      <i className="fa fa-facebook text-primary me-1 mb-1" />
                      Login
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button color="inverse" className="width-100 me-1">
                      <i className="fa fa-exclamation text-warning me-1 mb-1" />
                      Error
                    </Button>
                    <Button color="inverse" className="width-100 me-1">
                      <i className="glyphicon glyphicon-globe text-info me-1 mb-1" />
                      <span className="text-info">Globe</span>
                    </Button>
                    <Button color="inverse" className="width-100 me-1">
                      <span className="circle bg-white me-1">
                        <i className="fa fa-map-marker text-gray" />
                      </span>
                      Map
                    </Button>
                  </div>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>

      </div>
    );
  }

}

export default Buttons;
