import React from 'react';
import {
  Row,
  Col,
  Progress,
} from 'reactstrap';
import Slider from "react-slick";

import Widget from '../../components/Widget';
import ChangesChart from './components/changes-chart/ChangesChart';
import RealtimeTraffic from './components/realtime-traffic/RealtimeTraffic';
import YearsMap from './components/years-map/YearsMap';
import FlotCharts from './components/flot-charts/FlotCharts';
import NasdaqSparkline from './components/nasdaq-sparkline-widget/nasdaqSparkline';
import Skycon from '../../components/Skycon/Skycon';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

import s from './WidgetsMetro.module.scss';
import './Widgets.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA4 from '../../images/people/a4.jpg';
import peopleA6 from '../../images/people/a6.jpg';
import peopleA3 from '../../images/people/a3.jpg';
import avatar from '../../images/avatar.png';
import img18 from '../../images/pictures/18.jpg';
import img17 from '../../images/pictures/17.jpg';

class Widgets extends React.Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    };

    return (
      <div className="root">
        <h1 className="page-title">Widgets - <span className="fw-semi-bold">Company Performance</span></h1>
        <Row>
          <Col xl={3} lg={4} md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs={3}>
                    <span className="widget-icon">
                      <i className="fi flaticon-like text-primary" />
                    </span>
                  </Col>
                  <Col xs="9">
                    <h6 className="m-0">USERS GROWTH</h6>
                    <p className="h2 m-0 fw-normal">4,332</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs={6}>
                    <h6 className="m-0">Registrations</h6>
                    <p className="value5">+830</p>
                  </Col>
                  <Col xs="6">
                    <h6 className="m-0">Bounce Rate</h6>
                    <p className="value5">4.5%</p>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4} md={6}  xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs="3">
                    <span className="widget-icon">
                      <i className="fi flaticon-magic-wand text-danger" />
                    </span>
                  </Col>
                  <Col xs="9">   
                    <Slider {...settings} className={`${s.hideOverflow} ${s.itemMinWidth}`}>
                      <div>
                        <h6 className="m-0">VISITS TODAY</h6>
                        <p className="h2 m-0 fw-normal">12,324</p>
                      </div>
                      <div>
                        <h6 className="m-0">VISITS YESTERDAY</h6>
                        <p className="h2 m-0 fw-normal">11,885</p>
                      </div>
                    </Slider> 
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs="6">
                    <h6 className="m-0">New Visitors</h6>
                    <Slider {...settings}  className={s.hideOverflow}>
                      <div>
                        <p className="value5">1,332</p>
                      </div>
                      <div>
                        <p className="value5">20.1%</p>
                      </div>
                    </Slider>
                  </Col>
                  <Col xs="6">
                    <h6 className="m-0">Bounce Rate</h6>
                    <Slider {...settings}  className={s.hideOverflow}>
                      <div>
                        <p className="value5">217</p>
                      </div>
                      <div>
                        <p className="value5">2.3%</p>
                      </div>
                    </Slider>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4}  md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Slider {...settings}  className={`${s.hideOverflow} ${s.itemMinWidth}`}>
                  <div>
                    <Row className="flex-nowrap">
                      <Col xs={3}>
                        <span className="widget-icon">
                          <i className="fi flaticon-notebook-4 text-info" />
                        </span>
                      </Col>
                      <Col xs="9">
                        <h6 className="m-0">ORDERS</h6>
                        <p className="h2 m-0 fw-normal">82,765</p>
                      </Col>
                    </Row>
                    <Row className="flex-nowrap">
                      <Col xs={6}>
                        <h6 className="m-0">Avg. Time</h6>
                        <p className="value5">2:56</p>
                      </Col>
                      <Col xs={6}>
                        <h6 className="m-0">Last Week</h6>
                        <p className="value5">374</p>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row className="flex-nowrap">
                      <Col xs={3}>
                        <span className="widget-icon">
                          <i className="fi flaticon-shuffle text-info" />
                        </span>
                      </Col>
                      <Col xs={9}>
                        <h6 className="m-0">PICKED ORDERS</h6>
                        <p className="h2 m-0 fw-normal">13.8%</p>
                      </Col>
                    </Row>
                    <Row className="flex-nowrap">
                      <Col xs={6}>
                        <h6 className="m-0">Basic</h6>
                        <p className="value5">3,692</p>
                      </Col>
                      <Col xs="6">
                        <h6 className="m-0">Advanced</h6>
                        <p className="value5">1,441</p>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Widget>
          </Col>
          <Col xl={3} lg={4}  md={6} xs={12}>
            <Widget>
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs={3}>
                    <span className="widget-icon">
                      <i className="fi flaticon-diamond text-success" />
                    </span>
                  </Col>
                  <Col xs={9}>
                    <h6 className="m-0">TOTAL PROFIT</h6>
                    <p className="h2 m-0 fw-normal">$7,448</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs="6">
                    <h6 className="m-0">Last Month</h6>
                    <p className="value5">$83,541</p>
                  </Col>
                  <Col xs={6}>
                    <h6 className="m-0">Last Week</h6>
                    <p className="value5">$17,926</p>
                  </Col>
                </Row>
              </div>
            </Widget>
          </Col>
        </Row>
        <FlotCharts />
        <Row>
          <Col lg={4} xs={12}>
            <Widget refresh close bodyClass="mt-0" >
              <div className="widget-top-overflow widget-padding-md clearfix bg-info text-white">
                <h3 className="mt-lg mb-lg">Light Blue - <span className="fw-semi-bold">Next Generation</span> Admin
                  Dashboard
                  Template</h3>
                <ul className="tags text-white pull-right">
                  <li><button className="btn-link">features</button></li>
                </ul>
              </div>
              <div className="post-user mt-negative-lg">
                <span className="thumb-lg pull-left mr mt-n-sm">
                  <img className="rounded-circle" src={peopleA4} alt="..." />
                </span>
                <h6 className="m-b-1 fw-normal text-white">Jeremy &nbsp;
                  <small className="text-white text-light">@sing</small>
                </h6>
                <p className="fs-mini text-muted">
                  <time>25 mins</time>
                  &nbsp; <i className="fa fa-map-marker" /> &nbsp; near Amsterdam
                </p>
              </div>
              <p className="text-light fs-mini mt-lg">Lots of cool stuff is happening around you. Just calm down for a
                sec
                and listen. Colors, sounds,
                thoughts, ideas.
              </p>
              <footer className="bg-widget-transparent">
                <ul className="post-links">
                  <li><button className="btn-link">1 hour</button></li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>
                <ul className="post-comments mb-0 mt-2">
                  <li>
                    <span className="thumb-xs avatar pull-left mr-sm">
                      <img className="rounded-circle" src={peopleA1} alt="..." />
                    </span>
                    <div className="comment-body">
                      <h6 className="author fs-sm fw-semi-bold">Ignacio Abad&nbsp;
                        <small>6 mins ago</small>
                      </h6>
                      <p className="fs-mini">Hey, have you heard anything about that?</p>
                    </div>
                  </li>
                  <li>
                    <span className="thumb-xs avatar pull-left mr-sm">
                      <img className="rounded-circle" src={avatar} alt="..." />
                    </span>
                    <div className="comment-body">
                      <input
                        className="form-control form-control-sm" type="text"
                        placeholder="Write your comment..."
                      />
                    </div>
                  </li>
                </ul>
              </footer>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget refresh close bodyClass="mt-0">
              <div>
                <div className="widget-top-overflow text-white">
                  <img src={img17} alt="..." />
                  <ul className="tags text-white pull-right">
                    <li><button className="btn-link">design</button></li>
                    <li><button className="btn-link">white</button></li>
                  </ul>
                </div>
                <div className="post-user mt-sm">
                  <span className="thumb pull-left mr mt-n-sm">
                    <img className="rounded-circle" src={peopleA6} alt="..." />
                  </span>
                  <h6 className="mb-xs mt"><span className="fw-semi-bold">Maryna</span> Nilson</h6>
                  <p className="fs-mini text-muted">
                    <time>25 mins</time>
                    &nbsp; <i className="fa fa-map-marker" /> &nbsp; near Amsterdam
                  </p>
                </div>
                <p className="text-light fs-mini m">Lots of cool stuff is happening around you. Just calm down for a
                  sec
                  and listen. Colors, sounds,
                  thoughts, ideas. </p>
              </div>
              <footer className="bg-widget-transparent">
                <ul className="post-links no-separator">
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> 427</span></button></li>
                  <li><button className="btn-link"><i className="glyphicon glyphicon-comment" /> 98</button></li>
                </ul>
              </footer>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget refresh close>
              <div>
                <div className="post-user mt-n-xs">
                  <span className="thumb pull-left mr mt-n-sm">
                    <img className="rounded-circle" src={peopleA2} alt="..." />
                  </span>
                  <h6 className="mb-xs mt-xs">Jess <span className="fw-semi-bold">@jessica</span></h6>
                  <p className="fs-mini text-muted">
                    <time>25 mins</time>
                    &nbsp; <i className="fa fa-map-marker" /> &nbsp; near Amsterdam
                  </p>
                </div>
                <div className="widget-middle-overflow widget-padding-md clearfix bg-danger text-white">
                  <h3 className="mt-lg mb-lg">Light Blue - <span className="fw-semi-bold">Next Generation</span> Admin
                    Dashboard
                    Template</h3>
                  <ul className="tags text-white pull-right">
                    <li><button className="btn-link">design</button></li>
                  </ul>
                </div>
                <p className="text-light fs-mini mt-sm">Lots of cool stuff is happening around you. Just calm down for
                  a
                  sec and listen. Colors, sounds,
                  thoughts, ideas. </p>
              </div>
              <footer className="bg-widget-transparent">
                <ul className="post-links">
                  <li><button className="btn-link">1 hour</button></li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>
              </footer>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <Widget bodyClass="mt-0">
              <div className="widget-image text-white">
                <img src={img18} alt="..." />
                <h4 className="title">
                  <span className="fw-normal">Sunnyvale</span>, CA
                </h4>
                <div className="info text-right">
                  <i className="fa fa-map-marker h1 m-0 mr-xs" />
                  <h6 className="m-0 mt-xs">FLORIDA, USA</h6>
                  <p className="fs-sm">9:41 am</p>
                </div>
                <div className="forecast">
                  <div className="row">
                    <div className="col-6 col-md-4">
                      <div className="row mt-xs">
                        <div className="col-6 p-0">
                          <Skycon icon="CLEAR_DAY" color="white" width="40" height="40" />
                          <p className="m-0 fw-normal mt-n-xs">sunny</p>
                        </div>
                        <div className="col-6 p-0">
                          <h6 className="fw-semi-bold m-0">SUNDAY</h6>
                          <p className="value1 ">29&deg;</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 col-md-2 p-0">
                      <h6 className="m-0">TOMMOROW</h6>
                      <Skycon className="mt-1" icon="PARTLY_CLOUDY_DAY" color="white" width="28" height="28" />
                      <p className="m-0 fw-semi-bold">32&deg;</p>
                    </div>
                    <div className="col-3 col-md-2 p-0">
                      <h6 className="m-0">TUE</h6>
                      <Skycon className="mt-1" icon="RAIN" color="white" width="28" height="28" />
                      <p className="m-0 fw-semi-bold">25&deg;</p>
                    </div>
                    <div className="col-3 col-md-2 p-0">
                      <h6 className="m-0">WED</h6>
                      <Skycon className="mt-1" icon="CLEAR_DAY" color="#f0b518" width="28" height="28" />
                      <p className="m-0 fw-semi-bold">28&deg;</p>
                    </div>
                    <div className="col-3 col-md-2 p-0">
                      <h6 className="m-0">THU</h6>
                      <Skycon className="mt-1" icon="PARTLY_CLOUDY_DAY" color="white" width="28" height="28" />
                      <p className="m-0 fw-semi-bold">17&deg;</p>
                    </div>
                  </div>
                </div>
              </div>
            </Widget>
            <Row>
              <Col md={6} xs={12}>
                <Widget className="p-0 text-center">
                  <Row className="m-0">
                    <div className="col-5 bg-danger btlr bblr">
                      <Skycon className="mt-3" icon="CLEAR_DAY" color="white" width="62" height="62" />
                      <h6 className="text-white fw-normal m-t-1">FRIDAY</h6>
                    </div>
                    <div className="col-7">
                      <p className="value0 text-danger mt-n-xs mr-n-xs">
                        33&deg;
                      </p>
                      <p className="mt-n-sm m-b-0 fw-normal fs-sm text-muted">WINDY</p>
                      <div className="row mt-n-xs mb-xs">
                        <div className="col-6 p-0">
                          <Skycon icon="WIND" color="#999" width="20" height="20" />
                          <div className="d-inline-block ml-1">
                            <p className="value6">4</p>
                            <p className="fs-sm m-0 mt-n-xs text-muted fw-normal">MPS</p>
                          </div>
                        </div>
                        <div className="col-6 p-0">
                          <Skycon icon="RAIN" color="#999" width="20" height="20" />
                          <div className="d-inline-block ml-1">
                            <p className="value6">52</p>
                            <p className="fs-sm m-0 mt-n-xs text-muted fw-normal">MM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Widget>
              </Col>
              <Col md={6} xs={12}>
                <Widget className="p-0 text-center">
                  <div className="row m-0">
                    <div className="col-7 bg-success btlr bblr">
                      <p className="value0 text-white mt-sm mr-n-xs">
                        20&deg;
                      </p>
                      <p className="text-white fw-normal d-inline-block mb">SUNDAY</p>
                    </div>
                    <div className="col-5">
                      <Skycon className="mt-3" icon="PARTLY_CLOUDY_DAY" color="#21AE8C" width="60" height="60" />
                      <p className="fw-normal fs-sm text-muted">WINDY</p>
                    </div>
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12}>
            <Row>
              <Col md={6} xs={12}>
                <Widget className="widget-sm">
                  <h6 className="mt-3 fw-normal">
                    Nasdaq
                  </h6>
                  <h3>
                    355 <span className="fw-semi-bold">USD</span>
                  </h3>
                  <p>Last Sale 354.94 USD</p>
                  <NasdaqSparkline />
                </Widget>
              </Col>
              <Col md={6} xs={12}>
                <Widget className="bg-success text-white widget-sm">
                  <p className="mb-xs"><i className="fa fa-comments fa-2x" /></p>
                  <h5>
                    Lots of <span className="fw-semi-bold">possibilities</span> to customize your
                    new <span className="fw-semi-bold">admin template</span>
                  </h5>
                  <p className="fs-mini mt-sm">
                    <span className="fw-semi-bold">83</span> likes
                    &nbsp;
                    <span className="fw-semi-bold">96</span> comments
                    &nbsp;
                    <span className="fw-semi-bold">7</span> shares
                  </p>
                  <p className="fs-sm mt-lg text-light">
                    <time>10 June</time>
                  </p>
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Widget className="bg-primary text-white widget-sm">
                  <p className="mb-xs"><i className="fa fa-arrow-circle-up fa-3x opacity-50" /></p>
                  <p className="mb text-light">
                    <time>10 June</time>
                  </p>
                  <h3>
                    Lots of <span className="fw-semi-bold">new</span> amazing possibilities
                  </h3>
                  <p className="fs-mini mt">
                    <span className="fw-semi-bold">214</span> likes
                    &nbsp;
                    <span className="fw-semi-bold">96</span> comments
                  </p>
                </Widget>
              </Col>
              <Col md={6} xs={12}>
                <Widget className="widget-sm"
                  title={<h6>Server <span className="fw-semi-bold">Overview</span></h6>}
                >
                  <div className="clearfix fs-mini">
                    <span className="pull-right m-0 fw-semi-bold">CPU</span>
                    <span className="fs-mini">60% / 37°C / 3.3 Ghz</span>
                  </div>
                  <Progress color="bg-widget-transparent-lighter" className="progress-xs" value={60} />
                  <div className="clearfix fs-mini mt">
                    <span className="pull-right m-0 fw-semi-bold">Mem</span>
                    <span className="fs-mini">29% / 4GB (16 GB)</span>
                  </div>
                  <Progress color="warning" className="bg-widget-transparent-lighter progress-xs" value={29} />
                  <div className="clearfix fs-mini mt">
                    <span className="pull-right m-0 fw-semi-bold">LAN</span>
                    <span className="fs-mini">6 Mb/s <i className="fa fa-caret-down" /> &nbsp; 3 Mb/s <i
                      className="fa fa-caret-up"
                    /></span>
                  </div>
                  <Progress color="danger" className="bg-widget-transparent-lighter progress-xs" value={48} />
                  <div className="clearfix fs-mini mt">
                    <span className="pull-right m-0 fw-semi-bold">Access</span>
                    <span className="fs-mini">17 Mb/s <i className="fa fa-caret-up" /> &nbsp; (+18%)</span>
                  </div>
                  <Progress color="success" className="bg-widget-transparent-lighter progress-xs" value={64} />
                </Widget>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget>
              <YearsMap />
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget
              title={
                <header className="bb">
                  <h6>Recent <span className="fw-semi-bold">Chats</span></h6>
                </header>
              }
            >
              <div className="widget-body">
                <div className="widget-middle-overflow">
                  {/* todo: slimscroll ??? */}
                  <ul
                    className="list-group widget-chat-list-group" data-ui-jq="slimscroll"
                    data-ui-options="{ height: '287px', size: '4px', borderRadius: '1px', opacity: .3 }"
                  >
                    <li className="list-group-item">
                      <span className="thumb">
                        <img className="rounded-circle" src={peopleA6} alt="..." />
                      </span>
                      <div className="message">
                        <h6 className="sender">Chris Gray</h6>
                        <p className="body">Hey! What&apos;s up? So much time since we saw each other there</p>
                        <time className="time">10 sec ago</time>
                      </div>
                    </li>
                    <li className="list-group-item on-right">
                      <span className="thumb">
                        <img className="rounded-circle" src={avatar} alt="..." />
                      </span>
                      <div>
                        <h6 className="sender">John Doe</h6>
                        <p className="body">True! Totally makes sense. But how do we find that?</p>
                        <time className="time">10 sec ago</time>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <span className="thumb">
                        <img className="rounded-circle" src={peopleA6} alt="..." />
                      </span>
                      <div>
                        <h6 className="sender">Chris Gray</h6>
                        <p className="body">OK, but so now what? What should we do now? Not sure actually.</p>
                        <time className="time">10 sec ago</time>
                      </div>
                    </li>
                    <li className="list-group-item on-right">
                      <span className="thumb">
                        <img className="rounded-circle" src={avatar} alt="..." />
                      </span>
                      <div>
                        <h6 className="sender">John Doe</h6>
                        <p className="body">Hey guys, didn&apos;t you notice this conversation is sort of jubberish?</p>
                        <time className="time">10 sec ago</time>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <footer className="bg-widget-transparent bt">
                  <InputGroup size="sm">
                      <Input placeholder="Your message" />
                      <InputGroupAddon addonType="append"><Button color="default">Send</Button></InputGroupAddon>
                  </InputGroup>
              </footer>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget>
              <RealtimeTraffic />
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xl={3} lg={4} xs={12}>
            <Widget className="widget-padding-md">
              <div className="clearfix">
                <Slider {...settings} className={s.hideOverflow}>
                  <div className={s.slideWrap}>
                    <h3>Basic & <span className="fw-semi-bold">Advanced</span> Features</h3>
                    <p className={`value4 mt-lg ${s.smallSite}`}>All you need in one app</p>
                    <div className="h5 mt-lg mb-lg">
                      <i className="fa fa-quote-left opacity-50" />
                      &nbsp;That&apos;s awesome!  &nbsp;
                      <i className="fa fa-quote-right opacity-50" />
                    </div>
                    <div>
                      <p className={s.positionDescriptionText}>Attention to what&apos;s really important</p>
                      <button className={`${s.positionElementBottom} btn btn-info btn-block mt`}>Order Now!</button>
                    </div>
                  </div>
                  <div className={s.slideWrap}>
                    <h3>Beautiful <span className="fw-semi-bold">Thing</span></h3>
                    <p className={`value4 mt-lg ${s.smallSite}`}>Life-time package support</p>
                    <div className="h5 mt-lg mb-lg">
                      <i className="fa fa-quote-left opacity-50" />
                      &nbsp;That&apos;s awesome!  &nbsp;
                      <i className="fa fa-quote-right opacity-50" />
                    </div>
                    <div>
                      <p className={s.positionDescriptionText}>Attention to what&apos;s really important</p>
                      <button className={`${s.positionElementBottom} btn btn-inverse btn-block mt`} ><span
                        className="fw-semi-bold text-warning"
                      >Ready?</span>
                      </button>
                    </div>
                  </div>
                </Slider>
              </div>
            </Widget>
          </Col>

          <Col xl={3} lg={4} xs={12}>
            <Widget className="widget-chart-changes" close refresh bodyClass="mt-0">
              <ChangesChart />
            </Widget>
          </Col>

          <Col xl={3} lg={4} xs={12}>
            <Widget className="widget-padding-md bg-info text-white">
              <div className="clearfix">
              <Slider {...settings} className={s.hideOverflow}>
                  <div className={s.slideWrap}>
                    <p className="h4">
                      <i className="fa fa-quote-left opacity-50" />
                      &nbsp;Thanks for the awesome support. That&apos;s awesome!&nbsp;
                      <i className="fa fa-quote-right opacity-50" />
                    </p>
                    <div className={`${s.positionElementBottom} ${s.mobileAdjustment}`}>
                      <span className="thumb pull-left mr">
                        <img className="rounded-circle" src={peopleA4} alt="..." />
                      </span>
                      <h4 className={`${s.wideName} m-0`}><span className="fw-semi-bold">Miha </span>Koshir</h4>
                      <p className="text-light m-0">@miha</p>
                    </div>
                  </div>
                  <div  className={s.slideWrap}> 
                    <div className="clearfix">
                      <span className="thumb pull-left mr">
                        <img className="rounded-circle" src={peopleA3} alt="..." />
                      </span>
                      <h4 className="m-0"><span className="fw-semi-bold">Maryna</span> Ess</h4>
                      <p className="text-light m-0">@ess</p>
                    </div>
                    <div>
                      <p className={`h4 ${s.positionElementBottom}`}>
                        <i className="fa fa-quote-left opacity-50" />
                        &nbsp;Could have never imagined it would be so great!&nbsp;
                        <i className="fa fa-quote-right opacity-50" />
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Widget>
            
          </Col>

          <Col xl={3} lg={4} xs={12} className="col-lg-3 col-12">
              <div className={s.flipCard}>
                <div className={s.flipCardInner}>
                  <div className={s.flipCardFront}>
                    <Widget
                      fullscreen={false}
                      className={`widget-padding-md bg-inverse text-white ${s.slideWrap}`}
                      bodyClass="widget-body-container"
                    >
                      <div className="text-center">
                        <i className="fa fa-child text-white fa-5x" />
                      </div>
                      <h3 className="fw-normal">Light Blue Web App</h3>
                      <div className={s.postitionGroupElements}>
                        <div className="mb-sm">Cutting-edge tech and design delivered</div>
                        <p>
                          <button className="btn btn-default btn-block">Hover over me!</button>
                        </p>
                      </div>
                    </Widget>
                </div>
              
              <div className={s.flipCardBack}>
                <Widget fullscreen={false} className={`widget-padding-md ${s.slideWrap}`}  bodyClass="widget-body-container">
                  <div className="text-center">
                    <i className="fa fa-globe text-primary fa-5x" />
                  </div>
                  <h3 className="fw-normal">Join The Web Now!</h3>
                  <div className={s.postitionGroupElements}>
                    <div className="mb-sm">Cutting-edge tech and design delivered</div>
                    <p>
                      <button className="btn btn-gray btn-block">Join now!</button>
                    </p>
                  </div>
                </Widget>
                </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Widgets;
