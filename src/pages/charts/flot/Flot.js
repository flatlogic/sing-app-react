import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.time';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot.animator/jquery.flot.animator';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.crosshair';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.symbol';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.selection';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot-orderBars/js/jquery.flot.orderBars';
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */
import Widget from '../../../components/Widget';

import LineChart from './charts/LineChart';
import TrackingChart from './charts/TrackingChart';
import MarkersChart from './charts/MarkersChart';
import BarsChart from './charts/BarsChart';
import PieChart from './charts/PieChart';
import DonutChart from './charts/DonutChart';
import StackedBar from './charts/BarsStackedCharts';

class EasyPie extends PureComponent {
  constructor(props) {
    super(props);

    this.sparklines = [];
  }
  componentDidMount() {
    this.initSparklines();
  }


  initSparklines() {
    this.sparklines.forEach((spark) => {
      $(spark).sparkline('html', $(spark).data());
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem>Charts</BreadcrumbItem>
          <BreadcrumbItem active>Flot</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Flot Charts</span></h1>
        <Row>
          <Col xs={12} lg={6} xl={5}>
            <Widget
              title={<h5>Flot <span className="fw-semi-bold">Stacked Line Chart</span></h5>}
              close collapse
            >
              <LineChart />
              <p className="fs-mini text-muted">
                  Flot is a <span className="fw-semi-bold">pure</span> JavaScript plotting library for jQuery,
                  with a
                  focus on simple usage, attractive looks and interactive features.
              </p>
              <h5 className="mt">Interactive <span className="fw-semi-bold">Sparklines</span></h5>
              <Row className="mt">
                <Col xs={12} md={6}>
                  <div className="stats-row">
                    <div className="stat-item">
                      <p className="value5 fw-thin">34 567</p>
                      <h6 className="name text-muted no-margin fs-mini">Overall Values</h6>
                    </div>
                    <div className="stat-item stat-item-mini-chart">
                      <div className="sparkline" ref={(r) => { this.sparklines.push(r); }} data-type="bar" data-bar-color="#FFC247" data-height="30" data-bar-width="6" data-bar-spacing="2">
                        9,12,14,15,10,14,20
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="stats-row">
                    <div className="stat-item">
                      <p className="value5 fw-thin">34 567</p>
                      <h6 className="name text-muted no-margin fs-mini">Overall Values</h6>
                    </div>
                    <div className="stat-item stat-item-mini-chart">
                      <div className="sparkline" ref={(r) => { this.sparklines.push(r); }} data-type="bar" data-bar-color="#FFF8E3" data-height="30" data-bar-width="6" data-bar-spacing="2">
                        9,12,14,15,10,14,20
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <p className="fs-mini text-muted">
                  This jQuery plugin generates sparklines (small inline charts) directly in the browser using
                  data supplied either inline in the HTML, or via javascript.
              </p>
            </Widget>
          </Col>
          <Col xs={12} lg={6} xl={7}>
            <Widget
              title={<h5>Flot <span className="fw-semi-bold">Tracking</span></h5>}
              close collapse
            >
              <div className="mt mb">
                <TrackingChart />
              </div>
              <p className="fs-mini text-muted">
                Flot charts can be customized easily due to its <span className="fw-semi-bold">powerful API</span>.
                But if you meet any troubles, you are always welcome to contact us to integrate the business
                logic into <span className="fw-semi-bold">SING Admin Dashboard</span>.
              </p>
            </Widget>
          </Col>
          <Col xs={12}>
            <Widget
              title={<h5>Flot <span className="fw-semi-bold">Markers</span></h5>}
              close collapse
            >
              <div className="mt mb">
                <MarkersChart />
              </div>
              <p className="fs-mini text-muted">Points can be marked in several ways, with circles being the built-in default.</p>
            </Widget>
          </Col>
          <Col xs={12} lg={7}>
            <Widget
              title={<h5>Flot <span className="fw-semi-bold">Bars</span></h5>}
              close collapse
            >
              <div className="mt mb">
                <BarsChart />
              </div>
              <p className="fs-mini text-muted">Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features.</p>
            </Widget>
          </Col>
          <Col xs={12} lg={5}>
            <Widget
              className="mb-xlg"
              title={<h5>Flot <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <div className="mt mb">
                <PieChart />
              </div>
              <p className="fs-mini text-muted">Labels can be hidden if the slice is less than a given percentage of the pie (19% in this case).</p>
            </Widget>
            <Widget
              className="mb-xlg"
              title={<h5>Flot <span className="fw-semi-bold">Donut Chart</span></h5>}
              close collapse
            >
              <DonutChart />
            </Widget>
          </Col>
          <Col xs={12}>
            <Widget
              className="mb-xlg"
              title={<h5>Flot <span className="fw-semi-bold">Bars Stacked</span></h5>}
              close collapse
            >
              <div className="mt mb">
                <StackedBar />
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EasyPie;
