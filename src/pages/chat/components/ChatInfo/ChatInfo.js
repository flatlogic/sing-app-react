import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import uuid from 'uuid/v4';
import Avatar from '../Avatar';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { MobileChatStates } from '../../../../reducers/chat';
import { changeMobileState, openUsersList } from '../../../../actions/chat';
import GroupList from './GroupList';
import doc from '../../../../images/icons/doc.svg';
import info from '../../../../images/icons/info.svg';
import link from '../../../../images/icons/link.svg';
import picture from '../../../../images/icons/picture.svg';
import notification from '../../../../images/icons/notification.svg';
import download from '../../../../images/icons/download.svg';
import img1 from '../../../../images/people/a1.jpg';
import s from './ChatInfo.module.scss';


class ChatInfo extends Component {

  state = {
    accordion: [
      true,false,false,false
    ],
    openedGroupList: false
  }

  updateKye = (e) => {
    let updatedArray = [false,false,false,false];
    updatedArray[e] = !this.state.accordion[e];
    this.setState({
      accordion: updatedArray
    });
  }

  info = () => {
    let chat = this.props.chats.find(chat => chat.id === this.props.activeChatId);
    if (chat && chat.isGroup) {
      return {...chat}
    }
    return {...this.findInterlocutor(chat), ...chat};
  }

  findInterlocutor = (chat) => {
    if (!chat || !chat.id) {
      return null;
    }
    let id = chat.users.find(uid => uid !== this.props.user.id);
    return this.findUser(id);
  }

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
  }

  shortUsersList() {
    if (this.chatUsers().length <= 3) {
      return [...this.chatUsers()];
    } else {
      return this.chatUsers().slice(0, 3);
    }
  }

  chatUsers = () => {
    return this.info().users.map(uid => this.findUser(uid));
  }

  createdBy = () => {
    let user = this.findUser(this.info().createdBy);
    return `${user.name} ${user.surname}`;
  }

  createdAt = () => {
    return moment(this.info().createdAt).format('MMMM DD, YYYY');
  }

  openModal = () => {
    this.props.dispatch(openUsersList())
    this.setState({ openedGroupList: true })
  }

  render() {
    return (
      <div className="chat-info-section">
      <div className="d-lg-none chat-mobile-navigation" onClick={() => this.props.dispatch(changeMobileState(MobileChatStates.CHAT))}>
        <i className="la la-angle-left la-lg"></i>
        Dialog
      </div>
        {!this.info().isGroup ? 
            <section className={`${s.chatInfoHeader} chat-section bg-info`}>
              <div className="d-flex mb-3 justify-content-between">
                <header>
                  <h3 className="mb-3 fw-semi-bold">{this.info().name} {this.info().surname}</h3>
                  <h5>{this.info().company}</h5>
                  <h6>{this.info().position}</h6>
                </header>
                <Avatar className="ml-auto mr-3" user={this.info()} size="70" showStatus={false}/>
              </div>
            <footer className="d-flex align-items-center justify-content-between">
              <a href={'mailto:' + this.info().email} className="text-white mt-2">{this.info().email}</a>
              {this.info().social ? (
                <ul className={`${s.socialLinks} mt-2`}>
                  <li className={`${s.socialLink}`}>
                    <a href={this.info().social.facebook}><i className="fa fa-facebook"></i></a>
                  </li>
                  <li className={`${s.socialLink}`}>
                    <a href={this.info().social.twitter}><i className="fa fa-twitter"></i></a>
                  </li>
                  <li className={`${s.socialLink}`}>
                    <a href={this.info().social.linkedin}><i className="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              ):null}
            </footer>
          </section>        
        :
        <section className={`${s.chatInfoHeader} chat-section bg-info`}>
        <div className="d-flex align-items-center mb-3">
          <h4 className="mb-0 fw-semi-bold">{this.info().name}</h4>
          <ul className={`${s.avatarsRow} ml-auto`}>
            {this.shortUsersList().map(user => (
              <li key={uuid()}><Avatar showStatus={false} user={user} size={35} stroke={true}/></li>
            ))}
          </ul>
        </div>
        <footer className="d-flex align-items-center justify-content-between">
          <h5 className={`${s.cursorStyle} text-white mb-0`} onClick={this.openModal}>{this.info().users.length-1} members</h5>
          <Button color="white" className={`text-info fw-semi-bold`}>
            Add people
          </Button>
        </footer>
        {this.state.openedGroupList ?
        <GroupList 
          uids={this.info().users}
          close={() => this.setState({ openedGroupList: false })}
        />
        :null}
      </section>
        }


      <div className={`chat-section bg-white ${s.dynamicCard} pl-0 mb-0`}>

        <Accordion defaultActiveKey="0" onSelect={this.updateKye}>
          <Card>
            <Accordion.Toggle eventKey="0" className={this.state.accordion[0] ? "active" : ""}>
              <div className={s.toggleHeader}><img src={info} alt="" /> Information<i className="la la-angle-up ml-auto"></i></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {!this.info().isGroup ? 
                  <ul className={s.personalInformation}>
                    <li>{this.info()?.tel}</li>
                    <li>Mobile</li>
                    <li>@{this.info()?.username}</li>
                    <li>Username</li>
                  </ul>
                :
                  <ul className={s.personalInformation}>
                    <li>{this.info()?.name}</li>
                    <li>Name</li>
                    <li>by {this.createdBy()} on {this.createdAt()}</li>
                    <li>Created</li>
                  </ul>
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={`card`}>
           <button>
          <label htmlFor="checkbox-ios1" className={`${s.switch} ${s.toggleHeader} switch ml-auto mb-0`}>
            <span><img src={notification} alt="" /> Notifications</span>
              <div><input type="checkbox" id="checkbox-ios1" className="ios form-check-input"/>
              <i></i></div>
            </label>
            </button>
        </div>
          <Card>
            <Accordion.Toggle eventKey="1" className={this.state.accordion[1] ? "active" : ""}>
            <div className={s.toggleHeader}><img src={picture} alt="" /> Images (4)<i className="la la-angle-up ml-auto"></i></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {!this.info().images?.length ? 
                <p className="text-muted"><i>No images</i></p>
                :
                <ul className={s.listWithImages}>
                  <li>
                    <span className="thumb-sm">
                      <img className="rounded-circle" src={img1} alt="..."/>
                    </span>
                    <span className={s.imgText}>New image update</span>
                  </li>
                </ul>
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="2" className={this.state.accordion[2] ? "active" : ""}>
            <div className={s.toggleHeader}><img src={link} alt="" /> Links (6)<i className="la la-angle-up ml-auto"></i></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>

              {!this.info().links?.length ? 
                <p className="text-muted"><i>No images</i></p>
                :
                <ul className={s.linksBody}>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle eventKey="3" className={this.state.accordion[3] ? "active" : ""}>
            <div className={s.toggleHeader}><img src={doc} alt="" /> Files (5)<i className="la la-angle-up ml-auto"></i></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="files-tab">
              {!this.info().files?.length ? 
                <p className="text-muted"><i>No files</i></p>
                :
                <ul className={s.listWithImages}>
                  {this.info().files.map(file => (
                    <li key={file.id}>
                      <img src={download} alt="..."/>
                      <a href={file.url} className={s.imgText}>{file.name}</a>
                    </li>
                  ))}
                </ul>
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      </div>
    )
  }  
}

function mapStateToProps(state) {
  return {
    activeChatId: state.chat.activeChatId,
    chats: state.chat.chats,
    user: state.chat.user,
    users: state.chat.users,
  }
}

export default connect(mapStateToProps)(ChatInfo);