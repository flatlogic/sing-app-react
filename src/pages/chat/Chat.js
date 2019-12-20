import React, { Component } from 'react';
import Search from './components/Search';
import Chats from './components/Chats';
import { Row, Col } from 'reactstrap';

class Chat extends Component {
  render() {
    return (
      <Row>
        <Col lg={3}>
          <Search />
          <Chats group />
          <Chats personal />
        </Col>
        <Col lg={6}>123</Col>
        <Col lg={3}>123</Col>
      </Row>
    )
  }
}

export default Chat;