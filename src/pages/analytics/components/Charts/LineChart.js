import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

/* eslint-disable */ 
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */

export default class LineChart extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.initChart(this.getData());
  }

  getData() { // eslint-disable-line
    const randomData = [];

    for (let i = 0; i < 150; i += 1) {
      randomData.push((i/9+Math.sin(i/6)*8+Math.random() * 2).toFixed(2));
    }

    return randomData;
  }

  initChart(data) {
    this.$chartContainer.sparkline(data, {
      type: 'line',
      lineWidth: 1.67,
      lineColor: this.props.color,
      normalRangeMin: '10px',
      width: '160px',
      height: '20px',
      fillColor: false,
      spotColor: false,
      minSpotColor: false,
      maxSpotColor: false,
      highlightSpotColor: false,
      highlightLineColor: false,
      drawNormalOnTop: false,
      tooltipClassname: 'line-chart-tooltip'
    });
  }

  render() {
    return (
      <div ref={(r) => { this.$chartContainer = $(r); }} />
    );
  }
}
