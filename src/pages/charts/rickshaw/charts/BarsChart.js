import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Rickshaw from 'rickshaw';

Rickshaw.Graph.Renderer.BarNoGap = Rickshaw.Class.create(Rickshaw.Graph.Renderer.Bar, {
  name: 'bar_with_gaps',
  barWidth(series) {
    const frequentInterval = this._frequentInterval(series.stack); // eslint-disable-line
    const barWidth = this.graph.x(series.stack[0].x + (frequentInterval.magnitude / 2));
    return barWidth;
  },
});

export default class BarsChart extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    stacked: PropTypes.bool,
    seriesLength: PropTypes.number,
  }

  static defaultProps = {
    stacked: false,
    seriesLength: 10,
  }

  constructor(props) {
    super(props);

    const { stacked, colors } = this.props;

    this.options = { stacked, padding: { left: 0.03 } };
    this.colors = colors;
  }

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
    const width = $(this.rickshawChart).closest('.widget-body')[0].clientWidth;

    this.state.graph.configure({ width });

    this.state.graph.render();
  }

  createChart() {
    const seriesData = this.options.stacked ? [[], [], []] : [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);
    for (let i = 0; i < this.props.seriesLength; i += 1) {
      random.addData(seriesData);
    }
    const series = seriesData.map((data, i) => ({
      name: `Series ${i + 1}`,
      color: this.colors[i % this.colors.length],
      data,
    }));

    // eslint-disable-next-line
    this.state.graph = new Rickshaw.Graph({
      padding: this.options.padding || {},
      element: this.rickshawChart,
      height: 180,
      renderer: 'bar_with_gaps',
      stack: this.options.stacked,
      series,
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
