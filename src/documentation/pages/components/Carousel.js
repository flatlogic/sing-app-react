import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

import firstSlide from '../../../images/slides/1.jpg';
import secondSlide from '../../../images/slides/2.jpg';
import thirdSlide from '../../../images/slides/3.jpg';

const carouselItems = [
  { src: firstSlide, caption: '' },
  { src: secondSlide, caption: '' },
  { src: thirdSlide, caption: '' },
];

class Buttons extends Component {
  render() {
    return (
      <Row>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Carousel</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col lg={9}>
          <h2>Carousel</h2>
          <p className="mb-lg">A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
          <SyntaxHighlighter language='javascript' style={tomorrow}>
            {"import { UncontrolledCarousel} from 'reactstrap';"}
          </SyntaxHighlighter>
          <UncontrolledCarousel className="mb-lg mt-lg" captionTex={null} items={carouselItems} />
          <SyntaxHighlighter language='javascript' style={tomorrow}>{'const carouselItems = [\n' +
          '  { src: firstSlide, caption: \'\' },\n' +
          '  { src: secondSlide, caption: \'\' },\n' +
          '  { src: thirdSlide, caption: \'\' },\n' +
          '];\n' +
          '\n' +
          '<UncontrolledCarousel captionTex={null} items={carouselItems} />'}
          </SyntaxHighlighter>
          For more examples please refer to <a href="https://reactstrap.github.io/components/carousel/" target="_blank"
                                               rel="noopener noreferrer">Reactstrap Carousel</a>
        </Col>
      </Row>
    );
  }
}

export default Buttons;
