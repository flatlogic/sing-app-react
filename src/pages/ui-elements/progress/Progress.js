import React from 'react';
import {
  Row,
  Col,
  Progress,
} from 'reactstrap';

import Widget from '../../../components/Widget';

const ProgressExamples = () => (
  <div>
    <h1 className="page-title">Progress</h1>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Progress <span className="fw-semi-bold">Example</span></h5>}
          close collapse
        >
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <Progress className="mb-sm" value="25" />
          <Progress className="mb-sm" value="50" />
          <Progress className="mb-sm" value="75" />
          <Progress value="100" />
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Backgrounds</h5>}
          close collapse
        >
          <p>
            Use background utility classes to change the appearance of
            individual progress bars.
          </p>
          <Progress className="mb-sm" value="25" color="info" />
          <Progress className="mb-sm" value="50" color="warning" />
          <Progress className="mb-sm" value="75" color="danger" />
          <Progress value="100" color="success" />
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Labels</h5>}
          close collapse
        >
          <p>
            Add labels to your progress bars by placing text within the <code>&lt;Progress&gt;</code>
          </p>
          <Progress className="mb-sm" value="25">25%</Progress>
          <Progress className="mb-sm" value="100" color="danger">Something was wrong!</Progress>
          <Progress value="100" color="success">Completed!</Progress>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Size</h5>}
          close collapse
        >
          <p>
          We only set a height value on the <code>&lt;Progress&gt;</code>, so if you change that value the inner
          bar will automatically resize accordingly. Also <code>.progress-sm</code> is available.
          </p>
          <Progress className="progress-sm mb-sm" value="25" color="inverse">25%</Progress>
          <Progress className="mb-sm" value="50" color="inverse">50%</Progress>
          <Progress value="75" color="inverse" style={{ height: '30px' }}>75%</Progress>
        </Widget>
      </Col>
      <Col xs={12}>
        <Widget
          title={<h5><span className="fw-semi-bold">Striped</span> Progress</h5>}
          close collapse
        >
          <Row>
            <Col xs={12} md={6}>
              <p>
                Add <code>striped</code> property to any <code>&lt;Progress&gt;</code> to
                apply a stripe via CSS gradient over the progress bar’s background color.
              </p>
              <Progress striped className="mb-sm" value="10" />
              <Progress striped className="mb-sm" value="25" color="success" />
              <Progress striped className="mb-sm" value="50" color="info" />
              <Progress striped className="mb-sm" value="75" color="warning" />
              <Progress striped value="100" color="danger" />
            </Col>
            <Col xs={12} md={6}>
              <p>
                The striped gradient can also be animated. Add <code>animated</code> property
                to <code>&lt;Progress&gt;</code> to animate the stripes right to left via CSS3 animations.
              </p>
              <Progress animated striped className="mb-sm" value="10" color="danger" />
              <Progress animated striped className="mb-sm" value="25" color="warning" />
              <Progress animated striped className="mb-sm" value="50" color="info" />
              <Progress animated striped className="mb-sm" value="75" color="success" />
              <Progress animated striped value="100" />
            </Col>
          </Row>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default ProgressExamples;
