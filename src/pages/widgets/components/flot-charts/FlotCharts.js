import React from 'react';
import {
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import ReactFlot from 'react-flot';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Widget from '../../../../components/Widget';
import s from './FlotCharts.scss';

class FlotCharts extends React.Component {
  static generateRandomData(labels) {
    function random() {
      return (Math.floor(Math.random() * 30)) + 10;
    }

    const data = [];
    let maxValueIndex = 5;

    for (let i = 0; i < labels.length; i += 1) {
      const randomSeries = [];
      for (let j = 0; j < 25; j += 1) {
        randomSeries.push([j, Math.floor(maxValueIndex * j) + random()]);
      }
      maxValueIndex -= 1;
      data.push({
        data: randomSeries,
        showLabels: true,
        label: labels[i].label,
        labelPlacement: 'below',
        canvasRender: true,
        cColor: 'red',
        color: labels[i].color,
      });
    }
    return data;
  }

  render() {
    const flotOptions = {
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

    const generateData = this.constructor.generateRandomData;

    return (<Row>
      <Col lg={6} xs={12}>
        <Widget
          title={<Row>
            <Col xs={4}>
              <h6>
                Total Sales
              </h6>
              <p className="value5">
                January, 2018
              </p>
            </Col>
            <Col xs={3}>
              <h5>
                <small>Best</small>
              </h5>
              <p className="value6 fs-sm">
                March, 2018 + 1
              </p>
            </Col>
          </Row>}
          settings close
        >
          <div className="chart-stats">
            <p className="text-muted fs-mini mt-xs">
              <i className="fa fa-map-marker fa-5x pull-left" />
              <span className="fw-semi-bold text-gray-dark">Jess:</span> Seems like statically it&apos;s getting impossible
                to achieve any sort of
                results in nearest future. The only thing we can hope for is pressing one of these two buttons:
              </p>
            <div className="btn-toolbar">
              <Button color="success" size="xs">Accept</Button>
              <Button color="default" size="xs">Reject</Button>
            </div>
          </div>
          <div className={`${s.chart} bg-body-light`}>
            <ReactFlot
              id="product-chart-1"
              data={
                generateData([{
                  label: 'Visitors', color: '#777',
                }, {
                  label: 'Charts', color: '#dd5826',
                }])}
              options={flotOptions}
              height={'100%'}
            />
          </div>
        </Widget>
      </Col>
      <Col lg={6} xs={12}>
        <Widget
          className=" widget-chart-stats-simple" title={<Row>
            <Col xs={12}>
              <h6 className="mb-0">
                <span className="fw-semi-bold">Budget</span>&nbsp;<Badge pill color="danger">2017</Badge>
              </h6>
              <span className="text-muted fs-mini">monthly report will be available in <a href="#">6 hours</a></span>
            </Col>
          </Row>}
          settings close
        >
          <div className="chart-stats">
            <div className="row">
              <div className="col-md-5">
                <div className="clearfix m-t-1">
                  <h6 className="pull-left text-muted mb-xs">
                      Income
                    </h6>
                  <p className="pull-right h6 mb-xs">
                    <span className="fw-semi-bold">$14,595</span>
                  </p>
                </div>
                <div className="clearfix">
                  <h6 className="pull-left no-margin text-muted">
                      Recent
                    </h6>
                  <p className="pull-right">
                    <span className="fw-semi-bold">$7,647</span>
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-right m-t-1">
                <h6 className="text-muted mb-xs">Inqueries</h6>
                <p className="fw-semi-bold">73 at 14am</p>
              </div>
              <div className="col-md-4 text-right m-t-1">
                <h6 className="text-muted mb-xs">Last Updated</h6>
                <p className="fw-semi-bold">23.06.2013</p>
              </div>
            </div>
          </div>
          <div className={`${s.chart} bg-body-light`}>
            <ReactFlot
              id="product-chart-2"
              data={
                generateData([{
                  label: 'Controllers', color: '#777',
                }, {
                  label: 'Scopes', color: '#f0b518',
                }])}
              options={flotOptions}
              height={'100%'}
            />
          </div>
        </Widget>
      </Col>
    </Row>
    );
  }
}

export default withStyles(s)(FlotCharts);
