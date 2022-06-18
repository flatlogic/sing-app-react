import React from 'react';
import {
  Row,
  Col,
  UncontrolledCarousel,
} from 'reactstrap';

import firstSlide from '../../../images/slides/slide1.jpg';
import secondSlide from '../../../images/slides/slide2.jpg';
import thirdSlide from '../../../images/slides/slide3.jpg';

const carouselItems = [
  { src: firstSlide, caption: '', key: 1, },
  { src: secondSlide, caption: '', key: 2, },
  { src: thirdSlide, caption: '', key: 3, },
];

const Carousel = () => (
  <div>
    <p>
      The carousel is a slideshow for cycling through a series of content, built with
      CSS 3D transforms and a bit of JavaScript. It works with a series of images, text,
      or custom markup. It also includes support for previous/next controls and indicators.
    </p>
    <Row>
      <Col>
        <UncontrolledCarousel items={carouselItems} />
      </Col>
    </Row>
  </div>
);

export default Carousel;
