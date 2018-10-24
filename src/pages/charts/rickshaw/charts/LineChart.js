import React, { Component } from 'react';
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default class LineChart extends Component {
  state = {
    graph: null,
  };

  componentDidMount() {
    this.createChart();

    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const width = $(this.rickshawChart).closest('.widget-body')[0].clientWidth - 30;

    this.state.graph.configure({ width });

    this.state.graph.render();
  }

  createChart() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);
    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }

    // eslint-disable-next-line
    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: 200,
      renderer: 'line',
      min: 45,
      series: [
        {
          color: '#b7b3ff',
          data: seriesData[0],
          name: 'Series 1',
        }, {
          color: '#e2e1ff',
          data: seriesData[1],
          name: 'Series 2',
        },
      ],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: this.state.graph });
    hoverDetail.show();

    new Rickshaw.Graph.Axis.Y({ // eslint-disable-line
      graph: this.state.graph,
      orientation: 'left',
      tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
      element: this.axis,
    });

    this.state.graph.render();
  }

  render() {
    return (
      <div>
        <div ref={(r) => { this.rickshawChart = r; }} style={{ left: '30px', maxWidth: '90%' }} />
        <div ref={(r) => { this.axis = r; }} style={{ position: 'absolute', width: '30px', height: '300px', top: '102px' }} />
      </div>
    );
  }
}
