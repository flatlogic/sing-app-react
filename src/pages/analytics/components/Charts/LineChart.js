import React, { PureComponent } from 'react';
import Sparklines from '../../../../components/Sparklines'

export default class LineChart extends PureComponent {

  render() {
    const { data, height, width, options } = this.props;
    return (
      <Sparklines 
        data={data} 
        height={height}
        width={width}
        type={"line"}
        options={options} 
      />
    );
  }
}
