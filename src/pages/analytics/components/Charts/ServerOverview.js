import React, { PureComponent } from 'react';

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";

class ServerOverview extends PureComponent {

  getRandom = (length, min, max, multiplier = 10, maxDiff = 10) => {
    var array = new Array(length).fill();
    let lastValue;
  
    return array.map((item, index) => {
      let randomValue = Math.floor(Math.random() * multiplier + 1);
  
      while (
        randomValue <= min ||
        randomValue >= max ||
        (lastValue && randomValue - lastValue > maxDiff)
      ) {
        randomValue = Math.floor(Math.random() * multiplier + 1);
      }
  
      lastValue = randomValue;
  
      return { value: randomValue };
    });
  }

  render() {

    const { type, dataKey, stroke, fill, strokeWidth, fillOpacity } = this.props

    return (
      <ResponsiveContainer>
      <AreaChart data={this.getRandom(20)}>
        <Area
          type={type}
          dataKey={dataKey}
          stroke={stroke}
          fill={fill}
          strokeWidth={strokeWidth}
          fillOpacity={fillOpacity}
        />
      </AreaChart>
    </ResponsiveContainer>
    )
  }
}

export default ServerOverview;