import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import Widget from '../../components/Widget';

import p19 from '../../images/pictures/19.jpg';
import a5 from '../../images/people/a5.jpg';
import a1 from '../../images/people/a1.jpg';
import a3 from '../../images/people/a3.jpg';
import avatar from '../../images/avatar.png';

import s from './Profile.scss';

const Profile = () => (
  <div className={s.root}>
    <Breadcrumb>
      <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
      <BreadcrumbItem active>Profile</BreadcrumbItem>
    </Breadcrumb>
    <h1 className="page-title">User - <span className="fw-semi-bold">Profile</span>
    </h1>

    <Row>
      <Col lg={6} xs={12}>
        <Widget>
          <div className="widget-top-overflow text-white">
            <div className="height-250 overflow-hidden">
              <img className="img-fluid" src={p19} alt="..." />
            </div>
            <a href="#" className="btn btn-outline btn-sm mb-2">
              <i className="fa fa-twitter mr-2" />
              Follow
            </a>
          </div>
          <Row>
            <Col md={5} xs={12} className="text-center">
              <div className={s.profileContactContainer}>
                <span className="thumb-xl mb-3">
                  <img className={[s.profileAvatar, 'rounded-circle'].join(' ')} src={a5} alt="..." />
                </span>
                <h5 className="fw-normal">Adam <span className="fw-semi-bold">Johns</span></h5>
                <p>UI/UX designer</p>
                <a href="#" className="btn btn-danger btn-sm mb-3">
                  &nbsp;Send
                  <i className="fa fa-envelope ml-2" />&nbsp;
                </a>
                <div>
                  <ul className={cx(s.profileContacts, 'mt-sm')}>
                    <li><i className="fa fa-lg fa-phone fa-fw mr-2" /><a href="#"> +375 29 555-55-55</a></li>
                    <li><i className="fa fa-lg fa-envelope fa-fw mr-2" /><a href="#"> psmith@example.com</a></li>
                    <li><i className="fa fa-lg fa-map-marker fa-fw mr-2" /><a href="#"> Minsk, Belarus</a></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={7} xs={12}>
              <div className="stats-row mt-3">
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>251</p>
                  <h6 className="name">Posts</h6>
                </div>
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>9.38%</p>
                  <h6 className="name">Conversion</h6>
                </div>
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>842</p>
                  <h6 className="name">Followers</h6>
                </div>
              </div>
              <p>
                <a href="#" className="badge badge-warning rounded-0"> UI/UX </a>
                <a href="#" className="badge badge-danger rounded-0 ml-2"> Web Design </a>
                <a href="#" className="badge badge-default rounded-0 ml-2"> Mobile Apps </a>
              </p>
              <p className="lead mt-xlg">
                My name is Adam Johns and here is my new Sing user profile page.
              </p>
              <p className="text-muted">
                I love reading people&apos;s summaries page especially those who are in the same industry as me.
                Sometimes it&apos;s much easier to find your concentration during the night.
              </p>
            </Col>
          </Row>
        </Widget>
      </Col>
      <Col lg={6} xs={12}>
        <section className="activities">
          <h2 className="ml-3">Activities</h2>
          <section className={s.event}>
            <header>
              <span className={s.eventAvatar}>
                <img className="rounded-circle" src={a5} alt="..." />
              </span>
              <h5 className={s.eventTitle}><a href="#">Bob Nilson</a> <small><a href="#">@nils</a></small></h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>

            <div className={s.eventBody}>
              There is no such thing as maturity. There is instead an ever-evolving process of maturing.
              Because when there is a maturity, there is ...
            </div>
            <footer className={s.eventFooter}>
              <ul className="post-links">
                <li><a href="#">1 hour</a></li>
                <li><a href="#"><span className="text-danger"><i className="fa fa-heart" /> Like</span></a></li>
                <li><a href="#">Comment</a></li>
              </ul>
            </footer>
          </section>
          <section className={s.event}>
            <header>
              <h5 className={s.eventTitle}><a href="#">Jessica Smith</a> <small>@jess</small></h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>
            <div className={s.eventBody}>
              Check out this awesome photo I made in Italy last summer. Seems it was lost somewhere deep inside
              my brand new HDD 40TB. Thanks god I found it!
            </div>
            <footer className={s.eventFooter}>
              <div className="clearfix">
                <ul className="post-links mt-sm pull-left">
                  <li><a href="#">1 hour</a></li>
                  <li><a href="#"><span className="text-danger"><i className="fa fa-heart-o" /> Like</span></a></li>
                  <li><a href="#">Comment</a></li>
                </ul>

                <span className="thumb thumb-sm pull-right">
                  <a href="#">
                    <img className="rounded-circle" alt="..." src={a1} />
                  </a>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <a href="#"><img className="rounded-circle" alt="..." src={a5} /></a>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <a href="#"><img className="rounded-circle" alt="..." src={a3} /></a>
                </span>
              </div>
              <ul className="post-comments mt-sm">
                <li>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={a1} alt="..." />
                  </span>
                  <div className="comment-body">
                    <h6 className="author fs-sm fw-semi-bold">Ignacio Abad <small>6 mins ago</small></h6>
                    <p>Hey, have you heard anything about that?</p>
                  </div>
                </li>
                <li>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={avatar} alt="..." />
                  </span>
                  <div className="comment-body">
                    <input className="form-control form-control-sm" type="text" placeholder="Write your comment..." />
                  </div>
                </li>
              </ul>
            </footer>
          </section>
          <Form className="mt" action="#">
            <FormGroup className="mb-2">
              <Label className="sr-only" for="new-event">New event</Label>
              <Input type="textarea" id="new-event" placeholder="Post something..." rows="3" />
            </FormGroup>
            <div className="btn-toolbar">
              <div className="btn-group">
                <a href="#" className="btn btn-sm btn-default">
                  <i className="fa fa-camera fa-lg" />
                </a>
                <a href="#" className="btn btn-sm btn-default">
                  <i className="fa fa-map-marker fa-lg" />
                </a>
              </div>
              <button type="submit" className="btn btn-danger btn-sm ml-auto">Post</button>
            </div>
          </Form>
        </section>
      </Col>
    </Row>
  </div>
);

export default withStyles(s)(Profile);
