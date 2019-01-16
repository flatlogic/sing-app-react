import React, { Component } from 'react';
import cx from 'classnames';
import { Col, Row } from 'reactstrap';

import Widget from '../../components/Widget';
import RevenueChart from './components/Charts/RevenueChart';
import LineChart from './components/Charts/LineChart';
import MainChart from './components/Charts/MainChart';
import TaskContainer from './components/TaskContainer/TaskContainer';
import BigStat from './components/BigStat/BigStat';
import TableContainer from './components/TableContainer/TableContainer';
import Calendar from '../dashboard/components/calendar/Calendar';

import mock from './mock';
import s from './Analitycs.module.scss'; // eslint-disable-line

class Analytics extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Analytics <small>Company performance</small></h1>
        <div className={s.sidesWrapper}>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    className="mb-0 h-100"
                    close
                    bodyClass="mt-lg"
                    title={<h4>Visits Today</h4>}
                  >
                    <div className="d-flex justify-content-between align-items-center mb">
                      <h2>4,332</h2>
                      <i className="la la-arrow-right text-success rotate-315" />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div className={cx('mt', s.visitElement)}>
                        <h6>+830</h6>
                        <p className="text-muted mb-0 mr"><small>Logins</small></p>
                      </div>
                      <div className={cx('mt', s.visitElement)}>
                        <h6>0.5%</h6>
                        <p className="text-muted mb-0"><small>Sign Out</small></p>
                      </div>
                      <div className={cx('mt', s.visitElement)}>
                        <h6>4.5%</h6>
                        <p className="text-muted mb-0 mr"><small>Rate</small></p>
                      </div>
                    </div>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    title={<h4>Revenue Breakdown</h4>}
                  >
                    <RevenueChart />
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    title={<h4>App Perfomance</h4>}
                  >
                    <p className="text-muted d-flex flex-wrap">
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-success text-success mr-xs" style={{ fontSize: '4px' }}>.</span>
                        This Period
                      </small>
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-warning text-warning mr-xs" style={{ fontSize: '4px' }}>.</span>
                        Last Period
                      </small>
                    </p>
                    <h6 className="fs-sm text-muted">SDK</h6>
                    <div className="progress progress-xs mb-sm">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <div className="progress progress-xs" >
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <h6 className="mt fs-sm text-muted">Integration</h6>
                    <div className="progress progress-xs mb-sm">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                    <div className="progress progress-xs">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt-lg"
                    close
                    className="mb-0 h-100"
                    title={<h4>Server Overview</h4>}
                  >
                    <div className="d-flex justify-content-between flex-wrap mb-sm">
                      <p className="width-150"><small>60% / 37°С / 3.3 Ghz</small></p>
                      <div className={s.sparklineWrapper}>
                        <LineChart color="#ffc247" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap mb-sm">
                      <p className="width-150"><small>54% / 31°С / 3.3 Ghz</small></p>
                      <div className={s.sparklineWrapper}>
                        <LineChart color="#9964e3" />
                      </div>
                    </div>
                    <div className="d-none justify-content-between flex-wrap">
                      <p className="width-150"><small>57% / 21°С / 3.3 Ghz</small></p>
                      <div className={s.sparklineWrapper}>
                        <LineChart color="#3abf94" />
                      </div>
                    </div>
                  </Widget>
                </div>
              </Col>
              <Col xs={12}>
                <MainChart />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[0]} />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[1]} />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[2]} />
              </Col>
              <Col xs={12} className="mb-lg">
                <Widget
                  className="pb-0"
                  bodyClass="p-0 mt"
                  title={<h4> Support <strong>Requests</strong></h4>}
                  close settings
                >
                  <TableContainer data={mock.table} />
                </Widget>
              </Col>
            </Row>
          </div>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget className="mb-xlg pt-0" bodyClass="p-0 mt-0">
                  <Calendar white />
                </Widget>
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <TaskContainer data={mock.tasks} />
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget
                  className="widget"
                  bodyClass={cx(s.notifications, 'w-100 mt-lg')}
                  title={
                    <h4>Notifications <span className="badge badge-pill badge-success fw-normal pull-right mt-xs">{mock.notifications.length}</span></h4>
                  }
                >
                  {mock.notifications.map(({ id, icon, color, content }) => (
                    <div className="d-flex align-items-start" key={id}>
                      <i className={`la la-${icon} mr text-${color}`} />
                      <p
                        className={cx({ 'mb-0': id === mock.notifications.length - 1 })}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </div>
                  ))}
                </Widget>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
