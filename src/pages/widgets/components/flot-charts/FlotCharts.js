import React from 'react';
import {
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import Widget from '../../../../components/Widget';
import s from './FlotCharts.module.scss';

import config from '../../../../config'

class FlotCharts extends React.PureComponent {

  generateRandomData = (labels) => {

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
        color: labels[i].color,
        name: labels[i].name
      });
    }
    return data;
  }

  render() {
   function getDate() {
     const month = ["January","February","March","April","May","June","July",
       "August","September","October","November","December"];
      const date = new Date();
      const m = date.getMonth();
      const y = date.getFullYear();
      return `${month[m]}, ${y}`
    }

    const options = {
      credits: {
        enabled: false
      },
      title: false,
      chart: {
        height: 200,
        margin: 0,
        backgroundColor: 'rgba(0,0,0,0)'
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5
        },
        series: {
          fillOpacity: 0.1,
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle'
          },
          states: {
            hover: {
              lineWidth: 1
            }
          }
        },
      },
      legend: false,
      xAxis: {
        visible: false,
        minPadding: 0,
        maxPadding: 0
      },
      yAxis: {
        visible: false,
        minPadding: 0,
        maxPadding: 0
      }
    };  
    return (<Row>
      <Col lg={6} xs={12}>
        <Widget
          title={<Row>
            <Col xs={4}>
              <h6>
                Total Sales
              </h6>
              <p className="value5">
                { getDate() }
              </p>
            </Col>
            <Col xs={4}>
              <h5>
                <small className="text-white">Best</small>
              </h5>
              <p className="value6 fs-sm">
                March, 2022 + 1
              </p>
            </Col>
          </Row>}
          settings close
        >
          <div className="chart-stats">
            <p className="text-light fs-mini mt-xs">
              <i className="fa fa-map-marker fa-5x pull-left" />
              <span className="fw-semi-bold">Jess:</span> Seems like statically it&apos;s getting impossible
                to achieve any sort of
                results in nearest future. The only thing we can hope for is pressing one of these two buttons:
              </p>
            <div className="btn-toolbar">
              <Button color="success" size="xs">Accept</Button>
              <Button color="default" size="xs">Reject</Button>
            </div>
          </div>
          <div className={`${s.chart}`}>
            <HighchartsReact highcharts={Highcharts} options={{...options, series: this.generateRandomData([{
                name: 'Visitors', color: config.app.themeColors.primary,
              }, {
                name: 'Charts', color: config.app.themeColors.danger,
              }])}} />
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
              <span className="text-light fs-mini">monthly report will be available in <button className="btn-link">6 hours</button></span>
            </Col>
          </Row>}
          settings close
        >
          <div className="chart-stats">
            <div className="row">
              <div className="col-md-5">
                <div className="clearfix m-t-1">
                  <h6 className="pull-left text-light mb-xs">
                      Income
                    </h6>
                  <p className="pull-right h6 mb-xs">
                    <span className="fw-semi-bold">$14,595</span>
                  </p>
                </div>
                <div className="clearfix">
                  <h6 className="pull-left no-margin text-light">
                      Recent
                    </h6>
                  <p className="pull-right">
                    <span className="fw-semi-bold">$7,647</span>
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-right m-t-1">
                <h6 className="text-light mb-xs">Inqueries</h6>
                <p className="fw-semi-bold">73 at 14am</p>
              </div>
              <div className="col-md-4 text-right m-t-1">
                <h6 className="text-light mb-xs">Last Updated</h6>
                <p className="fw-semi-bold">23.06.2013</p>
              </div>
            </div>
          </div>
          <div className={`${s.chart}`}>
            <HighchartsReact highcharts={Highcharts} options={{
              ...options,
              series: this.generateRandomData([{
                name: 'Controllers', color: config.app.themeColors.info,
              }, {
                name: 'Scopes', color: config.app.themeColors.default,
              }])
            }} />
          </div>
        </Widget>
      </Col>
    </Row>
    );
  }
}

export default FlotCharts;
