import React, { PureComponent } from 'react';
import { Row, Col, Alert, Progress } from 'reactstrap';

import BarsChart from './charts/BarsChart';
import LineChart from './charts/LineChart';
import ScatterplotChart from './charts/ScatterplotChart';
import RealtimeChart from './charts/RealtimeChart';

import Widget from '../../../components/Widget';

class RickshawExamples extends PureComponent {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Widget
              title={<h5>Bias <span className="fw-semi-bold">Rickshaw</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted mb-lg">
                Basic scatter plot with two overlapping series. Based on d3 library,
                which is extremely fast and powerful. Customize it to visualize and
                analyze your data.
              </p>
              <ScatterplotChart />
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={7} xl={8}>
            <Widget
              title={<h5>Line Chart - <span className="fw-semi-bold">Rickshaw</span></h5>}
              close collapse
            >
              <Alert className="alert-transparent rounded-0 mb-3" color="primary">
                <span className="fw-semi-bold">Important alert</span>: It&apos;s time to buy Tesla shares!
              </Alert>
              <LineChart />
            </Widget>
          </Col>
          <Col xs={12} lg={5} xl={4}>
            <Widget
              title={<h5>Stacked Bar Chart - <span className="fw-semi-bold">Rickshaw</span></h5>}
              close collapse
            >
              <p className="fs-mini text-muted">
                You can combine Rickshaw charts with <span className="fw-semi-bold">Bootstrap</span> components
                for data visualization and call to action.
              </p>
              <p className="text-muted">A simple success alert—check it out!</p>
              <BarsChart colors={['#a7beff', '#d1dcff', '#ffebb2']} seriesLength={10} bars={3} stacked />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Bar Chart - <span className="fw-semi-bold">Rickshaw</span></h5>}
              collapse close
            >
              <p className="fs-mini text-muted">
                Rickshaw charts give you a possibility to enter the low level settings, when
                you need it, so you can always refer to d3 attributes and DOM elements to create
                your awesome custom chart.
              </p>
              <BarsChart colors={['#ace5d1', '#ffebb2']} seriesLength={12} bars={2} />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Realtime <span className="fw-semi-bold">Rickshaw</span></h5>}
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
                <Progress value="60" color="primary" size="xs" className="mb-sm progress-xs" />
                <p className="fs-mini text-muted mb-lg">
                  <span className="circle bg-primary text-white">
                    <i className="fa fa-circle" />
                  </span>
                  &nbsp;
                  Target <span className="fw-semi-bold">820</span> users
                  is <span className="fw-semi-bold">96%</span> reached.
                </p>
                <RealtimeChart />
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RickshawExamples;
