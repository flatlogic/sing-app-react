import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {Row, Col} from "reactstrap";
import Widget from "../../../../components/Widget";

/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot.dashes/jquery.flot.dashes';
/* eslint-enable */

export default class RevenueChart extends PureComponent {
    static propTypes = {
        data: PropTypes.any.isRequired,
        isReceiving: PropTypes.bool
    };

    static defaultProps = {
        data: [],
        isReceiving: false
    };

  componentDidMount() {
    window.addEventListener('resize', this.initChart.bind(this));
  }

  componentDidUpdate() {
      const {data} = this.props;
      if (data.length) {
          this.initChart();
          this.initEventListeners();
      }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initChart.bind(this));
  }

  onDrawHook() {
    this.$chartLegend
      .find('.legendColorBox > div')
      .css({
        border: 0,
        borderRadius: 0,
        paddingTop: 5
      })
      .children('div')
      .css({
        borderWidth: 1,
        borderRadius: 0,
        width: 50,
      });

    this.$chartLegend.find('tbody td').css({
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: 'center'
    });

    let labels = this.$chartLegend.find('.legendLabel').detach();
    this.$chartLegend.find('tbody').prepend('<tr></tr>');
    this.$chartLegend.find('tbody tr:eq(0)').append(labels);
  }

  initChart() {
    const {data} = this.props;

    const ticks = ['Dec 19', 'Dec 25', 'Dec 31', 'Jan 10', 'Jan 14',
      'Jan 20', 'Jan 27', 'Jan 30', 'Feb 2', 'Feb 8', 'Feb 15',
      'Feb 22', 'Feb 28', 'Mar 7', 'Mar 17'];

    // check the screen size and either show tick for every 4th tick on large screens, or
    // every 8th tick on mobiles
    const tickInterval = window.screen.width < 500 ? 10 : 6;
    let counter = 0;

    if (this.$chartContainer.length > 0) {
      return $.plot(this.$chartContainer, [{
        label: 'Light Blue',
        data: data[0],
        lines: {
          show: true,
          fill: 0.3,
          lineWidth: 0,
        },
        points: {
          fillColor: '#A7BEFF',
          symbol: (ctx, x, y) => {
                  // count for every 8nd point to show on line
            if (counter % 8 === 0) { ctx.arc(x, y, 2, 0, Math.PI * 2, false); }

            counter += 1;
          },
        },
        shadowSize: 0,
      }, {
        label: 'RNS App',
        data: data[1],
        dashes: {
          show: true,
          lineWidth: 1.5,
          dashLength: [5, 2],
        },
        points: {
          fillColor: '#3abf94',
        },
        shadowSize: 0,
      }, {
        label: 'Sing App',
        data: data[2],
        lines: {
          show: true,
          lineWidth: 1.5,
        },
        points: {
          fillColor: '#f55d5d',

        },
        shadowSize: 0,
      }], {
        xaxis: {
          tickColor: '#f8f9fa',
          tickSize: tickInterval,
          tickFormatter: i => ticks[i / tickInterval],
          font: {
            lineHeight: 11,
            weight: 400,
          },
        },
        yaxis: {
          tickColor: '#f8f9fa',
          max: 5,
          font: {
            lineHeight: 11,
            weight: 400,
            labelFontColor: 'red'
          },
        },
        points: {
          show: true,
          fill: true,
          lineWidth: 1,
          radius: 1,
          symbol: (ctx, x, y) => {
                  // show every 5th point on line
            if (counter % 5 === 0) { ctx.arc(x, y, 2, 0, Math.PI * 2, false); }

            counter += 1;
          },
        },
        grid: {
          backgroundColor: { colors: ['#ffffff', '#ffffff'] },
          borderWidth: 1,
          borderColor: '#ffffff',
          margin: 0,
          minBorderMargin: 0,
          labelMargin: 20,
          hoverable: true,
          clickable: true,
          mouseActiveRadius: 6,
        },
        legend: {
          noColumns: 3,
          container: this.$chartLegend,
        },
        colors: ['#E2E1FF', '#3abf94', '#ffc247'],
        hooks: {
          draw: [this.onDrawHook.bind(this)],
        },
      });
    }
  }
  initEventListeners() {
    const self = this;

    this.$chartContainer.on('plothover', (event, pos, item) => {
      if (item) {
        const x = item.datapoint[0].toFixed(2);
        const y = item.datapoint[1].toFixed(2);

        self.$chartTooltip.html(`${item.series.label} at ${x} : ${y}`)
          .css({
            top: (item.pageY + 5) - window.scrollY,
            left: (item.pageX + 5) - window.scrollX,
          })
          .fadeIn(200);
      } else {
        self.$chartTooltip.hide();
      }
    });
  }

  render() {
    return (
        <Widget
            bodyClass="mt"
            className="mb-xlg"
            fetchingData={this.props.isReceiving}
            title={
                <Row>
                    <Col xs={12} sm={5}>
                        <h5>
                            Daily <span className="fw-semi-bold">Line Chart</span>
                        </h5>
                    </Col>
                    <Col xs={12} sm={7}>
                        <div className="d-flex justify-content-end">
                            <div ref={(r) => {
                                this.$chartLegend = $(r);
                            }}/>
                        </div>
                    </Col>
                </Row>
            }
        >
            <div ref={(r) => { this.$chartContainer = $(r); }} style={{ width: '100%', height: '250px' }} />
            <div className="chart-tooltip" ref={(r) => { this.$chartTooltip = $(r); }} />
        </Widget>
    );
  }
}
