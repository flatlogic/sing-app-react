import React from 'react';
import Rickshaw from 'rickshaw';

import $ from 'jquery';

import {
  Row, Col,
} from 'reactstrap';

import Sparklines from '../../../../components/Sparklines';
import s from './ChangesChart.module.scss';

class ChangesChart extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {
      rickshawGraph: null,
      sparklineData: [],
      sparklineOptions: {},
    };
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
    this.initRickshaw = this.initRickshaw.bind(this);
    this.initSparkline();
  }

  componentDidMount() {
    this.initRickshaw();
    window.addEventListener('resize', this.onResizeRickshaw);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  }

  onResizeRickshaw() {
    this.state.graph.configure({ height: 100 });
    this.state.graph.render();
  }

  initRickshaw() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(32);
    for (let i = 0; i < 32; i += 1) {
      random.addData(seriesData);
    }

    // eslint-disable-next-line
    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: '100',
      renderer: 'multi',
      series: [{
        name: 'pop',
        data: seriesData.shift().map(d => ({ x: d.x, y: d.y })),
        color: '#7bd47a', // (#64bd63, 0.9)
        renderer: 'bar',
        gapSize: 2,
        min: 'auto',
        strokeWidth: 3,
      }, {
        name: 'humidity',
        data: seriesData.shift()
          .map(d => ({ x: d.x, y: ((d.y * (Math.random() * 0.5)) + 30.1) })),
        renderer: 'line',
        color: '#fff',
        gapSize: 2,
        min: 'auto',
        strokeWidth: 3,
      }],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: this.state.graph,
      xFormatter: x => new Date(x * 1000).toString(),
    });

    hoverDetail.show();
    this.state.graph.render();
  }

  initSparkline() {
    const data = [3, 6, 2, 4, 5, 8, 6, 8];
    const dataMax = Math.max.apply(null, data);
    const backgroundData = data.map(() => dataMax);

    // eslint-disable-next-line
    this.state.sparklineData = [backgroundData, data];
    // eslint-disable-next-line
    this.state.sparklineOptions = [
      {
        type: 'bar',
        height: 26,
        barColor: '#eee',
        barWidth: 7,
        barSpacing: 5,
        chartRangeMin: Math.min.apply(null, data),
        tooltipFormat: new $.SPFormatClass(''),
      },
      {
        composite: true,
        type: 'bar',
        barColor: '#64bd63',
        barWidth: 7,
        barSpacing: 5,
      },
    ];
  }

  render() {
    return (
      <div className={s.changesChart}>
        <div className={`${s.chart} bg-success btlr btrr`}>
          <p className={s.chartValue}><i className="fa fa-caret-up" /> 352.79</p>
          <p className={s.chartValueChange}>+2.04 (1.69%)</p>
          <div
            ref={(r) => {
              this.rickshawChart = r;
            }}
          />
          {/*    <div rickshaw-chart [series]="series" [height]="100" [renderer]="'multi'"
          [configureProps]="{gapSize: 0.5, min: 'auto', strokeWidth: 3}"></div> */}
        </div>
        <h4 className={s.chartTitle}><span className="fw-normal">Salt Lake City</span>, Utah</h4>
        <p className="deemphasize">Today 13:34</p>
        <div className="mt">
          <Row>
            <Col xs={6}>
              <p className="h4 m-0">18.7M</p>
              <p className="deemphasize">Shares Traded</p>
            </Col>
            <Col xs={6} className="text-right">
              <p className="h4 m-0">19.9B</p>
              <p className="deemphasize">Market Cap</p>
            </Col>
          </Row>
        </div>
        <div className="mt">
          <Row>
            <Col xs={6}>
              <p className="h3 m-0 text-success fw-semi-bold">+120.93</p>
              <p className="deemphasize">Yearly Change</p>
            </Col>
            <Col xs={6} className="text-right">
              <div
                className="sparkline" ref={(r) => {
                  this.sparklineRef = r;
                }}
              />
              <Sparklines data={this.state.sparklineData} options={this.state.sparklineOptions} />
              <p className="deemphasize">GOOG</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ChangesChart;
