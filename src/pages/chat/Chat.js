import React, { Component } from 'react';
import Search from './components/Search';
import Chats from './components/Chats';
import InfoCard from './components/Info/InfoCard';
import InfoBlock from './components/Info/InfoBlock';
import GroupChat from './components/Chats/GroupChat';
import PersonalChat from './components/Chats/PersonalChat';
import { Row, Col } from 'reactstrap';
import s from './Chat.module.scss';

class Chat extends Component {
  render() {
    return (
      <div className={s.root}>
        <Row className="h-100">
          <Col lg={3}>
            <Search />
            <GroupChat />
            <PersonalChat />
          </Col>
          <Col lg={6}>
            <Chats />
          </Col>
          <Col lg={3}>
            <InfoCard />
            <InfoBlock />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Chat;