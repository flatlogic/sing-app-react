import React from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from 'reactstrap';

import Widget from '../../../components/Widget';

class ModalExample extends React.Component {
  state = {
    demo: false,
    verticallyCentered: false,
    large: false,
    small: false,
    launch: false,
  }

  toggle(id) {
    this.setState(prevState => ({
      [id]: !prevState[id],
    }));
  }

  render() {
    const { demo, scrollingLong, large, small, launch } = this.state;
    return (
      <div>
        <h1 className="page-title">Modal - <span className="fw-semi-bold">Examples</span></h1>
        <Row>
          <Col xs={12} md={6}>
            <Widget
              className="mb-xlg"
              title={<h5>Live <span className="fw-semi-bold">Demo</span>
              </h5>} close collapse
            >
              <p>
                Toggle a working modal demo by clicking the button below. It
                will slide down and fade in from the top of the page.
              </p>
              <Button className="mr-sm" color="primary" onClick={() => this.toggle('demo')}>Demo</Button>
              <Button color="primary" onClick={() => this.toggle('scrollingLong')}>Scrolling long content</Button>
            </Widget>
            <Widget
              title={<h5>Optional <span className="fw-semi-bold">Sizes</span></h5>}
              close collapse
            >
              <p>
              Modals have two optional sizes, available via modifier .modal-sm and .modal-lg
              classes to be placed on a .modal-dialog. These sizes kick in at certain
              breakpoints to avoid horizontal scrollbars on narrower viewports.
              </p>
              <Button className="mr-sm" color="primary" onClick={() => this.toggle('large')}>Large modal</Button>
              <Button color="primary" onClick={() => this.toggle('small')}>Small modal</Button>
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              className="mb-xlg"
              title={<h5>Using <span className="fw-semi-bold">Grid</span> </h5>}
              close collapse
            >
              <p>
                Utilize the Bootstrap grid system within a modal by nesting <code>&lt;Container fluid&gt;</code> within
                the <code>&lt;ModalBody&gt;</code>. Then, use the normal grid system classes as you would anywhere else.
              </p>
              <div className="bg-light p-3">
                <Button color="primary" onClick={() => this.toggle('launch')}>Launch</Button>
                <pre className="bg-light border-0 w-100 h-100">
                  <code className="text-danger">{'<Container fluid>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={4}>\n'}</code>
                  <code>{'      .col-md-4\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-info">{'    <Col md={4} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-4 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={3} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-3 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-info">{'    <Col md={4} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-4 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={6} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-6 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-danger">{'</Container>'}</code>
                </pre>
              </div>
            </Widget>
          </Col>
        </Row>

        {/* Modals */}
        <Modal isOpen={demo} toggle={() => this.toggle('demo')}>
          <ModalHeader toggle={() => this.toggle('demo')}>Modal title</ModalHeader>
          <ModalBody className="bg-white">
            ...
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle('demo')}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={scrollingLong} toggle={() => this.toggle('scrollingLong')}>
          <ModalHeader toggle={() => this.toggle('scrollingLong')}>Long content</ModalHeader>
          <ModalBody className="bg-white">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle('scrollingLong')}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>

        <Modal size="lg" isOpen={large} toggle={() => this.toggle('large')}>
          <ModalHeader toggle={() => this.toggle('large')}>Large modal</ModalHeader>
          <ModalBody className="bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle('large')}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>

        <Modal size="sm" isOpen={small} toggle={() => this.toggle('small')}>
          <ModalHeader toggle={() => this.toggle('small')}>Small modal</ModalHeader>
          <ModalBody className="bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle('small')}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={launch} toggle={() => this.toggle('launch')}>
          <ModalHeader toggle={() => this.toggle('launch')}>Small modal</ModalHeader>
          <ModalBody className="bg-white text-white">
            <Container fluid>
              <Row>
                <Col md={4}><div className="h-100 w-100 bg-primary p-2">.col-md-4</div></Col>
                <Col md={4} className="ml-auto"><div className="h-100 w-100 bg-primary p-2">.col-md-4 .ml-auto</div></Col>
              </Row>
              <Row className="mt-sm">
                <Col md={3} className="ml-auto"><div className="h-100 w-100 bg-primary p-2">.col-md-3 .ml-auto</div></Col>
                <Col md={4} className="ml-auto"><div className="h-100 w-100 bg-primary p-2">.col-md-4 .ml-auto</div></Col>
              </Row>
              <Row className="mt-sm">
                <Col md={6} className="ml-auto"><div className="h-100 w-100 bg-primary p-2">.col-md-6 .ml-auto</div></Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle('launch')}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default ModalExample;
