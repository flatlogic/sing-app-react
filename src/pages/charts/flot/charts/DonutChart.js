import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import $ from 'jquery';

class DonutChart extends PureComponent {
  componentDidMount() {
    this.chart = this.createChart(this.getPieChartData());
  }

  getPieChartData() { // eslint-disable-line
    const data = [];
    const seriesCount = 4;
    const accessories = ['Rolex', 'Tissot', 'Orient', 'Other'];

    for (let i = 0; i < seriesCount; i += 1) {
      data.push({
        label: accessories[i],
        data: Math.floor(Math.random() * 100) + 1,
      });
    }

    return data;
  }

  createChart(data) {
    return $.plot(this.$chartContainer, data, {
      series: {
        pie: {
          innerRadius: 0.5,
          show: true,
          fill: 0.7,
        },
      },
      colors: ['#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      legend: {
        noColumns: 1,
        container: this.$chartLegend,
      },
    });
  }
  render() {
    return (
      <Row>
        <Col xs={12} md={6} lg={7} className="mt mb">
          <div style={{ height: '120px' }} ref={(r) => { this.$chartContainer = $(r); }} />
        </Col>
        <Col xs={12} md={5} lg={4} >
          <div className="mt" ref={(r) => { this.$chartLegend = $(r); }} />
        </Col>
      </Row>
    );
  }
}

export default DonutChart;
