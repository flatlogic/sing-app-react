import React from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  InputGroup,
  InputGroupAddon,
  ButtonGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Select from 'react-select';
import Datetime from 'react-datetime';
import ColorPicker from 'rc-color-picker';
import MaskedInput from 'react-maskedinput';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import Dropzone from 'react-dropzone';
import TextareaAutosize from 'react-autosize-textarea';
import ReactMde, { ReactMdeCommands } from 'react-mde';


import Widget from '../../../components/Widget';

import s from './Elements.module.scss';

import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeTooltip = createSliderWithTooltip(Range);

class Elements extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dropDownValue: 'Another type',
      simpleSelectDropdownValue: 'Option one',
      greenSelectDropdownValue: 'Hichi',
      orangeSelectDropdownValue: 'Shi',
      redSelectDropdownValue: 'Ichi',
      bigSelectDropdownValue: 'Fourth Item',
      editorState: EditorState.createEmpty(),
      selectGroupData: [
        {
          label: 'NFC EAST',
          options: [
            { value: 'Dallas-Cowboys', label: 'Dallas Cowboys', rating: 'safe' },
            { value: 'New-York-Giants', label: 'New York Giants', rating: 'good' },
            { value: 'Philadelphia-Eagles', label: 'Philadelphia Eagles', rating: 'wild' },
            { value: 'Washington-Redskins', label: 'Washington Redskins', rating: 'crazy' },
          ],
        },
        {
          label: 'NFC NORTH',
          options: [
            { value: 'Chicago-Bears', label: 'Chicago Bears', rating: 'safe' },
            { value: 'Detroit-Lions', label: 'Detroit Lions', rating: 'good' },
            { value: 'Green-Bay-Packers', label: 'Green Bay Packers', rating: 'wild' },
            { value: 'Minnesota-Vikings', label: 'Minnesota Vikings', rating: 'crazy' },
          ],
        },
        {
          label: 'NFC SOUTH',
          options: [
            { value: 'Atlanta-Falcons', label: 'Atlanta Falcons', rating: 'safe' },
            { value: 'Carolina-Panthers', label: 'Carolina Panthers', rating: 'good' },
            { value: 'New-Orleans-Saints', label: 'New Orleans Saints', rating: 'wild' },
            { value: 'Tampa-Bay-Buccaneers', label: 'Tampa Bay Buccaneers', rating: 'crazy' },
          ],
        },
      ],      
      selectDefaultData: [
        { value: 'Magellanic', label: 'Large Magellanic Cloud', rating: 'safe' },
        { value: 'Andromeda', label: 'Andromeda Galaxy', rating: 'good' },
        { value: 'Sextans', label: 'Sextans A', rating: 'wild' },
      ],
      groupSelectVal: '',
      colorpickerValue: '#ff0000',
      colorpickerInputValue: '#ff0000',
      isDatePickerOpen: false,
      isTimePickerOpen: false,
      dropFiles: [],
      inputFiles: [],
      imageFiles: [],
      reactMdeValue: {
        text: '',
        selection: null },
    };
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
  }

  onDrop(files) {
    this.setState({
      dropFiles: files,
    });
  }

  onChangeInputFiles(e) {
    const files = [];
    let i = 0;
    for (i; i < e.target.files.length; i += 1) {
      files.push(e.target.files[i]);
    }
    this.setState({
      inputFiles: files,
    });
  }

  onChangeInputImage(e) {
    const files = [];
    const reader = new FileReader();
    files.push(e.target.files[0]);
    reader.onloadend = () => {
      files[0].preview = reader.result;
      files[0].toUpload = true;
      this.setState({
        imageFiles: files,
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  handleValueChange = (value) => {
    this.setState({ reactMdeValue: value });
  }

  changeValueDropdown = (e) => {
    this.setState({ dropDownValue: e.currentTarget.textContent });
  }

  changeSelectDropdownGreen = (e) => {
    this.setState({ greenSelectDropdownValue: e.currentTarget.textContent });
  }

  changeSelectDropdownOrange = (e) => {
    this.setState({ orangeSelectDropdownValue: e.currentTarget.textContent });
  }

  changeSelectDropdownRed = (e) => {
    this.setState({ redSelectDropdownValue: e.currentTarget.textContent });
  }

  changeSelectDropdownBig = (e) => {
    this.setState({ bigSelectDropdownValue: e.currentTarget.textContent });
  }

  changeSelectDropdownSimple = (e) => {
    this.setState({ simpleSelectDropdownValue: e.currentTarget.textContent });
  }

  changeColorValue = (colors) => {
    this.setState({
      colorpickerValue: colors.color,
      colorpickerInputValue: colors.color,
    });
  }

  changeColorInput = (e) => {
    if (e.target.value.length > 3 && e.target.value.length < 8) {
      this.setState({
        colorpickerInputValue: e.target.value,
        colorpickerValue: e.target.value,
      });
    }
    if (e.target.value.length <= 3) {
      this.setState({
        colorpickerInputValue: e.target.value,
      });
    }
  }

  removeInputFiles = () => {
    this.setState({
      inputFiles: [],
    });
  }

  valueFormatter = (v) => {
    return `${v}`;
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Form - <span className="fw-semi-bold">Inputs & Controls</span>
        </h1>

        <Row>
          {/* Horizontal form */}
          <Col lg={6} md={12}>
            <Widget title={<h6> Inputs </h6>} settings refresh close>
              <FormGroup>
                <Form>
                  <legend><strong>Horizontal</strong> form</legend>
                  <FormGroup row>
                    <Label for="normal-field" md={4} className="text-md-right">
                      Normal field
                    </Label>
                    <Col md={7}>
                      <Input type="text" id="normal-field" placeholder="May have placeholder" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="hint-field" md={4} className="text-md-right">
                      Label hint
                      <span className="help-block">Some help text</span>
                    </Label>
                    <Col md={7}>
                      <Input type="text" name="password" id="hint-field" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} for="tooltip-enabled" className="text-md-right">Tooltip
                      enabled</Label>
                    <Col md={7}>
                      <Input
                        type="text" id="tooltip-enabled"
                        placeholder="Hover over me.."
                      />
                      <UncontrolledTooltip placement="top" target="tooltip-enabled">
                        Some explanation text here
                      </UncontrolledTooltip>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="disabled-input">Disabled
                      input</Label>
                    <Col md={7}>
                      <Input
                        type="text" id="disabled-input"
                        disabled="disabled" value="Default value"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="max-length">
                      Max length</Label>
                    <Col md={7}>
                      <Input
                        type="text" id="max-length" maxLength="3"
                        placeholder="Max length 3 characters"
                      />
                      <UncontrolledTooltip placement="top" target="max-length">
                        You cannot write more than 3
                      </UncontrolledTooltip>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="prepended-input">
                      Prepended input</Label>
                    <Col md={7}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-user" /></span></InputGroupAddon>
                        <Input id="prepended-input" type="test" bsSize="16" placeholder="Username" />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="password-field">
                      Password
                    </Label>
                    <Col md={7}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-lock" /></span></InputGroupAddon>
                        <Input
                          id="password-field" type="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="appended-input">
                      Appended input
                    </Label>
                    <Col md={7}>
                      <InputGroup>
                        <Input id="appended-input" bsSize="16" type="text" />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="combined-input">
                      Combined
                    </Label>
                    <Col md={7}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input id="combined-input" bsSize="16" type="text" />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={4} className="text-md-right" for="transparent-input">
                      Append Transparent
                    </Label>
                    <Col md={7}>
                      <InputGroup className="input-group-transparent">
                        <Input id="transparent-input" type="text" />
                        <InputGroupAddon addonType="append"><span className="input-group-text"><i className="fa fa-camera" /></span></InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row className="form-action">
                    <Label md={4} />
                    <Col md={7}>
                      <Button color="primary" type="submit" className="mr-xs">Save Changes</Button>
                      <Button color="inverse">Cancel</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </FormGroup>
            </Widget>
          </Col>

          {/* Default form */}
          <Col lg={6} md={12}>
            <Widget title={<h6> Prepended and appended inputs </h6>} settings refresh close>
              <FormGroup>
                <Form>
                  <legend><strong>Default</strong> Form</legend>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label for="search-input1">
                          Search type input
                        </Label>
                        <InputGroup>
                          <Input type="text" id="search-input1" />
                          <InputGroupAddon addonType="append">
                            <Button color="default">Search</Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label for="bar">
                          Whole bar appended
                        </Label>
                        <InputGroup>
                          <Input type="text" id="bar" />
                          <InputGroupAddon addonType="append">
                            <ButtonGroup>
                              <Button color="danger"><i className="fa fa-pencil" /></Button>
                              <Button color="warning"><i className="fa fa-plus" /></Button>
                              <Button color="success"><i className="fa fa-refresh" /></Button>
                            </ButtonGroup>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label for="dropdown-appended">
                          Actions dropdown
                        </Label>
                        <InputGroup>
                          <Input type="text" id="dropdown-appended" />
                          <InputGroupAddon addonType="append">
                            <UncontrolledButtonDropdown>
                              <DropdownToggle caret color="success">
                                Action
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem>Something else here</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Separated link</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledButtonDropdown>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label for="segmented-dropdown">
                          Segmented dropdown
                        </Label>
                        <InputGroup>
                          <Input type="text" id="segmented-dropdown" />
                          <InputGroupAddon addonType="append">
                            <UncontrolledButtonDropdown>
                              <Button color="warning">Action</Button>
                              <DropdownToggle
                                caret color="warning"
                                className="dropdown-toggle-split"
                              />
                              <DropdownMenu>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem>Something else here</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Separated link</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledButtonDropdown>
                          </InputGroupAddon>
                        </InputGroup>
                        <span className="help-block">Anything can be appended to the right</span>
                      </FormGroup>

                      <FormGroup>
                        <Label for="type-dropdown-appended">
                          Types dropdown
                        </Label>
                        <InputGroup>
                          <Input type="text" id="type-dropdown-appended" />
                          <InputGroupAddon addonType="append">
                            <UncontrolledButtonDropdown>
                              <DropdownToggle
                                caret color="primary"
                                className="dropdown-toggle-split"
                              >
                                {this.state.dropDownValue}
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem onClick={this.changeValueDropdown}>
                                  Another type
                                </DropdownItem>
                                <DropdownItem onClick={this.changeValueDropdown}>
                                  Type one
                                </DropdownItem>
                                <DropdownItem onClick={this.changeValueDropdown}>
                                  Next type
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledButtonDropdown>
                          </InputGroupAddon>
                        </InputGroup>
                        <p className="help-block">
                          You can select some type of a field just right in the place.
                        </p>
                      </FormGroup>

                      <FormGroup>
                        <Label for="no-borders-input">
                          Transparent input
                        </Label>
                        <Input
                          type="text" placeholder="Search Dashboard" id="no-borders-input"
                          className="input-no-border bg-gray-lighter"
                        />
                        <p className="help-block">
                          With <code>.bg-gray-lighter</code>. White by default.
                        </p>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup className="form-action">
                    <Button color="inverse" type="submit" className="mr-xs">
                      Save Changes
                    </Button>
                    <Button color="default">Cancel</Button>
                  </FormGroup>
                </Form>
              </FormGroup>
            </Widget>
          </Col>
        </Row>

        <Row>

          <Col lg={8} md={12}>
            <Widget
              title={<h6> Form <span className="fw-semi-bold">Options</span></h6>}
              settingsInverse refresh close
            >
              <Form>
                <legend>Control sizing</legend>
                <p>
                  Set input heights using parameters like <code>size=&apos;lg&apos;</code> and
                  <code>size=&apos;sm&apos;</code>.
                  Also works with <code>type=&apos;search&apos;</code> inputs, input groups and
                  selects.
                </p>
                <br />
                <FormGroup>
                  <Input type="text" placeholder='bsSize="lg"' bsSize="lg" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="default input" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder='bsSize="sm"' bsSize="sm" />
                </FormGroup>
              </Form>
            </Widget>
          </Col>


          <Col lg={4} md={12}>
            <Widget
              title={<h6> Form <span className="fw-semi-bold">Options</span></h6>}
              settingsInverse refresh close
            >
              <Form>
                <legend> Input Groups</legend>
                <p>
                  Different colors & sizes for any elements including input groups. Elements may be
                  easily styled with classes like <code>.bg-primary</code> or
                  <code>.bg-transparent</code>
                </p>
                <br />
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" className="bg-transparent">
                      <span className="input-group-text"><i className="fa fa-github-alt" /></span>
                    </InputGroupAddon>
                    <Input type="text" placeholder="First Name" bsSize="16" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">
                      <span className="input-group-text"><i className="fa fa-bars" /></span>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username" bsSize="16" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup size="sm">
                    <Input type="text" placeholder="City" bsSize="16" />
                    <InputGroupAddon addonType="prepend">
                      <span className="bg-danger text-white input-group-text"><i className="fa fa-code-fork" /></span>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Widget>
          </Col>
        </Row>

        <Row>

          <Col lg="6" md={12}>
            <Widget title={<h6><i className="fa fa-font" />Textareas</h6>} settings refresh close>
              <Form>
                <legend>Small form</legend>
                <FormGroup row>
                  <Label md={3} className="text-md-right" for="default-textarea">Default
                    textarea</Label>
                  <Col md={9}>
                    <Input rows="4" type="textarea" name="text" id="default-textarea" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={3} className="text-md-right" for="elastic-textarea">Auto-growing
                    textarea</Label>
                  <Col md={9}>
                    <TextareaAutosize
                      rows={3} id="elastic-textarea"
                      placeholder="Try to add few new lines.."
                      className={`form-control ${s.autogrow} transition-height`}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={3} className="text-md-right">
                    Wysiwyg
                    <span className="help-block">
                      With bottom toolbar appended
                    </span>
                  </Label>
                  <Col md={9}>
                    <Editor
                      wrapperClassName={s.wysiwygWrapper}
                      editorClassName={s.wysiwygEditor}
                      toolbarClassName={s.wysiwygToolbar}
                    />
                    <div className="text-md-right mt-xs">
                      <Button color="danger" className="mr-xs">Save</Button>
                      <Button color="default">Clear</Button>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={3} className="text-md-right" for="markdown-editor">
                    Markdown Editor
                  </Label>
                  <Col md={9}>

                    <ReactMde
                      textAreaProps={{
                        id: 'ta1',
                        name: 'ta1',
                      }}
                      value={this.state.reactMdeValue}
                      onChange={this.handleValueChange}
                      commands={ReactMdeCommands.getDefaultCommands()}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </Widget>
          </Col>


          <Col lg="6" md={12}>
            <Widget
              title={<h6><i className="fa fa-list-alt" /> Selects </h6>} refresh close
              settings
            >
              <Form className="form-label-left">
                <legend>Default form with labels on left</legend>
                <FormGroup row>
                  <Label md="4" for="default-select">Default select</Label>
                  <Col md="6" className={s.select2}>
                    <Select 
                      className="selectCustomization"
                      options={this.state.selectDefaultData}
                      defaultValue={this.state.selectDefaultData[1]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" for="grouped-select">Select with search & groups</Label>
                  <Col md="6" className={s.select2}>
                    <Select 
                      className="selectCustomization"
                      options={this.state.selectGroupData}
                    />
                  </Col>
                </FormGroup>
              </Form>

              <Form>
                <legend>Dropdown based colored selects</legend>
                <FormGroup row>
                  <Label md="4" for="simple-select">Simple select</Label>
                  <Col md="8">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        caret color="default"
                        className="dropdown-toggle-split mr-xs"
                      >
                        {this.state.simpleSelectDropdownValue}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.changeSelectDropdownSimple}>
                          Option One
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownSimple}>
                          Option Two
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownSimple}>
                          Option Three
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <span className="help-block">Auto size</span>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md="4" for="simple-red-select">
                    Colored ones
                    <span className="help-block">A bit of Japanese</span>
                  </Label>
                  <Col md="8">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        caret color="danger"
                        className="dropdown-toggle-split mr-xs"
                      >
                        {this.state.redSelectDropdownValue}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.changeSelectDropdownRed}>
                          Ichi
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownRed}>
                          Ni
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownRed}>
                          San
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        caret color="warning"
                        className="dropdown-toggle-split mr-xs"
                      >
                        {this.state.orangeSelectDropdownValue}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.changeSelectDropdownOrange}>
                          Shi
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownOrange}>
                          Go
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownOrange}>
                          Roku
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        caret color="success"
                        className="dropdown-toggle-split"
                      >
                        {this.state.greenSelectDropdownValue}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.changeSelectDropdownGreen}>
                          Hichi
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownGreen}>
                          Hachi
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownGreen}>
                          Ku
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownGreen}>
                          Ju
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md="4" for="simple-big-select">
                    Big One
                    <span className="help-block">
                    Size can be controlled with <code>size=&apos;lg&apos;</code> & <code>size=&apos;
                      sm&apos;</code>
                    </span>
                  </Label>
                  <Col md="8">
                    <UncontrolledButtonDropdown id="simple-big-select">
                      <DropdownToggle
                        caret color="default" size="lg"
                        className="dropdown-toggle-split"
                      >
                        <span className="mr-5"> {this.state.bigSelectDropdownValue}</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.changeSelectDropdownBig}>
                          Fourth Item
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownBig}>
                          Fifth Item
                        </DropdownItem>
                        <DropdownItem onClick={this.changeSelectDropdownBig}>
                          Sixth Item
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </FormGroup>
              </Form>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col md="12">
            <Widget
              title={<h6> Checkbox <strong>Controls</strong></h6>} settingsInverse refresh
              close
            >
              <Row>
                <Col lg="4">
                  <Form>

                    <legend>Basic</legend>
                    <p>
                      Supports bootstrap brand colors: <code>.abc-checkbox-primary</code>,
                      <code>.abc-checkbox-info</code>
                      etc.
                      Pure <abbr title="Cascading Style Sheet">css</abbr> solution with no
                      javascript.
                      Let your checkboxes shine!
                    </p>

                    <FormGroup className="checkbox abc-checkbox" check>
                      <Input id="checkbox1" type="checkbox" />{' '}
                      <Label for="checkbox1" check>
                        Default
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-primary" check>
                      <Input id="checkbox2" type="checkbox" defaultChecked />{' '}
                      <Label for="checkbox2" check>
                        Primary
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-success" check>
                      <Input id="checkbox3" type="checkbox" />{' '}
                      <Label for="checkbox3" check>
                        Success
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-info" check>
                      <Input id="checkbox4" type="checkbox" defaultChecked />{' '}
                      <Label for="checkbox4" check>
                        Info
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-warning" check>
                      <Input id="checkbox5" type="checkbox" defaultChecked />{' '}
                      <Label for="checkbox5" check>
                        Warning
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-danger" check>
                      <Input id="checkbox6" type="checkbox" defaultChecked />{' '}
                      <Label for="checkbox6" check>
                        Check me out
                      </Label>
                    </FormGroup>

                  </Form>

                </Col>

                <Col lg="4">
                  <Form>
                    <legend>Circled</legend>
                    <p>
                      <code>.abc-checkbox-circle</code> for roundness. No more sad controls
                      controls.
                      Check out this brand-new rounded checkboxes!
                    </p>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-circle" check>
                      <Input id="checkbox7" type="checkbox" />{' '}
                      <Label for="checkbox7" check>
                        Simple Rounded
                      </Label>
                    </FormGroup>
                    <FormGroup
                      className="checkbox abc-checkbox abc-checkbox-info abc-checkbox-circle" check
                    >
                      <Input id="checkbox8" type="checkbox" defaultChecked />{' '}
                      <Label for="checkbox8" check>
                        Me too
                      </Label>
                    </FormGroup>
                  </Form>
                </Col>

                <Col lg="4">
                  <Form>
                    <legend>Disabled</legend>
                    <p>
                      Disabled state also supported. Full stack checkbox functionality.
                    </p>
                    <FormGroup className="checkbox abc-checkbox" check>
                      <Input id="checkbox9" type="checkbox" disabled />{' '}
                      <Label for="checkbox9" check>
                        Can&apos;t check this
                      </Label>
                    </FormGroup>
                    <FormGroup className="checkbox abc-checkbox abc-checkbox-success" check>
                      <Input id="checkbox10" type="checkbox" disabled defaultChecked />{' '}
                      <Label for="checkbox10" check>
                        This too
                      </Label>
                    </FormGroup>
                    <FormGroup
                      className="checkbox abc-checkbox abc-checkbox-warning abc-checkbox-circle"
                      check
                    >
                      <Input id="checkbox11" type="checkbox" disabled defaultChecked />{' '}
                      <Label for="checkbox11" check>
                        And this
                      </Label>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <p className="fs-mini">Built with <a
                href="https://github.com/flatlogic/awesome-bootstrap-checkbox"
                rel="noopener noreferrer" target="_blank"
              >awesome-bootstrap-checkbox</a>.
              </p>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col md="12">
            <Widget title={<h6> Radio <strong>Controls</strong></h6>} close refresh settingsInverse>
              <Form>
                <Row>
                  <Col lg="4">
                    <legend>Basic</legend>
                    <p>
                      Supports bootstrap brand colors: <code>.abc-radio-primary</code>, <code>.abc-radio-danger</code>
                      etc.
                      Pure css solution with no javascript. Let your radios shine!
                    </p>
                    <Row>
                      <Col md="6">
                        <FormGroup className="radio abc-radio">
                          <Input
                            type="radio" name="radio1" id="radio1" value="option1"
                            defaultChecked
                          />
                          <Label for="radio1">Small</Label>
                        </FormGroup>
                        <FormGroup className="radio abc-radio">
                          <Input type="radio" id="radio2" name="radio1" value="option2" />
                          <Label for="radio2">Big</Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="radio abc-radio abc-radio-danger">
                          <Input type="radio" id="radio3" value="option1" name="radio2" />
                          <Label for="radio3">Next</Label>
                        </FormGroup>
                        <FormGroup className="radio abc-radio abc-radio-danger">
                          <Input
                            type="radio" id="radio4" value="option2" name="radio2"
                            defaultChecked
                          />
                          <Label for="radio4">One</Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="4">
                    <legend>
                      Disabled
                    </legend>
                    <p>
                      Disabled state also supported. Full stack radios functionality.
                    </p>
                    <FormGroup className="radio abc-radio">
                      <Input type="radio" name="radio3" id="radio5" value="option1" disabled />
                      <Label for="radio5">Next</Label>
                    </FormGroup>
                    <FormGroup className="radio abc-radio abc-radio-warning">
                      <Input
                        type="radio" name="radio3" id="radio6" value="option2" disabled
                        defaultChecked
                      />
                      <Label for="radio6">One</Label>
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <legend>
                      Cool iOS-like switches
                    </legend>
                    <p>
                      Simple component that helps you turn your default HTML checkbox inputs into
                      beautiful iOS 7 style switches in just few simple steps.
                    </p>
                    <FormGroup className="display-inline-block checkbox-ios">
                      <Label for="checkbox-ios1" className="switch">
                        <Input
                          type="checkbox" className="ios" defaultChecked
                          id="checkbox-ios1"
                        /><i />
                      </Label>
                    </FormGroup>
                    <FormGroup className="display-inline-block checkbox-ios ml">
                      <Label for="checkbox-ios2" className="switch">
                        <Input type="checkbox" className="ios" id="checkbox-ios2" /><i />
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Widget>
          </Col>
        </Row>

        <Row>

          <Col lg="6" md="12">
            <Widget title={<h6>Pickers</h6>} close refresh settingsInverse>
              <Form>
                <legend>Date & Time</legend>
                <FormGroup>
                  <Label for="datetimepicker">Time-enabled</Label>
                  <Row>
                    <Col xs="6">
                      <div className="datepicker" style={{display: 'flex'}}>
                        <Datetime
                          id="datepicker"
                          open={this.state.isDatePickerOpen}
                          viewMode="days" timeFormat={false}
                          inputProps={{ ref: (input) => { this.refDatePicker = input; } }}
                        />
                        <InputGroupAddon addonType="append" onClick={() => { this.refDatePicker.focus(); }}>
                          <span className="input-group-text"><i className="glyphicon glyphicon-th" /></span>
                        </InputGroupAddon>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="datepicker" style={{display: 'flex'}}>
                        <Datetime
                          open={this.state.isTimePickerOpen} id="timepicker"
                          inputProps={{ ref: (input) => { this.refTimePicker = input; } }}
                          viewMode="time" dateFormat={false}
                        />
                        <InputGroupAddon addonType="append" onClick={() => { this.refTimePicker.focus(); }}>
                          <span className="input-group-text"><i className="glyphicon glyphicon-time" /></span>
                        </InputGroupAddon>
                      </div>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>

              <Form>
                <legend>Colors</legend>
                <FormGroup>
                  <Label for="colorpickeri">
                    Simple select
                    <span className="help-block">
                      Colorpicker plugin for Twitter Bootstrap, originally written by Stefan Petre
                    </span>
                    <InputGroup id="colorpicker">
                      <Input
                        type="text" onChange={this.changeColorInput} id="colorpickeri"
                        value={this.state.colorpickerInputValue}
                      />
                      <InputGroupAddon addonType="append">
                        <span className="input-group-text"><ColorPicker
                          animation="slide-up"
                          color={this.state.colorpickerValue}
                          onChange={this.changeColorValue}
                        /></span>
                      </InputGroupAddon>
                    </InputGroup>
                  </Label>
                </FormGroup>
              </Form>
            </Widget>
          </Col>


          <Col lg="6" md="12">
            <Widget title={<h6> Input <strong>Masks</strong></h6>} close settingsInverse refresh>
              <Form className="form-label-left">
                <legend>Masked inputs</legend>
                <FormGroup row>
                  <Label md="4" xs="12" for="mask-phone">
                    Phone
                    <span className="help-block">(123) 456-7890</span>
                  </Label>
                  <Col md="6" xs="12">
                    <MaskedInput
                      className="form-control" id="mask-phone" mask="(111) 111-1111"
                      size="10"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" for="mask-int-phone">
                    International Phone
                    <span className="help-block">+375 123 456 789</span>
                  </Label>
                  <Col md="6" xs="12">
                    <MaskedInput
                      className="form-control" id="mask-int-phone"
                      mask="+111 111 111 111"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" for="mask-date">
                    Date Format
                    <span className="help-block">07-03-2013</span>
                  </Label>
                  <Col md="6" xs="12">
                    <MaskedInput className="form-control" id="mask-date" mask="11-11-1111" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md="4" xs="12" for="mask-time">
                    Time
                    <span className="help-block">13:43</span>
                  </Label>
                  <Col md="6" xs="12">
                    <MaskedInput className="form-control" id="mask-date1" mask="11:11" />
                  </Col>
                </FormGroup>
              </Form>

            </Widget>
          </Col>
        </Row>


        <Row>
          <Col xs="12">
            <Widget title={<h6>Sliders</h6>} settingsInverse close refresh>
              <Row>
                <Col lg="4">
                  <h4>Color Options</h4>
                  <p>Sing extends <strong>rc-slider</strong> and provides different color options:</p>
                  <Form>
                    <Row>
                      <Col lg={10} md={8}>
                        <div className="mb-sm">
                          <SliderWithTooltip  
                            tipFormatter={this.valueFormatter}
                            className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderBlue}`}
                            defaultValue={20}
                          />
                        </div>
                        <div className="slider-danger mb-sm">
                          <SliderWithTooltip  
                            tipFormatter={this.valueFormatter}
                            className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderRed}`}
                            defaultValue={60}
                          />
                        </div>
                        <div className="slider-warning mb-sm">
                          <SliderWithTooltip  
                            tipFormatter={this.valueFormatter}
                            className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderYellow}`}
                            defaultValue={80}
                          />
                        </div>
                        <div className="slider-success mb-sm">
                          <SliderWithTooltip  
                            tipFormatter={this.valueFormatter}
                            className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderGreen}`}
                            defaultValue={20}
                          />
                        </div>
                        <div className="slider-inverse mb-sm">
                          <SliderWithTooltip  
                            tipFormatter={this.valueFormatter}
                            className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderGrey}`} 
                            defaultValue={40}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Col>

                <Col lg={4}>
                  <h4>Slider Orientation</h4>
                  <p>
                    Vertical orientation is also possible. Simply by adding <strong>
                    verical prop</strong>.
                  </p>
                  <Row>
                    <Col lg={10}>
                      <span>
                        <SliderWithTooltip  
                          tipFormatter={this.valueFormatter} 
                          className={`${s.sliderCustomization} ${s.verticalSlider} ${s.sliderBlue}`}
                          vertical
                          defaultValue={50}
                        />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <SliderWithTooltip  
                          tipFormatter={this.valueFormatter} 
                          className={`${s.sliderCustomization} ${s.verticalSlider} ${s.sliderBlue}`}
                          vertical
                          defaultValue={70}
                        />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <SliderWithTooltip  
                          tipFormatter={this.valueFormatter} 
                          className={`${s.sliderCustomization} ${s.verticalSlider} ${s.sliderBlue}`}
                          vertical
                          defaultValue={20}
                        />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <SliderWithTooltip  
                          tipFormatter={this.valueFormatter} 
                          className={`${s.sliderCustomization} ${s.verticalSlider} ${s.sliderBlue}`}
                          vertical
                          defaultValue={30}
                        />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <SliderWithTooltip  
                          tipFormatter={this.valueFormatter} 
                          className={`${s.sliderCustomization} ${s.verticalSlider} ${s.sliderBlue}`}
                          vertical
                          defaultValue={40}
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col lg="4">
                  <h4>Range Selector</h4>
                  <p>Range selector can be displayed via <strong>{"<RangeTooltip />"} </strong>tag. Price range selector:</p>
                  <Row>
                    <Col md={10}>
                      <span className="slider-warning">
                        <RangeTooltip 
                          allowCross={false}
                          className={`${s.sliderCustomization} ${s.rangeSlider} ${s.sliderRed}`}
                          defaultValue={[20, 70]} 
                        />
                        &nbsp;
                      </span>                    
                    </Col>
                  </Row>
                </Col>

              </Row>
            </Widget>
          </Col>
        </Row>


        <Row>

          <Col lg="6" md={12}>
            <Widget
              title={<h6>Simple <strong>file uploads</strong></h6>} settingsInverse close
              refresh
            >
              <Form>
                <blockquote className="blockquote blockquote-reverse">
                  <p>The man who is really serious, with the urge to find out what truth is, has no
                    style at all. He lives only in what is.</p>
                  <footer>Bruce Lee</footer>
                </blockquote>

                <FormGroup row>
                  <Label md="4" className="text-md-right">
                    File input widget
                  </Label>
                  <Col md="8">
                    <InputGroup className="fileinput fileinput-new">
                      <input
                        onChange={this.onChangeInputFiles}
                        id="fileupload1"
                        type="file" name="file" className="display-none"
                      />
                      <Label for="fileupload1" className="form-control">
                        {this.state.inputFiles.length > 0 ? <div>
                          {this.state.inputFiles.map((file, idx) => (
                            <span key={`select-id-${idx.toString()}`} >{file.name}</span>
                          ))}
                        </div> : <span />}
                      </Label>
                      {this.state.inputFiles.length === 0 ? <InputGroupAddon addonType="append">
                        <Button type="button" color="default" className="btn-file">
                          <Label for="fileupload1">Select file</Label>
                        </Button>
                      </InputGroupAddon> : <InputGroupAddon addonType="append">
                        <Button type="button" color="default">
                          <Label for="fileupload1">Change file</Label>
                        </Button>
                        <Button
                          type="reset" color="default"
                          onClick={this.removeInputFiles}
                        >
                          <Label>Remove file</Label>
                        </Button>
                      </InputGroupAddon>}

                    </InputGroup>
                    <span className="help-block">Awesome file input plugin allows you to create a visually appealing
                      file or image inputs.</span>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md="4" className="text-md-right">
                    Image upload widget
                  </Label>
                  <Col md="8">
                    <input
                      accept="image/*" onChange={this.onChangeInputImage}
                      id="fileupload2"
                      type="file" name="file" className="display-none"
                    />
                    <div className="fileinput fileinput-new fileinput-fix">
                      <div className="fileinput-new thumbnail">
                        {this.state.imageFiles.length > 0 ? <div>
                          {this.state.imageFiles.map((file, idx) => (
                            <img alt="..." src={file.preview} key={`img-id-${idx.toString()}`} />))}
                        </div> : <img
                          alt="..."
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTEiIGhlaWdodD0iMTQxIj48cmVjdCB3aWR0aD0iMTkxIiBoZWlnaHQ9IjE0MSIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijk1LjUiIHk9IjcwLjUiIHN0eWxlPSJmaWxsOiNhYWE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4xOTF4MTQxPC90ZXh0Pjwvc3ZnPg=="
                        />}
                      </div>
                    </div>
                    <div>
                      <Button type="button" color="default"><Label for="fileupload2">Select
                        image</Label></Button>
                    </div>
                    <span className="help-block">Showing a thumbnail instead of the filename when uploading an image.</span>
                  </Col>
                </FormGroup>
              </Form>
            </Widget>
          </Col>


          <Col lg="6" md={12}>
            <Widget title={<h6><strong>Drop</strong> Zone</h6>} settingsInverse refresh close>
              <div>
                <Dropzone
                  onDrop={this.onDrop} accept="image/*"
                  className={`${s.dropzone} dropzone`}
                >
                  {this.state.dropFiles.length > 0 ? <div>
                    {this.state.dropFiles.map((file, idx) => (
                      <div className="display-inline-block mr-xs mb-xs" key={`drop-id-${idx.toString()}`}>
                        <img alt="..." src={file.preview} width={100} />
                        <div>{file.name}</div>
                      </div>
                    ))}
                  </div> : <p>This dropzone accepts only images.
                    Try dropping some here, or click to select files to upload.</p>}
                </Dropzone>

              </div>
            </Widget>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Elements;
