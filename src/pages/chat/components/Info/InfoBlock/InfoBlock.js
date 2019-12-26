import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import doc from '../../../../../images/icons/doc.svg';
import info from '../../../../../images/icons/info.svg';
import link from '../../../../../images/icons/link.svg';
import picture from '../../../../../images/icons/picture.svg';
import notification from '../../../../../images/icons/notification.svg';
import download from '../../../../../images/icons/download.svg';
import img1 from '../../../../../images/people/a1.jpg';
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
    });
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
                <ul className={s.personalInformation}>
                  <li>+375 29 123 45 67</li>
                  <li>Mobile</li>
                  <li>@jarow</li>
                  <li>Username</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="1" className={this.state.accordion[1] ? "active" : ""}>
            <img src={picture} alt="" /> Images (4)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className={s.listWithImages}>
                  <li>
                    <span className="thumb-sm ml">
                      <img className="rounded-circle" src={img1} alt="..."/>
                    </span>
                    <span className={s.imgText}>New image update</span>
                  </li>
                  <li>
                    <span className="thumb-sm ml">
                      <img className="rounded-circle" src={img1} alt="..."/>
                    </span>
                    <span className={s.imgText}>New image update</span>
                  </li>
                  <li>
                    <span className="thumb-sm ml">
                      <img className="rounded-circle" src={img1} alt="..."/>
                    </span>
                    <span className={s.imgText}>New image update</span>
                  </li>
                  <li>
                    <span className="thumb-sm ml">
                      <img className="rounded-circle" src={img1} alt="..."/>
                    </span>
                    <span className={s.imgText}>New image update</span>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="2" className={this.state.accordion[2] ? "active" : ""}>
            <img src={link} alt="" /> Links (6)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className={s.linksBody}>
                  <li>
                    <Link to="/analytics">Analytics</Link>
                  </li>
                  <li>
                    <Link to="/email">Email</Link>
                  </li>
                  <li>
                    <Link to="/charts">Charts</Link>
                  </li>
                  <li>
                    <Link to="/grid">Grid</Link>
                  </li>
                  <li>
                    <Link to="/map">Maps</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="3" className={this.state.accordion[3] ? "active" : ""}>
            <img src={doc} alt="" /> Files (5)
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
              <ul className={s.listWithImages}>
                  <li>
                    <img src={download} alt="..."/>
                    <span className={s.imgText}>Diagram_0126.jpg</span>
                  </li>
                  <li>
                    <img src={download} alt="..."/>
                    <span className={s.imgText}>Diagram_0127.jpg</span>
                  </li>
                  <li>
                    <img src={download} alt="..."/>
                    <span className={s.imgText}>Diagram_0128.jpg</span>
                  </li>
                  <li>
                    <img src={download} alt="..."/>
                    <span className={s.imgText}>Dynamic_tables_result.pdf</span>
                  </li>
                  <li>
                    <img src={download} alt="..."/>
                    <span className={s.imgText}>Diagram_product_managment.pdf</span>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }  
}

export default InfoBlock;