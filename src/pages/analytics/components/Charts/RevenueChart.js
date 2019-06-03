import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Row, Col } from 'reactstrap';

/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
/* eslint-enable */

export default class RevenueChart extends PureComponent {
    static propTypes = {
        data: PropTypes.any,
    };

    static defaultProps = {
        data: [],
    };

  componentDidMount() {
    this.initChart();
    window.addEventListener('resize', this.initChart.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initChart.bind(this));
  }

  initChart() {
    $.plot(this.$chartContainer, this.props.data, {
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
        <Col xs={12} md={5} lg={4} className="display-flex flex-column justify-content-center">
          <div ref={(r) => { this.$chartLegend = $(r); }} />
        </Col>
      </Row>
    );
  }
}
