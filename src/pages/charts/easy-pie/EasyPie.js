import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!easy-pie-chart/dist/jquery.easypiechart.js';
/* eslint-enable */
import Widget from '../../../components/Widget';

class EasyPie extends PureComponent {
  componentDidMount() {
    this.initCharts();
  }

  initCharts() { // eslint-disable-line
    $('#easy-pie1').easyPieChart({
      barColor: '#8fe5d4',
      trackColor: '#f8f9fa',
      scaleColor: false,
      lineWidth: 10,
      size: 120,
    });

    $('#easy-pie2').easyPieChart({
      barColor: '#ffd7de',
      trackColor: '#f8f9fa',
      scaleColor: '#f55d5d',
      lineCap: 'butt',
      lineWidth: 22,
      size: 140,
      animate: 1000,
    });

    $('#easy-pie3').easyPieChart({
      barColor: '#ffebb2',
      trackColor: '#f8f9fa',
      scaleColor: '#ffc247',
      lineCap: 'butt',
      lineWidth: 22,
      size: 140,
      animate: 1000,
    });

    $('#easy-pie4').easyPieChart({
      barColor: '#b7b3ff',
      trackColor: false,
      scaleColor: '#6c757d',
      lineCap: 'square',
      lineWidth: 10,
      size: 120,
      animate: 1000,
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem>Charts</BreadcrumbItem>
          <BreadcrumbItem active>Easy Pie</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Charts</span></h1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Widget
              title={<h5>Easy Pie Charts</h5>}
              close collapse
            >
              <div className="text-center">
                <div className="easy-pie-chart-md mb-lg" id="easy-pie1" data-percent="73">
                  73
                </div>
              </div>
              <p className="fs-mini text-muted">
                Easy pie chart is a jQuery plugin that uses the canvas
                element to render simple pie charts for single values.
                These charts are highly customizable, very easy to
                implement, scale to the resolution of the display of
                the client to provide sharp charts even on retina displays.
              </p>
            </Widget>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Widget
              title={<h5>Easy Pie Charts</h5>}
              close collapse
            >
              <div className="text-center">
                <div className="easy-pie-chart-lg mb-lg" id="easy-pie2" data-percent="22">
                  22
                </div>
              </div>
              <div className="text-center">
                <div className="easy-pie-chart-lg mb-lg" id="easy-pie3" data-percent="88">
                  88
                </div>
              </div>
            </Widget>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Widget
              title={<h5>Easy Pie Charts</h5>}
              close collapse
            >
              <p className="fw-mini text-muted">
                Ok, but <span className="fw-semi-bold">when to use pie chart?</span> Pie
                charts are mostly used to show how much individual shares — such as
                quarterly sales figures — contribute to a total amount, such as annual sales.
              </p>
              <div className="text-center">
                <div className="easy-pie-chart-md mb-lg" id="easy-pie4" data-percent="43">
                  43
                </div>
              </div>
              <hr />
              <Row>
                <Col xs={3}>
                  <span className="widget-icon">
                    <i className="fi flaticon-like text-primary" />
                  </span>
                </Col>
                <Col xs={9}>
                  <div className="text-muted">
                    <h6 className="no-margin">TOTAL PROGRESS</h6>
                    <p className="h2 no-margin fw-normal">43,32%</p>
                  </div>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EasyPie;
