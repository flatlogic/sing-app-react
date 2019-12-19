import React from 'react';
import {
  Row,
  Col,
  Table,
} from 'reactstrap';

import Widget from '../../../components/Widget';

const Typography = () => (
  <div>
    <h1 className="page-title">Grid <span className="fw-semi-bold">System</span></h1>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5><span className="fw-semi-bold">How</span> it works</h5>}
          close collapse
        >
          <p>
            Bootstrap’s grid system uses a series of containers, rows, and columns to layout
            and align content. It’s built with flexbox and is fully responsive. Below is an
            example and an in-depth look at how the grid comes together.
          </p>
          <div className="bg-light p-3">
            <Row className="mb-lg">
              <Col xs={4}>
                <div className="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </Col>
              <Col xs={4}>
                <div className="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </Col>
              <Col xs={4}>
                <div className="py-4 bg-primary text-center text-white">
                  One of three columns
                </div>
              </Col>
            </Row>
            <pre className="bg-light border-0 w-100 h-100">
              <code className="text-danger">{'<Container>\n'}</code>
              <code className="text-success">{'  <Row>\n'}</code>
              <code className="text-info">{'    <Col xs={4}>\n'}</code>
              <code>{'      One of three columns\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col xs={4}>\n'}</code>
              <code>{'      One of three columns\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col xs={4}>\n'}</code>
              <code>{'      One of three columns\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-danger">{'</Container>'}</code>
            </pre>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5><span className="fw-semi-bold">Equal</span> width</h5>}
          close collapse
        >
          <p>
            For example, here are two grid layouts that apply to every device and viewport,
            from xs to xl. Add any number of unit-less classes for each breakpoint you
            need and every column will be the same width.
          </p>
          <div className="bg-light p-3">
            <Row className="mb-lg">
              <Col>
                <div className="py-4 bg-primary text-center text-white">
                  1 of 2
                </div>
              </Col>
              <Col>
                <div className="py-4 bg-primary text-center text-white">
                  2 of 2
                </div>
              </Col>
            </Row>
            <pre className="bg-light border-0 w-100 h-100">
              <code className="text-danger">{'<Container>\n'}</code>
              <code className="text-success">{'  <Row>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      1 of 2\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      1 of 2\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-danger">{'</Container>'}</code>
            </pre>
          </div>
        </Widget>
      </Col>
    </Row>
    <Row>
      <Col>
        <Widget
          title={<h5><span className="fw-semi-bold">Grid</span> options</h5>}
          close collapse
        >
          <p>
          While Bootstrap uses <code>em</code>s or <code>rem</code>s for defining
          most sizes, <code>px</code>s are used for
          grid breakpoints and container widths. This is because the viewport width is in
          pixels and does not change with the font size. See how aspects of the Bootstrap grid
          system work across multiple devices with a handy table.
          </p>
          <Table striped responsive>
            <thead>
              <tr>
                <th />
                <th className="text-center">
                  Extra small<br />
                  <small>&lt;576px</small>
                </th>
                <th className="text-center">
                  Small<br />
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                  Medium<br />
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                  Large<br />
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                  Extra large<br />
                  <small>≥1200px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">Max container width</th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Component property</th>
                <td><code>{'<Col xs={}>'}</code></td>
                <td><code>{'<Col sm={}>'}</code></td>
                <td><code>{'<Col md={}>'}</code></td>
                <td><code>{'<Col lg={}>'}</code></td>
                <td><code>{'<Col xl={}>'}</code></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row"># of columns</th>
                <td colSpan="5">12</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Gutter width</th>
                <td colSpan="5">30px (15px on each side of a column)</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Nestable</th>
                <td colSpan="5">Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Column ordering</th>
                <td colSpan="5">Yes</td>
              </tr>
            </tbody>
          </Table>
        </Widget>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Vertical <span className="fw-semi-bold">Alignment</span></h5>}
          close collapse
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div className="bg-light p-3">
            <Row className="mb-lg" style={{ height: '150px' }}>
              <Col className="align-self-start">
                <div className="py-4 bg-primary text-center text-white">
                  Start
                </div>
              </Col>
              <Col className="align-self-center">
                <div className="py-4 bg-primary text-center text-white">
                  Center
                </div>
              </Col>
              <Col className="align-self-end">
                <div className="py-4 bg-primary text-center text-white">
                  End
                </div>
              </Col>
            </Row>
            <pre className="bg-light border-0 w-100 h-100">
              <code className="text-danger">{'<Container>\n'}</code>
              <code className="text-success">{'  <Row>\n'}</code>
              <code className="text-info">{'    <Col className="align-self-start">\n'}</code>
              <code>{'      Start\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col className="align-self-center">\n'}</code>
              <code>{'      Center\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col className="align-self-end">\n'}</code>
              <code>{'      End\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-danger">{'</Container>'}</code>
            </pre>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Vertical <span className="fw-semi-bold">Alignment</span></h5>}
          close collapse
        >
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          <div className="bg-light p-3">
            <Row className="mb-lg justify-content-end">
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  1
                </div>
              </Col>
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  2
                </div>
              </Col>
            </Row>
            <Row className="mb-lg justify-content-around">
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  1
                </div>
              </Col>
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  2
                </div>
              </Col>
            </Row>
            <Row className="mb-lg justify-content-between">
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  1
                </div>
              </Col>
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  2
                </div>
              </Col>
              <Col xs={3}>
                <div className="py-4 bg-primary text-center text-white">
                  3
                </div>
              </Col>
            </Row>
            <pre className="bg-light border-0 w-100 h-100">
              <code className="text-danger">{'<Container>\n'}</code>
              <code className="text-success">{'  <Row className="justify-content-end">\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      1\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      2\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-success">{'  <Row className="justify-content-around">\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      1\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      2\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-success">{'  <Row className="justify-content-between">\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      1\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      2\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-info">{'    <Col>\n'}</code>
              <code>{'      3\n'}</code>
              <code className="text-info">{'    </Col>\n'}</code>
              <code className="text-success">{'  </Row>\n'}</code>
              <code className="text-danger">{'</Container>'}</code>
            </pre>
          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Typography;
