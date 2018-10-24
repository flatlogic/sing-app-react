import React, { Component } from 'react';
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default class RealtimeChart extends Component {
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
    const width = $(this.rickshawChart).closest('.widget-body')[0].clientWidth + 40;

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
      height: 80,
      series: [
        {
          color: '#d1dcff',
          data: seriesData[0],
          name: 'Uploads',
        }, {
          color: '#547fff',
          data: seriesData[1],
          name: 'Downloads',
        },
      ],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: this.state.graph,
      xFormatter: x => new Date(x * 1000).toString(),
    });

    hoverDetail.show();

    setInterval(() => {
      random.removeData(seriesData);
      random.addData(seriesData);
      this.state.graph.update();
    }, 1000);

    this.state.graph.render();
  }

  render() {
    return (
      <div>
        <div className="chart-overflow-bottom" ref={(r) => { this.rickshawChart = r; }} />
      </div>
    );
  }
}
