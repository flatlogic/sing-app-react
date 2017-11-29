import React from 'react';
import {
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import Widget from '../../../../components/Widget';

class FlotCharts extends React.Component {
  render() {
    return (<Row>
      <Col lg={6} xs={12}>
        <Widget
          title={<Row>
            <Col xs={3}>
              <h6>
                Total Sales
              </h6>
              <p className="value5">
                January, 2014
              </p>
            </Col>
            <Col xs={3}>
              <h5>
                <small>Best</small>
              </h5>
              <p className="value6 fs-sm">
                March, 2013 + 1
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
          <div className="chart bg-body-light">
            {/* <div flot-chart [data]="generateRandomData([{
            label: 'Visitors', color: configFn.darkenColor(config.settings.colors['gray-lighter'], .05)
          },{
            label: 'Charts', color: config.settings.colors['brand-danger']
          }])" className="chart-inner"></div>*/}
          </div>
        </Widget>
      </Col>
      <Col lg={6} xs={12}>
        <Widget
          className=" widget-chart-stats-simple" title={<Row>
            <h6 className="mb-0">
              <span className="fw-semi-bold">Budget</span>&nbsp;<Badge pill color="danger">2017</Badge>
            </h6>
            <br />
            <span className="text-muted fs-mini">monthly report will be available in <a href="#">6 hours</a></span>
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
            {/*        <div className="chart bg-body-light">
            <div flot-chart
            [data] = "generateRandomData([{
            label: 'Controllers', color: '#777'
          },{
            label: 'Scopes', color: config.settings.colors['brand-warning']
          }])" className="chart-inner"></div>
        </div>*/}
          </div>
        </Widget>
      </Col>
    </Row>
    );
  }
}

export default (FlotCharts);
