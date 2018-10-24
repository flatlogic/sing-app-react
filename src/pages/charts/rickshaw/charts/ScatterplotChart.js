import React, { Component } from 'react';
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default class ScatterplotChart extends Component {
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
    const random = new Rickshaw.Fixtures.RandomData();
    for (let i = 0; i < 150; i += 1) {
      random.addData(seriesData);
    }

    // eslint-disable-next-line
    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: 250,
      renderer: 'scatterplot',
      series: [
        {
          color: '#ffd7de',
          data: seriesData[0],
          name: 'Series 1',
        }, {
          color: '#8fe5d4',
          data: seriesData[1],
          name: 'Series 2',
        },
      ],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: this.state.graph });

    hoverDetail.show();

    this.state.graph.render();
  }

  render() {
    return (
      <div>
        <div ref={(r) => { this.rickshawChart = r; }} />
      </div>
    );
  }
}
