import React, { Component } from 'react';
import { Col, Row, Alert, Progress, Button, ButtonGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */
import Widget from '../../../components/Widget';

class Sparkline extends Component {
  state = { isAlertVisible: true }

  componentDidMount() {
    this.initCharts();

    window.addEventListener('resize', this.initCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initCharts);
  }

  initCharts = () => {
    this.initSparkline1();
    this.initSparkline2();
    this.initSparkline3();
    this.initSparkline4();
    this.initSparkline5();
    this.initSparkline6();
    this.initSparkline7();
  }

  toggleAlert = () => {
    this.setState(prevState => ({ isAlertVisible: !prevState.isAlertVisible }));
  }

  generateRandomArr(length, min, max, isFloat) { // eslint-disable-line
    const result = [];
    const maxDefault = 100;
    const minDefault = -100;
    let rand = 0;

    min = min === 0 ? 0 : (min || minDefault); // eslint-disable-line
    max = max === 0 ? 0 : (max || maxDefault); // eslint-disable-line

    for (let i = 0; i < length; i += 1) {
      rand = Math.random() * (Math.abs(result[i - 1] / 10) || 1) * [min, max][i % 2];
      rand = rand < min ? min : rand;
      result.push(isFloat ? rand : Math.round(rand));
    }

    return result;
  }

  initSparkline1() {
    this.$sparkline1.sparkline(this.generateRandomArr(80, -150), {
      type: 'bar',
      height: '140px',
      width: '100%',
      barWidth: 6,
      barSpacing: 3,
      barColor: '#ffebb2',
      negBarColor: '#f59f9f',
    });

    // Chrome and Safari fix for to set correct width to chart
    this.$sparkline1.find('canvas').css({ width: this.$sparkline1.width() });
  }

  initSparkline2() {
    this.$sparkline2.sparkline(this.generateRandomArr(6, 4, 15), {
      type: 'pie',
      width: '200px',
      height: '200px',
      sliceColors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      highlightLighten: 1.05,
    });
  }

  initSparkline3() {
    this.$sparkline3.sparkline(this.generateRandomArr(5), {
      width: '100%',
      fillColor: '#ffebb2',
      height: '100px',
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    }).sparkline(this.generateRandomArr(7), {
      composite: true,
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      fillColor: '#ace5d1',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    });
  }

  initSparkline4() {
    this.$sparkline4.sparkline(this.generateRandomArr(10, 10, 30), {
      type: 'line',
      width: '100%',
      height: '200px',
      lineColor: '#a7beff',
      fillColor: '#d1dcff',
      lineWidth: 2,
      spotColor: '#547fff',
      minSpotColor: '#fdf7e6',
      maxSpotColor: '#f55d5d',
      highlightSpotColor: '#547fff',
      highlightLineColor: '#ffffff',
      spotRadius: 1,
      chartRangeMin: 5,
      chartRangeMax: 7,
      normalRangeColor: '#547fff',
      drawNormalOnTop: true,
    });
  }

  initSparkline5() {
    this.$sparkline5.sparkline(this.generateRandomArr(2, 8, 15), {
      type: 'pie',
      width: '100px',
      height: '100px',
      sliceColors: ['#f59f9f', '#ffd7de'],
      highlightLighten: 1.1,
    });
  }

  initSparkline6() {
    this.$sparkline6.sparkline(this.generateRandomArr(102, -1, 1), {
      type: 'tristate',
      height: '100px',
      width: '100%',
      posBarColor: '#ffebb2',
      negBarColor: '#b7b3ff',
      zeroBarColor: '#d6dee5',
      barWidth: 5,
      barSpacing: 3,
      zeroAxis: true,
    });

    // Chrome and Safari fix for to set correct width to chart
    this.$sparkline6.find('canvas').css({ width: this.$sparkline6.width() });
  }

  initSparkline7() {
    this.$sparkline7.sparkline(this.generateRandomArr(15, 10, 100, true), {
      width: '100%',
      height: '200px',
      lineColor: '#547fff',
      fillColor: false,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} lg={6} xl={5}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Bar Chart</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="chart-overflow-bottom" ref={(r) => { this.$sparkline1 = $(r); }} />
              <div className="stats-row text-muted mt-xlg">
                <div className="stat-item">
                  <h6 className="name">ARR ($)</h6>
                  <p className="value">4 375 800</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">MRR ($)</h6>
                  <p className="value">863 425</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">TTN ($)</h6>
                  <p className="value">5 634 100</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">MRR / ARR </h6>
                  <p className="value">0.1634</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <small>
                  <span className="badge badge-warning">Profit</span> Legend Item Emulation
                </small>
                <small>
                  <span className="badge badge-danger">Loss</span> Legend Item Emulation
                </small>
              </div>
            </Widget>
          </Col>
          <Col xs={12} lg={6} xl={4}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="text-center" ref={(r) => { this.$sparkline2 = $(r); }} />
              <Alert className="text-muted" color="white" isOpen={this.state.isAlertVisible} toggle={this.toggleAlert}>
                <h5>Sales Report</h5>
                <Progress className="progress-xs" color="secondary" value="16" />
                <p className="text-muted"><small>Prev year quota achievement 16%. Should work harder!</small></p>
              </Alert>
            </Widget>
          </Col>
          <Col xs={12} lg={6} xl={3}>
            <Widget
              title={<h5>Area <span className="fw-semi-bold">Sparkline</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="stats-row text-muted mt">
                <div className="stat-item">
                  <h6 className="name">Overall Growth</h6>
                  <p className="value">43.75%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Montly</h6>
                  <p className="value">86.34%</p>
                </div>
              </div>
              <p className="text-muted fs-mini">
                <span className="fw-semi-bold">17% higher</span> than last month
              </p>
              <div className="chart-overflow-bottom" ref={(r) => { this.$sparkline3 = $(r); }} />
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={7} xl={9}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Line Chart</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="chart-overflow-bottom" ref={(r) => { this.$sparkline4 = $(r); }} />
            </Widget>
          </Col>
          <Col xs={12} lg={5} xl={3}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="text-center" ref={(r) => { this.$sparkline5 = $(r); }} />
              <p className="mt">Possible actions:</p>
              <ButtonGroup>
                <Button color="light">Yoga</Button>
                <Button color="light">Coffee</Button>
                <Button color="light">Dancing</Button>
              </ButtonGroup>
            </Widget>
          </Col>
          <Col xs={12} lg={6}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <InputGroup>
                <Input type="text" size={16} placeholder="Filter By Period: MM/DD/YYY" />
                <InputGroupAddon><i className="fa fa-search text-gray" /></InputGroupAddon>
              </InputGroup>
              <p className="fs-mini text-muted mt">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="chart-overflow-bottom" ref={(r) => { this.$sparkline6 = $(r); }} />
            </Widget>
          </Col>
          <Col xs={12} lg={6}>
            <Widget
              title={<h5>Sparkline <span className="fw-semi-bold">Line Chart</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
              <div className="chart-overflow-bottom" ref={(r) => { this.$sparkline7 = $(r); }} />
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sparkline;
