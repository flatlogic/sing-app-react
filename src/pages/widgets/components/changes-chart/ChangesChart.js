import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Rickshaw from 'rickshaw';
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */

import {
  Row, Col,
} from 'reactstrap';

import s from './ChangesChart.scss';

class ChangesChart extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {
      rickshawGraph: null,
    };
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
    this.initRickshaw = this.initRickshaw.bind(this);
  }

  componentDidMount() {
    this.initRickshaw();
    this.initSparkline();
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
          .map(d => ({ x: d.x, y: ((d.y * (Math.random() * 0.1)) + 1.1) })),
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
    // let data = [3, 6, 2, 4, 5, 8, 6, 8];
    //  let data = [[3, 5], [6, 2], [2, 6], [4, 4], [5, 3], [8, 0], [6, 2], [8, 0]];
    const data = [[5, 3], [2, 6], [6, 2], [4, 4], [3, 5], [0, 8], [2, 6], [0, 8]];
    //  let data = [[3, 8], [6, 8], [2, 8], [4, 8], [5, 8], [8, 8], [6, 8], [8, 8]];
  //  const maxData = Math.max(data);
    const minData = Math.min(data);
    // const backData = data.map(() => maxData);
  /*  const sparklineData = [backData, data];
    const options = [
      {
        type: 'bar',
        height: 26,
        barColor: '#eee',
        //   barColor: '#64bd63',
        barWidth: 7,
        barSpacing: 5,
        chartRangeMin: minData,
        tooltipFormat: new $.SPFormatClass(''),
      },
      {
        composite: true,
        type: 'bar',
        barColor: '#64bd63',
        barWidth: 7,
        barSpacing: 5,
      },
    ];*/
    const opt = {
      type: 'bar',
      height: 26,
      stackedBarColor: '#eee',
      barColor: '#64bd63',
      barWidth: 7,
      barSpacing: 5,
      chartRangeMin: minData,
      tooltipFormat: new $.SPFormatClass(''),
    };

    $(this.sparklineRef).sparkline(data, opt);

    // barColor: '#64bd63', //'brand-success',
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
          [configureProps]="{gapSize: 0.5, min: 'auto', strokeWidth: 3}"></div>*/}
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

              {/*  <span jq-sparkline [data]="sparklineData" [options]="sparklineOptions"></span>*/}
              <p className="deemphasize">GOOG</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ChangesChart);
