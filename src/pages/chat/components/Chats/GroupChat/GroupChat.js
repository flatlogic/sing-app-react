import React, { Component } from 'react';
import img1 from '../../../../../images/people/a1.jpg';
import s from './GroupChat.module.scss';

class ChatItem extends Component {

  state = {
    active: false
  }

  changeState = () => {
    this.setState({ active: true })
  }

  render() {
    return (
      <div className={`chat-block-style bg-white mb-4 ${s.groupChats}`} >
        <h5>Personal Chats</h5>
        <div className={`${s.chatItem} ${this.state.active ? s.active : ''}`} onClick={this.changeState}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
          <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            
            <span>If it takes ling you can mail m...</span>
            
          </div>
          <div className={`${`${s.date} d-flex align-items-center flex-column`} d-flex align-items-center flex-column`}>
            9 Dec
            <span className="ml-1 circle bg-primary text-white fw-bold mt-2">7</span>
          </div>
          
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>
            9 Dec
            <span className="ml-1 circle bg-danger text-white fw-bold mt-2">11</span>
          </div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>
            9 Dec
            <span className="ml-1 circle bg-success text-white fw-bold mt-2">7</span>
          </div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.sharedDialog}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          </div>
          <div className={s.textContent}>
            <h4><i className="fa fa-group"></i>Light Blue Group (128)<i className="fa fa-paperclip"></i>   </h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={`${s.date} d-flex align-items-center flex-column`}>9 Dec</div>
        </div>
      </div>
    )    
  }

}

export default ChatItem;