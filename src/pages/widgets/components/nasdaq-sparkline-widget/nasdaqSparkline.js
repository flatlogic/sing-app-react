import React from 'react';

import $ from 'jquery';
import Sparklines from '../../../../components/Sparklines';

class NasdaqSparkline extends React.Component {

  render() {
    const data = [[4, 6, 5, 7, 5]];
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


    return (
      <Sparklines data={data} options={options} />
    );
  }
}

export default NasdaqSparkline;
