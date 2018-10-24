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

    for (let i = 0; i < 25; i += 1) {
      randomData.push(Math.random().toFixed(1) * 10);
    }

    return randomData;
  }

  initChart(data) {
    this.$chartContainer.sparkline(data, {
      type: 'line',
      lineWidth: 2,
      lineColor: this.props.color,
      normalRangeMin: '10px',
      fillColor: false,
      spotColor: false,
      minSpotColor: false,
      maxSpotColor: false,
      highlightSpotColor: false,
      highlightLineColor: false,
      drawNormalOnTop: false,
    });
  }

  render() {
    return (
      <div ref={(r) => { this.$chartContainer = $(r); }} />
    );
  }
}
