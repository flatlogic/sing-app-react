import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import doc from '../../../../../images/icons/doc.svg';
import info from '../../../../../images/icons/info.svg';
import link from '../../../../../images/icons/link.svg';
import picture from '../../../../../images/icons/picture.svg';
import notification from '../../../../../images/icons/notification.svg';
import download from '../../../../../images/icons/download.svg';
import s from './InfoBlock.module.scss';


class InfoBlock extends Component {

  state = {
    accordion: [
      false,false,false,false
    ],
  }

  updateKye = (e) => {
    let updatedArray = [false,false,false,false];
    updatedArray[e] = !this.state.accordion[e];
    this.setState({
      accordion: updatedArray
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className={`chat-block-style bg-white ${s.dynamicCard}`}>
        <div className={s.notificationToggle}>
           

          <div className="toggle">
            <input type="checkbox" id="temp" />
            <label htmlFor="temp"><img src={notification} alt="" /> Notifications</label>
          </div>
        </div>
        <Accordion onSelect={this.updateKye}>
          <Card>
            <Accordion.Toggle eventKey="0" className={this.state.accordion[0] ? "active" : ""}>
              <img src={info} alt="" /> Information
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              +375 29 123 45 67
              Mobile
              @jarow
              Username
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="1" className={this.state.accordion[1] ? "active" : ""}>
            <img src={picture} alt="" /> Images (154)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="2" className={this.state.accordion[2] ? "active" : ""}>
            <img src={link} alt="" /> Links (28)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="3" className={this.state.accordion[3] ? "active" : ""}>
            <img src={doc} alt="" /> Filex (3)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }  
}

export default InfoBlock;