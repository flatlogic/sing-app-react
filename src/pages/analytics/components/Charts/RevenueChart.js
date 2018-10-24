import React, { PureComponent } from 'react';
import $ from 'jquery';
import { Row, Col } from 'reactstrap';

/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
/* eslint-enable */

export default class RevenueChart extends PureComponent {
  componentDidMount() {
    this.initChart(this.getData());

    window.addEventListener('resize', this.initChart.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initChart.bind(this));
  }

  getData() { // eslint-disable-line
    const data = [];
    const seriesCount = 3;
    const accessories = ['SMX', 'Direct', 'Networks'];

    for (let i = 0; i < seriesCount; i += 1) {
      data.push({
        label: accessories[i],
        data: Math.floor(Math.random() * 100) + 1,
      });
    }

    return data;
  }

  initChart() {
    $.plot(this.$chartContainer, this.getData(), {
      series: {
        pie: {
          innerRadius: 0.8,
          show: true,
          fill: 0.5,
        },
      },
      colors: ['#ffc247', '#f55d5d', '#9964e3'],
      legend: {
        noColumns: 1,
        container: this.$chartLegend,
        labelBoxBorderColor: '#ffffff',
      },
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={6} lg={7} className="text-center">
          <div ref={(r) => { this.$chartContainer = $(r); }} style={{ height: '100px' }} />
        </Col>
        <Col xs={12} md={5} lg={4}>
          <div ref={(r) => { this.$chartLegend = $(r); }} />
        </Col>
      </Row>
    );
  }
}
