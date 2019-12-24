import React, { Component } from 'react';
import img1 from '../../../../../images/people/a1.jpg';
import img2 from '../../../../../images/people/a2.jpg';
import s from './PersonalChat.module.scss';

class ChatItem extends Component {

  state = {
    active: false
  }

  changeState = () => {
    this.setState({ active: true })
  }

  render() {
    return (
      <div className={`chat-block-style bg-white ${s.personalChats}`} >
        <h3>Chat Personal</h3>
        <div className={`${s.chatItem} ${this.state.active ? s.active : ''}`} onClick={this.changeState}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
        <div className={s.chatItem}>
          <div className={s.imgWrap}>
            <img src={img1} alt="alt"/>
          </div>
          <div className={s.textContent}>
            <h4>Rody Sam Fisher</h4>
            <span>If it takes ling you can mail m...</span>          
          </div>
          <div className={s.date}>9 Dec</div>
        </div>
      </div>
    )    
  }

}

export default ChatItem;