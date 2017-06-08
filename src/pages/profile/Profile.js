import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import Widget from '../../components/Widget';

import s from './Profile.scss';

const Profile = () => (
  <div className={s.root}>
    <Breadcrumb>
      <BreadcrumbItem><span className="text-muted">YOU ARE HERE</span></BreadcrumbItem>
      <BreadcrumbItem active>Profile</BreadcrumbItem>
    </Breadcrumb>
    <h1 className="page-title">Profile</h1>
    <Row>
      <Col sm={6}>
        <Widget
          title={
            <span>
          Edit Profile <span className="fw-semi-bold">Form</span>
            </span>
        }
        >
          <Form>
            <FormGroup row>
              <Label for="username" sm={2}>
                Username
              </Label>
              <Col sm={10}>
                <Input id="username" type="text" placeholder="Username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input id="email" type="email" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input id="password" type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <FormGroup>
                  <Label>
                    <Input type="checkbox" />{' '}
                    Remember me
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <div className="btn-toolbar float-right">
                  <Button>
                    Cancel
                  </Button>
                  <Button color="danger">
                    Save
                  </Button>
                </div>
              </Col>
            </FormGroup>
          </Form>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default withStyles(s)(Profile);
