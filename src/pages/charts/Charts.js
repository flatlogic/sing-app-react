import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!webpack-raphael/raphael';
import 'imports-loader?jQuery=jquery,this=>window!govpredict-morris/morris';
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.time';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot.animator/jquery.flot.animator';
import 'imports-loader?jQuery=jquery,this=>window!easy-pie-chart/dist/jquery.easypiechart.js';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot-orderBars/js/jquery.flot.orderBars';
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */
import d3 from 'd3';
import nv from 'nvd3';
import Rickshaw from 'rickshaw';

import {
  Row, Col, Progress,
} from 'reactstrap';

import FlotBars from './flot/charts/BarsChart';
import Widget from '../../components/Widget';

import s from './Charts.scss';

const FlotChartData = [
  {
    label: 'Traffic',
    data: [[1, 23],
      [2, 13],
      [3, 33],
      [4, 16],
      [5, 32],
      [6, 28],
      [7, 31]],
    lines: {
      fill: 0.3,
      lineWidth: 0,
    },
    color: ['#fff8e3'],
  }, {
    label: 'Traffic',
    data: [[1, 13],
      [2, 8],
      [3, 17],
      [4, 10],
      [5, 17],
      [6, 15],
      [7, 16]],
    lines: {
      fill: 0.6,
      lineWidth: 0,
    },
    color: ['#ffebb2'],
  }, {
    label: 'Traffic',
    data: [[1, 20],
      [2, 20],
      [3, 40],
      [4, 30],
      [5, 40],
      [6, 35],
      [7, 47]],
    animator: { steps: 60, duration: 1000, start: 0 },
    lines: { lineWidth: 2 },
    shadowSize: 0,
    color: '#ffc247',
  },
];
const Morris = window.Morris;

class Charts extends React.Component {
  constructor(prop) {
    super(prop);
    this.onResize = this.onResize.bind(this);
    this.state = {
      graph: null,
    };
  }

  componentDidMount() {
    this.initFlotChart();
    this.initEasyPie();
    this.initSparklineLine();
    this.initSparklinePie();
    this.initD3Charts();
    this.initMorrisLineChart();
    this.initMorrisAreaChart();
    this.initRickshaw();
    this.initEasyPieChart();
    this.initInteractiveSparklines();
    this.initSparklineAreaChart();
    this.initMorrisDonutCharts();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.initFlotChart();
    this.initSparklineLine();
    this.initD3Charts();
    this.initMorrisLineChart();
    this.initMorrisAreaChart();
    this.initEasyPieChart();
    this.initInteractiveSparklines();
    this.initSparklineAreaChart();
    this.initMorrisDonutCharts();
    this.onResizeRickshaw();
    this.onResizeFlotChat();
  }

  onResizeFlotChat() {
    const option = {
      xaxis: {
        tickLength: 0,
        tickDecimals: 0,
        min: 2,
        font: {
          lineHeight: 13,
          weight: 'bold',
          color: '#777',
        },
      },
      yaxis: {
        tickDecimals: 0,
        tickColor: '#f3f3f3',
        font: {
          lineHeight: 13,
          weight: 'bold',
          color: '#eee',
        },
      },
      grid: {
        backgroundColor: { colors: ['#fff', '#fff'] },
        borderWidth: 1,
        borderColor: '#f0f0f0',
        margin: 0,
        minBorderMargin: 0,
        labelMargin: 20,
        hoverable: true,
        clickable: true,
        mouseActiveRadius: 6,
      },
      legend: false,
    };
    $.plotAnimator($(this.flotChart), FlotChartData, option);
  }

  onResizeRickshaw() {
    this.state.graph.configure({ height: 130 });
    this.state.graph.render();
  }

  initEasyPie() {
    this.$easyPieChart.easyPieChart({
      barColor: '#8fe5d4',
      trackColor: '#f8f9fa',
      scaleColor: false,
      lineWidth: 10,
      size: 120,
    });
  }

  initSparklineAreaChart() { // eslint-disable-line
    this.$sparklineAreaChart.sparkline([2, 4, 6, 2, 7, 5, 3, 7, 8, 3, 6], {
      width: '100%',
      fillColor: '#e2e1ff',
      height: '100px',
      lineColor: 'transparent',
      spotColor: '#b7b3ff',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ffebb2',
      highlightLineColor: '#ffebb2',
    }).sparkline([5, 3, 7, 8, 3, 6, 2, 4, 6, 2, 7], {
      composite: true,
      lineColor: 'transparent',
      spotColor: '#b7b3ff',
      fillColor: '#b7b3ff',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#b7b3ff',
      highlightLineColor: '#b7b3ff',
    });
  }

  initSparklineLine() {
    this.$sparklineLineChart.sparkline([1, 2, 4, 2, 3, 7], {
      width: '100%',
      height: '100px',
      lineColor: '#ffc247',
      fillColor: false,
      highlightLineColor: '#8fe5d4',
      spotColor: '#8fe5d4',
      minSpotColor: '#ffc247',
      maxSpotColor: '#ffc247',
      spotRadius: 2,
      lineWidth: 2,
    });
  }

  initD3Charts() {
    const streamLayers = (n, m, o) => {
      if (arguments.length < 3) {
        o = 0; //eslint-disable-line
      }

      const bump = (a) => {
        const x = 1 / (0.1 + Math.random());
        const y = (2 * Math.random()) - 0.5;
        const z = 10 / (0.1 + Math.random());
        for (let i = 0; i < m; i += 1) {
          const w = ((i / m) - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      };

      return d3.range(n).map(() => {
        const a = [];
        let i;
        for (i = 0; i < m; i += 1) {
          a[i] = o + (o * Math.random());
        }
        for (i = 0; i < 5; i += 1) {
          bump(a);
        }
        return a.map((d, iItem) => ({ x: iItem, y: Math.max(0, d) }));
      });
    };

    const testData = (streamNames, pointCount) => {
      const now = new Date().getTime();
      const day = 1000 * 60 * 60 * 24; // milliseconds
      const daysAgoCount = 60;
      const daysAgo = daysAgoCount * day;
      const daysAgoDate = now - daysAgo;
      const pointsCount = pointCount || 45; // less for better performance
      const daysPerPoint = daysAgoCount / pointsCount;
      return streamLayers(streamNames.length, pointsCount, 0.1).map((data, i) => ({
        key: streamNames[i],
        values: data.map(d => ({
          x: daysAgoDate + (d.x * day * daysPerPoint),
          y: Math.floor(d.y * 100), // just a coefficient,
        })),
        yAxis: i + 1,
        type: 'line',
      }));
    };

    nv.addGraph(() => {
      const chart = nv.models.lineChart()
        .useInteractiveGuideline(true)
        .margin({ left: 28, bottom: 30, right: 0 })
        .color(['#ffd7de', '#e2e1ff'])
        .showLegend(true);
      chart.xAxis
        .showMaxMin(false)
        .tickFormat(d => d3.time.format('%b %d')(new Date(d)));
      chart.yAxis
        .showMaxMin(false)
        .tickFormat(d3.format(',f'));

      const chartData = testData(['Search', 'Referral'], 50);
      d3.select(this.nvd3ChartLineSvg)
        .style('height', '300px')
        .datum(chartData.map((el) => {
          el.area = true;
          return el;
        }))
        .call(chart);

      return chart;
    });

    nv.addGraph(() => {
      const bar = nv.models.multiBarChart()
        .margin({ left: 28, bottom: 30, right: 0 })
        .color(['#8fe5d4', '#ffd7de']);
      bar.xAxis
        .showMaxMin(false)
        .tickFormat(d => d3.time.format('%b %d')(new Date(d)));
      bar.yAxis
        .showMaxMin(false)
        .tickFormat(d3.format(',f'));
      const barData = testData(['Uploads', 'Downloads'], 10).map((el) => {
        el.area = true;
        return el;
      });

      d3.select(this.nvd3ChartBarSvg)
        .style('height', '300px')
        .datum(barData.map((el) => {
          el.area = true;
          return el;
        }))
        .call(bar);

      return bar;
    });
  }

  initMorrisDonutCharts() {
    $(this.morrisDonutChart).html('');
    Morris.Donut({
      element: this.morrisDonutChart,
      colors: ['#ffd7de', '#ffebb2'],
      data: [
        { label: 'Download Sales', value: 12 },
        { label: 'In-Store Sales', value: 30 },
      ],
    });
  }

  initMorrisLineChart() {
    $(this.morrisLineChart).html('');
    Morris.Line({
      element: this.morrisLineChart,
      resize: true,
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75, b: 65 },
        { y: '2008', a: 50, b: 40 },
        { y: '2009', a: 75, b: 65 },
        { y: '2010', a: 50, b: 40 },
        { y: '2011', a: 75, b: 65 },
        { y: '2012', a: 100, b: 90 },
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#8fe5d4', '#ffebb2'],
    });
  }

  initMorrisAreaChart() {
    $(this.morrisAreaChart).html('');
    Morris.Area({
      element: this.morrisAreaChart,
      resize: true,
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75, b: 65 },
        { y: '2008', a: 50, b: 40 },
        { y: '2009', a: 75, b: 65 },
        { y: '2010', a: 50, b: 40 },
        { y: '2011', a: 75, b: 65 },
        { y: '2012', a: 100, b: 90 },
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#f59f9f', '#f55d5d'],
      lineWidth: 0,
    });
  }

  initFlotChart() {
    const option = {
      series: {
        lines: {
          show: true,
          lineWidth: 1,
          fill: false,
          fillColor: { colors: [{ opacity: 0.001 }, { opacity: 0.5 }] },
        },
        points: {
          show: false,
          fill: true,
        },
        shadowSize: 0,
      },
      legend: false,
      grid: {
        show: false,
        margin: 0,
        labelMargin: 0,
        axisMargin: 0,
        hoverable: true,
        clickable: true,
        tickColor: 'rgba(255,255,255,1)',
        borderWidth: 0,
      },
    };
    $(this.flotChart).plot(FlotChartData, option);
    this.onResizeFlotChat();
  }

  initFlotBarChart() {
    const barCustomised1 = [
      [1388534400000, 120],
      [1391212800000, 70],
      [1393632000000, 100],
      [1396310400000, 60],
      [1398902400000, 35],
    ];
    const barCustomised2 = [
      [1388534400000, 90],
      [1391212800000, 60],
      [1393632000000, 30],
      [1396310400000, 73],
      [1398902400000, 30],
    ];
    const barCustomised3 = [
      [1388534400000, 80],
      [1391212800000, 40],
      [1393632000000, 47],
      [1396310400000, 22],
      [1398902400000, 24],
    ];
    const flotBarsData = [
      {
        label: 'Apple',
        data: barCustomised1,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 1,
        },
      },
      {
        label: 'Google',
        data: barCustomised2,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 2,
        },
      },
      {
        label: 'Facebook',
        data: barCustomised3,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 3,
        },
      },

    ];
    const flotBarsOptions = {
      series: {
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 350,
          lineWidth: 0,
          order: 1,
          fillColor: {
            colors: [{
              opacity: 1,
            }, {
              opacity: 0.7,
            }],
          },
        },
      },
      xaxis: {
        mode: 'time',
        min: 1387497600000,
        max: 1400112000000,
        tickLength: 0,
        tickSize: [1, 'month'],
        axisLabel: 'Month',
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 15,
      },
      yaxis: {
        axisLabel: 'Value',
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 5,
      },
      grid: {
        hoverable: true,
        borderWidth: 0,
      },
      legend: {
        backgroundColor: 'transparent',
        labelBoxBorderColor: 'none',
      },
      colors: ['#64bd63', '#f0b518', '#F7653F'],
    };
    $(this.flotBarChart).plot(flotBarsData, flotBarsOptions);
  }

  initEasyPieChart() {
    $(this.easyPieChart).easyPieChart({
      barColor: '#5dc4bf',
      trackColor: '#ddd',
      scaleColor: false,
      lineWidth: 10,
      size: 120,
    });
  }

  initSparklinePie() {
    const data = [2, 4, 6];
    const option = {
      type: 'pie',
      width: '100px',
      height: '100px',
      sliceColors: ['#b7b3ff', '#ffebb2', '#f8f9fa'],
    };
    $(this.sparklinePie).sparkline(data, option);
  }

  initSparklineComposite() {
    const data = [
      [2, 4, 6, 2, 7, 5, 3, 7, 8, 3, 6],
      [5, 3, 7, 8, 3, 6, 2, 4, 6, 2, 7],
    ];
    const option = [{
      width: '99%',
      fillColor: '#ddd',
      height: '100px',
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    }, {
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      fillColor: 'rgba(192, 208, 240, 0.76)',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    }];
    $(this.sparklineComposite).sparkline(data[0], option[0]);
    $(this.sparklineComposite).sparkline(data[1], $.extend({ composite: true }, option[1]));
  }

  initInteractiveSparklines() {
    const data = [9, 12, 14, 15, 10, 14, 20];
    const option = { type: 'bar', barColor: '#FFC247', height: '30px', barWidth: 6, barSpacing: 2 };
    const option2 = { type: 'bar', barColor: '#FFF8E3', height: '30px', barWidth: 6, barSpacing: 2 };
    $(this.InteractiveSparkline1).sparkline(data, option);
    $(this.InteractiveSparkline2).sparkline(data, option2);
  }

  initRickshaw() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);
    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }

    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: 130,
      series: [
        {
          color: '#ffebb2',
          data: seriesData[0],
          name: 'Uploads',
        }, {
          color: '#fff8e3',
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
      <div className={s.root}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">YOU ARE HERE</li>
          <li className="breadcrumb-item active">Charts</li>
        </ol>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Charts</span></h1>
        <div>
          <Row>
            <Col lg={6} xl={5} xs={12}>
              <Widget
                title={<h5>Flot <span className="fw-semi-bold">Charts</span></h5>}
                close collapse
              >
                <div>
                  <div className="mt mb" id="flotChart" ref={(r) => { this.flotChart = r; }} style={{ width: '100%', height: '260px' }} />
                  <div className="chart-tooltip" id="flot-main-tooltip" style={{ opacity: 0 }} />
                  <p className="fs-mini text-muted">
                    Flot is a <span className="fw-semi-bold">pure</span> JavaScript plotting library for jQuery, with a
                    focus on simple usage, attractive looks and interactive features.
                  </p>
                  <h5 className="mt">Interactive <span className="fw-semi-bold">Sparklines</span></h5>
                  <Row className="mt">
                    <Col md={6} xs={12}>
                      <div className="stats-row">
                        <div className="stat-item">
                          <p className="value5 fw-thin">34 567</p>
                          <h6 className="name text-muted m-0 fs-mini">Overall Values</h6>
                        </div>
                        <div className="stat-item stat-item-mini-chart">
                          <div className="sparkline" ref={(r) => { this.InteractiveSparkline1 = r; }} />
                        </div>
                      </div>
                    </Col>
                    <Col md={6} xs={12}>
                      <div className="stats-row">
                        <div className="stat-item">
                          <p className="value5 fw-thin">34 567</p>
                          <h6 className="name text-muted m-0 fs-mini">Overall Values</h6>
                        </div>
                        <div className="stat-item stat-item-mini-chart">
                          <div className="sparkline" ref={(r) => { this.InteractiveSparkline2 = r; }} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <p className="fs-mini text-muted">
                    This jQuery plugin generates sparklines (small inline charts) directly in the browser using
                    data supplied either inline in the HTML, or via javascript.
                  </p>
                </div>
              </Widget>
            </Col>
            <Col lg={6} xl={7} xs={12}>
              <Row>
                <Col xs={12} lg={7}>
                  <Widget
                    title={<h5> Easy <span className="fw-semi-bold">Pie Charts</span></h5>}
                    collapse close
                  >
                    <div>
                      <div ref={(r) => { this.$easyPieChart = $(r); }} className="mb text-center" data-percent="47" />
                      <p className="fs-mini text-muted">
                        Easy pie chart is a jQuery plugin that uses the canvas element to render
                        simple pie charts for single values. These charts are highly customizable,
                        very easy to implement, scale to the resolution of the display of the client
                        to provide sharp charts even on retina displays.
                      </p>
                    </div>
                  </Widget>
                </Col>
                <Col xs={12} lg={5}>
                  <Widget
                    title={<h5> Sparkline <span className="fw-semi-bold">Pie Charts</span></h5>}
                    collapse close
                  >
                    <div>
                      <p className="fs-mini text-muted">
                        Each example displayed below takes just 1 line of HTML or javascript to generate.
                      </p>
                      <div ref={(r) => { this.sparklinePie = r; }} className="chart-overflow-bottom mb-0 text-center" />
                      <p className="fs-mini text-muted">
                        Nevertheless Sparkline charts can be configured quite accurate.
                      </p>
                    </div>
                  </Widget>
                </Col>
                <Col xs={12}>
                  <Widget
                    title={<h5> Sparkline <span className="fw-semi-bold">Line Charts</span></h5>}
                    collapse close
                  >
                    <div>
                      <div ref={(r) => { this.$sparklineLineChart = $(r); }} className="chart-overflow-bottom mb-0 text-center" />
                    </div>
                  </Widget>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Widget
                title={<h5><span className="fw-semi-bold">D3</span> Charts</h5>}
                close
              >
                <div>
                  <p className="fs-mini text-muted">
                    This project is an attempt to build re-usable charts and chart components for <span
                      className="fw-semi-bold"
                    >d3.js</span> without
                    taking away the power that d3.js gives you.
                  </p>
                  <div>
                    <svg ref={(r) => { this.nvd3ChartLineSvg = r; }} />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col lg={7} xs={12}>
              <Widget
                title={<h5><span className="fw-semi-bold">D3</span> Charts</h5>}
                close
              >
                <div>
                  <p className="fs-mini text-muted">
                    This is a very young collection of components, with the goal of keeping these components
                    very customizeable.
                  </p>
                  <div>
                    <svg ref={(r) => { this.nvd3ChartBarSvg = r; }} />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col lg={5} xs={12}>
              <Widget
                title={<h5> Realtime <span className="fw-semi-bold">Rickshaw</span></h5>}
                collapse close
              >
                <div>
                  <p className="fs-mini text-muted mb-lg">
                    Rickshaw provides the elements you need to create interactive graphs: renderers, legends,
                    hovers, range selectors, etc. You put the pieces together.
                    It&apos;s all based on <span className="fw-semi-bold">d3</span> underneath, so graphs are drawn with
                    standard
                    SVG and styled with CSS.
                    Customize all you like with techniques you already know.
                  </p>
                  <h5>720 Users</h5>
                  <Progress value="60" color="gray" size="xs" className="mb-sm progress-xs" />
                  <p className="fs-mini text-muted mb-lg">
                    <span className="circle bg-warning-light text-white">
                      <i className="fa fa-circle" />
                    </span>
                    &nbsp;
                    Target <span className="fw-semi-bold">820</span> users
                    is <span className="fw-semi-bold">96%</span> reached.
                  </p>
                  <div ref={(r) => { this.rickshawChart = r; }} className="chart-overflow-bottom" style={{ height: '130px' }} />
                </div>
              </Widget>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <Widget
                title={<h5> Morris <span className="fw-semi-bold">Area Charts</span></h5>}
                close collapse
              >
                <div>
                  <p className="fs-mini text-muted">
                    Good-looking charts shouldn&apos;t be difficult.
                    The public API is terribly simple. It&apos;s just one function: <code>Morris.Line(options)</code>,
                    where options is an object containing some of the following configuration options.
                  </p>
                  <div className="text-center" ref={(r) => { this.morrisAreaChart = r; }} style={{ height: '343px' }} />
                </div>
              </Widget>
            </Col>
            <Col lg={6} xs={12}>
              <Widget
                title={<h5> Morris <span className="fw-semi-bold">Line Charts</span></h5>}
                close collapse
              >
                <div>
                  <p className="fs-mini text-muted">
                    Good-looking charts shouldn&apos;t be difficult.
                    The public API is terribly simple. It&apos;s just one function: <code>Morris.Line(options)</code>,
                    where options is an object containing some of the following configuration options.
                  </p>
                  <div className="text-center" ref={(r) => { this.morrisLineChart = r; }} style={{ height: '343px' }} />
                </div>
              </Widget>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} xl={3}>
              <Widget
                title={<h5>Area <span className="fw-semi-bold">Sparkline</span></h5>}
                close collapse
              >
                <p className="fs-mini text-muted">Each example displayed below takes just 1 line of HTML or javascript to generate.</p>
                <div className="stats-row text-muted mt">
                  <div className="stat-item">
                    <h6 className="name">Overall Growth</h6>
                    <p className="value">43.75%</p>
                  </div>
                  <div className="stat-item">
                    <h6 className="name">Montly</h6>
                    <p className="value">86.34%</p>
                  </div>
                </div>
                <p className="text-muted fs-mini">
                  <span className="fw-semi-bold">17% higher</span> than last month
                </p>
                <div className="chart-overflow-bottom" ref={(r) => { this.$sparklineAreaChart = $(r); }} />
              </Widget>
            </Col>
            <Col lg={6} xl={6} xs={12}>
              <Widget
                title={<h5> Flot <span className="fw-semi-bold">Bars</span></h5>}
                close collapse
              >
                <div>
                  <FlotBars />
                  <p className="fs-mini text-muted">
                    Flot is a <span className="fw-semi-bold">pure</span> JavaScript plotting library for jQuery, with a
                    focus on simple usage, attractive looks and interactive features.
                  </p>
                </div>
              </Widget>
            </Col>
            <Col lg={6} xl={3} xs={12}>
              <Widget
                title={<h5> Morris <span className="fw-semi-bold">Donut Charts</span></h5>}
                close collapse
              >
                <div>
                  <div className="text-center" ref={(r) => { this.morrisDonutChart = r; }} style={{ height: '180px' }} />
                  <p className="fs-mini text-muted">
                    Donuts a great for representing some parted information like traffice sources,
                    disk partitions, etc.
                    This really couldn&apos;t be easier. Create a Donut chart using <code>Morris.Donut(options)</code>,
                    with only few options.
                  </p>
                </div>
              </Widget>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Charts);
