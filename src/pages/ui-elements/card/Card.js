import React from 'react';
import {
  Row,
  Col,
  Button,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';

import lifestyleImg from '../../../images/cards/lifestyle.jpg';
import isometricImg from '../../../images/cards/isometric.jpg';
import mountainsImg from '../../../images/cards/mountains.jpeg';
import reactnativeImg from '../../../images/cards/rns.png';


const Cards = () => (
  <div>
    <h1 className="page-title">Cards - <span className="fw-semi-bold">Examples</span></h1>
    <p>
      A card is a flexible and extensible content container. It includes options for headers and footers,
      a wide variety of content, contextual background colors, and powerful display options. If you’re
      familiar with Bootstrap 3, cards replace its old panels, wells, and thumbnails. Similar functionality
      to those components is available as modifier classes for cards.
    </p>
    <Row>
      <Col>
        <Card
          className="background-cover border-0 mb-xlg"
          style={{ backgroundImage: `url(${lifestyleImg})` }}
        >
          <CardBody className="text-white">
            <span>13 Mar</span>
            <h3 className="mt-lg">Lifestyle brand</h3>
            <p className="w-75">A lifestyle brand is a company that markets its products or services to embody the
                interests, attitudes, and opinions of a group or a culture. Lifestyle brands
                seek to inspire, guide, and motivate people, with the goal of their products
                contributing to the definition of the consumer&apos;s way of life.</p>
            <Button className="btn-rounded-f mt-lg" color="danger">Full Article</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card className="border-0 mb-xlg">
          <CardImg top width="100%" src={isometricImg} alt="Card image cap" />
          <CardBody>
            <CardTitle>Isometric design</CardTitle>
            <CardText>
              Isometric projection is a method for visually representing three-dimensional in two
              dimensions in technical and engineering drawings.
            </CardText>
            <div className="w-100 text-center">
              <Button className="btn-rounded-f" color="primary">Full Article</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card className="mb-xlg border-0">
          <CardBody>
            <button className="btn-link fw-semi-bold text-success">Avg Rating</button>
            <button className="btn-link fw-semi-bold text-muted ml-sm">All Time</button>
            <hr />
            <div className="d-flex justify-content-between mb-lg">
              <div className="text-warning">
                <i className="fa fa-star mr-xs" />
                <i className="fa fa-star mr-xs" />
                <i className="fa fa-star mr-xs" />
                <i className="fa fa-star mr-xs" />
                <i className="fa fa-star" />
              </div>
              <span className="text-muted"><small>342 REVIEWS</small></span>
            </div>
            <div className="mb-lg">
              <h3 className="text-success mb-0">69%</h3>
              of customers recomend this product
            </div>
            <Button className="btn-rounded-f" color="success">Write a Review</Button>
          </CardBody>
        </Card>
        <Card className="mb-xlg border-0" style={{ position: 'relative' }}>
          <CardImg top width="100%" src={mountainsImg} alt="Card image cap" />
          <Badge className="mt-lg fw-thin rounded-0" color="success" style={{ position: 'absolute' }}>New</Badge>
          <CardBody>
            <CardTitle>Weekly Inspiration</CardTitle>
            <hr />
            <CardText>
              There are at least 109 mountains on Earts with elevations greeter than 7,200 meters
            </CardText>
            <Button className="border-0" color="default">Read More</Button>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card className="border-0 mb-4">
          <CardImg top width="100%" src={reactnativeImg} alt="Card image cap" />
          <CardBody>
            <small>Technology</small><br />
            <CardTitle className="mb mt-xs">
              React Native Starter
            </CardTitle>
            <hr />
            <div className="w-100 d-flex justify-content-between align-items-center">
              <span className="text-muted fw-semi-bold">from $49.95</span>
              <Button color="info">Read more</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Cards;
