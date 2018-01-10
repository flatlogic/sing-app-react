import React from 'react';

import $ from 'jquery';

/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */

class NasdaqSparkline extends React.Component {

  componentDidMount() {
    this.initSparkline();
  }

  initSparkline() {
    const data = [4, 6, 5, 7, 5];
    const options = {
      type: 'line',
      width: '99%',
      height: '60',
      lineColor: '#666',
      fillColor: 'transparent',
      spotRadius: 5,
      spotColor: '#666',
      valueSpots: { '0:': '#666' },
      highlightSpotColor: '#fff',
      highlightLineColor: '#666',
      minSpotColor: '#666',
      maxSpotColor: '#dd5826',
      tooltipFormat: new $
        .SPFormatClass('<span style="color: white">&#9679;</span> {{prefix}}{{y}}{{suffix}}'),
      chartRangeMin: Math.min.apply(null, data) - 1,
    };

    $(this.sparklineRef).sparkline(data, options);
  }

  render() {
    return (
      <div
        className="sparkline" ref={(r) => {
          this.sparklineRef = r;
        }}
      />
    );
  }
}

export default NasdaqSparkline;
