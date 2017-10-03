import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Alert,
  Button,
  Col,
  Row,
  Badge,
  Popover,
  PopoverTitle,
  PopoverContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Form,
  Progress,
} from 'reactstrap';

import s from './Components.scss';

import Widget from '../../../components/Widget';
import TooltipItem from '../../../components/TooltipItem/TooltipItem';

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.closeAlert = this.closeAlert.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.togglePopoverOne = this.togglePopoverOne.bind(this);
    this.togglePopoverTwo = this.togglePopoverTwo.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      alerts: [{
        id: 'al-1',
        type: 'success',
        msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
        visible: true,
      }, {
        id: 'al-2',
        type: 'info',
        msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
        visible: true,
      }, {
        id: 'al-3',
        type: 'warning',
        msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
        visible: true,
      }, {
        id: 'al-4',
        type: 'danger',
        msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
        visible: true,
      }],
      tooltips: [{
        id: 'tol-1', placement: 'left', text: 'On left',
      }, {
        id: 'tol-2', placement: 'top', text: 'On top',
      }, {
        id: 'tol-3', placement: 'bottom', text: 'On bottom',
      }, {
        id: 'tol-4', placement: 'right', text: 'On right',
      }],
      popoverOpenOne: false,
      popoverOpenTwo: false,
      modal: false,
    };
  }

  togglePopoverOne() {
    this.setState({
      popoverOpenOne: !this.state.popoverOpenOne,
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  togglePopoverTwo() {
    this.setState({
      popoverOpenTwo: !this.state.popoverOpenTwo,
    });
  }

  closeAlert(index) {
    this.state.alerts.splice(index, 1);
    this.setState({ alerts: this.state.alerts });
  }

  addAlert() {
    this.state.alerts.push({ type: 'warning', msg: 'Another alert!', visible: true });
    this.setState({ alerts: this.state.alerts });
  }

  /* eslint-disable react/no-danger */
  render() {
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">YOU ARE HERE</li>
          <li className="active breadcrumb-item">UI Components</li>
        </ol>

        <h1 className="page-title">Components - <span className="fw-semi-bold">Bootstrap</span></h1>

        {/* Alerts*/}
        <Row>
          <Col md={12}>
            <Widget
              title={<h6> Alert <span className="fw-semi-bold">Messages</span></h6>}
              close settings refresh
            >
              <div className="mb-5">
                <h3>Small <span className="fw-semi-bold">Elements</span></h3>
                <p className="mb-lg">Gaining direct user attention on some matter. Add dismiss
                  functionality to
                  all
                  alert messages with this plugin.</p>
                <div>
                  {this.state.alerts.map((alert, index) => <Alert
                    key={alert.id} isOpen={alert.visible} toggle={() => this.closeAlert(index)}
                    color={alert.type}
                  >
                    <span dangerouslySetInnerHTML={{ __html: alert.msg }} />
                  </Alert>)}
                </div>
                <Button color="secondary" size="sm" className="float-right" onClick={this.addAlert}>Add
                  Alert</Button>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          {/* Label & Badge*/}
          <Col md={6} xs={12}>
            <Widget
              title={<h6>
                Labels & Badge <span className="fw-semi-bold">Options</span>
              </h6>} close settings refresh
            >
              <div>
                <h3>Label <span className="fw-semi-bold">Colors</span></h3>
                <p>
                  Just use <code>&lt;Badge&gt;</code>
                  component to create inline badge element.
                </p>
                <div>
                  <Badge className="mr-xs">Default</Badge>
                  <Badge color="primary" className="mr-xs">Primary</Badge>
                  <Badge color="success" className="mr-xs">Success</Badge>
                  <Badge color="info" className="mr-xs">Info</Badge>
                  <Badge color="warning" className="mr-xs">Warning</Badge>
                  <Badge color="danger" className="mr-xs">Danger</Badge>
                </div>
                <p />
                <h3>Label-pill <span className="fw-semi-bold">Variations</span></h3>
                <p>
                  Same as badges, just use <code>&lt;Badge pill&gt;</code>
                  component to create inline badge-pill.
                </p>
                <p>
                  <Button color="primary">
                    Notifications &nbsp;&nbsp; <Badge
                      color="white" pill
                      className="text-primary"
                    >3</Badge>
                  </Button>{' '}
                  <Badge color="danger" pill>01</Badge>{' '}
                  <Badge color="warning" pill>20</Badge>{' '}
                  <Badge color="success" pill>31</Badge>{' '}
                  <Badge color="info" pill>18</Badge>{' '}
                  <Badge color="primary" pill>41</Badge>{' '}
                </p>
              </div>
            </Widget>
          </Col>

          {/* Tooltip, Popover, Modal*/}
          <Col md={6} xs={12}>
            <Widget
              title={<h6>
                Tooltips & Popover <span className="fw-semi-bold">Variations</span>
              </h6>} settings close refresh
            >
              <div>
                {/* Tooltip*/}
                <div className="mb-5">
                  <h3>Position <span className="fw-semi-bold">Tooltips</span></h3>
                  <p>Stable four position options available:</p>
                  <div>
                    {this.state.tooltips.map(tooltip => <TooltipItem
                      key={tooltip.id} item={tooltip}
                      id={tooltip.id}
                    />)}
                  </div>
                </div>
                {/* Popover */}
                {/* todo: check popover after update reactstrap
                (changed class title to header, content to body */}
                <div className="mb-5">
                  <h3>Popover <span className="fw-semi-bold">Options</span></h3>
                  <p>Placing help text where needed:</p>
                  <div>
                    <Button id="Popover1" onClick={this.togglePopoverOne}>
                      Popover on left
                    </Button>
                    <Popover
                      placement="left" isOpen={this.state.popoverOpenOne} target="Popover1"
                      toggle={this.togglePopoverOne}
                    >
                      <PopoverContent>
                        {'And here\'s some amazing content. It\'s very engaging. Right?'}
                      </PopoverContent>
                    </Popover>

                    <Button
                      className="ml-xs" id="Popover2" color="info"
                      onClick={this.togglePopoverTwo}
                    >
                      Titled Popover
                    </Button>
                    <Popover
                      placement="top" isOpen={this.state.popoverOpenTwo} target="Popover2"
                      toggle={this.togglePopoverTwo}
                    >
                      <PopoverTitle>Titled Popover</PopoverTitle>
                      <PopoverContent>
                        {'And here\'s some amazing content. It\'s very engaging. Right?'}
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                {/* Modal*/}
                <div>
                  <h3><span className="fw-semi-bold">Bootstrap</span> Modals</h3>
                  <p>Modals are streamlined, but flexible, dialog prompts with the minimum
                    required functionality and smart defaults.</p>
                  <Button color="gray" onClick={this.toggleModal}>Launch demo modal</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader>
                      <button
                        type="button" onClick={this.toggleModal} className="close"
                        aria-label="close"
                      >
                        <span aria-hidden="true">{String.fromCharCode(215)}</span>
                      </button>
                      <h4
                        className="text-center fw-bold"
                        id="myModalLabel18"
                      >One more step</h4>
                      <p className="text-center fs-mini text-muted mt-sm">
                        We need a bit of your detailed information to proceed.
                        US ticketing system requires us to process and check
                        your personal infromation before we can go.
                      </p>
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <Row>
                          <Col md={8} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="name" name="name" className="input-no-border"
                                placeholder="Name"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="middle-name" name="middle-name"
                                className="input-no-border"
                                placeholder="Middle Name"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="address" name="address" className="input-no-border"
                                placeholder="Address"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="city" name="city" className="input-no-border"
                                placeholder="City"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="country" name="country" className="input-no-border"
                                placeholder="Country"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4} xs={12}>
                            <FormGroup>
                              <Input
                                type="text" id="zip" name="zip" className="input-no-border"
                                placeholder="Zip"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="gray" onClick={this.toggleModal}>Close</Button>{' '}
                      <Button color="success" onClick={this.toggleModal}>Save changes</Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>
        {/* Progress Bars*/}
        <Row>
          <Col md={12}>
            <Widget
              title={<h6> Progress <span className="fw-semi-bold">Bars</span>
              </h6>} close refresh settings
            >
              <div>
                <Row>
                  <Col md={4} xs={12}>
                    <h3>Progress Bar <span className="fw-semi-bold">Colors</span></h3>
                    <p className="fs-mini text-muted">Easily perceptible colored options for
                      Bootstrap progress
                      bars:</p>
                    <Row>
                      <Col md={{ size: 10 }} xs={12}>
                        <Progress color="danger" value="75" className="progress-sm mb-xs" />
                        <Progress color="warning" value="60" className="progress-sm mb-xs" />
                        <Progress color="success" value="45" className="progress-sm mb-xs" />
                        <Progress color="primary" value="30" className="progress-sm mb-xs" />
                      </Col>
                    </Row>
                  </Col>

                  <Col md={4} xs={12}>
                    <h3>Progress Bar <span className="fw-semi-bold">Sizes</span></h3>
                    <p className="fs-mini text-muted">Three different sizes for all of possible use
                      cases:</p>
                    <Row>
                      <Col md={{ size: 10 }} xs={12}>
                        <Progress color="gray" value="60" className="progress-xs mb-xs" />
                        <Progress color="warning" value="60" className="progress-sm mb-xs" />
                        <Progress color="info" value="33" className="mb-xs" />
                      </Col>
                    </Row>
                  </Col>

                  <Col md={4} xs={12}>
                    <h3>More <span className="fw-semi-bold">Options</span></h3>
                    <p className="text-muted fs-mini">Animated, stripped and progress bars
                      containing text:</p>
                    <Row>
                      <Col md={{ size: 10 }} xs={12}>
                        <Progress animated color="info" value="51" className="mb-xs">51%</Progress>
                        <Progress
                          animated color="gray-light" value="51"
                          className="progress-sm mb-xs"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }

}

export default withStyles(s)(Components);
