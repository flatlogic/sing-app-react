import React from 'react';
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import Formsy from 'formsy-react';

import InputValidation from '../../../components/InputValidation';
import Widget from '../../../components/Widget';


class Validation extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-title">Form - <span className="fw-semi-bold">Validation</span>
        </h1>

        <Row>
          <Col xs={0} lg={1} />
          <Col lg={8} xs={12}>
            <Widget
              title={<h5> Dead simple validation
              <small> No JS needed to tune-up</small>
              </h5>} close collapse
            >
              <Formsy.Form>
                <fieldset>
                  <legend>
                    By default validation is started only after at least 3 characters have been input.
                  </legend>
                  <FormGroup row>
                    <Label md={3} xs={12} for="basic">Simple required</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text"
                        id="basic"
                        name="basic"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={3} xs={12} for="basic-change">Min-length On Change
                      <span className="help-block"> At least 10 </span>
                    </Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text" id="basic-change"
                        name="basic-change"
                        trigger="change"
                        validations={{ minLength: 10 }}
                        validationError={{
                          minLength: 'This value is too short. It should have 10 characters or more.',
                        }}
                        required
                      />
                    </Col>
                  </FormGroup>
                </fieldset>
                <fieldset>
                  <legend>
                    <span className="badge badge-warning text-gray-dark mr-xs">
                      HTML5 </span> input types supported
                  </legend>
                  <FormGroup row>
                    <Label md={3} xs={12} for="email">E-mail</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text"
                        id="email"
                        name="email"
                        trigger="change"
                        required
                        validations={{ isEmail: true }}
                        validationError={{ isEmail: 'This value should be a valid email.' }}
                      />
                      <span className="help-block">
                        This one is triggered even when 1 character has been input
                      </span>
                      {/* todo: change triggered */}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={3} xs={12} for="number">Number</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text"
                        id="number"
                        name="number"
                        required
                        validations="isNumeric"
                        validationError={{ isNumeric: 'This value should be a valid number.' }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label md={3} xs={12} for="range">Range</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text"
                        id="range"
                        name="range"
                        trigger="change"
                        required
                        validations="isRange:[10,100]"
                        validationError={{ isRange: 'This value should be between 10 and 100.' }}
                      />
                    </Col>
                  </FormGroup>
                </fieldset>

                <fieldset>
                  <legend>
                    More validation
                  </legend>
                  <FormGroup row>
                    <Label md={3} xs={12} for="password"> Password helpers</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="password"
                        id="password"
                        name="password"
                        trigger="change"
                        className="mb-xs"
                        validations={{ minLength: 6 }}
                        validationError={{
                          minLength: 'This value is too short. It should have 6 characters or more.',
                        }}
                        required
                      />
                      <InputValidation
                        type="password"
                        id="password-r"
                        name="password-r"
                        trigger="change"
                        className="mb-sm"
                        validations={{ equalsField: 'password', minLength: 6 }}
                        validationError={{
                          equalsField: 'This value should be the same.',
                          minLength: 'This value is too short. It should have 6 characters or more.',

                        }}
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md={3} xs={12} for="website">Website</Label>
                    <Col md={9} xs={12}>
                      <InputValidation
                        type="text"
                        id="website"
                        name="website"
                        trigger="change"
                        validations="isUrl"
                        validationError={{
                          isUrl: 'This value should be a valid url.',
                        }}
                        required
                      />
                    </Col>
                  </FormGroup>
                </fieldset>

                <div className="form-action">
                  <Button type="submit" color="danger" className="btn-rounded float-right">Validate & Submit</Button>
                  <Button type="button" color="default" className="btn-rounded">Cancel</Button>
                </div>
              </Formsy.Form>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Validation;
