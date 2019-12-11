import React, { Component } from 'react'
import s from '../Chat.module.scss'

class Dialogs extends Component {
  render() {
    return (
      <div>
        {this.props.chatLists.map(x =>
          <div 
            className={`${s.chat} row`} 
            key={x.id} 
            onClick={() => this.onLoadChatMessages(x.messageLists)}
          >
            <div className="col-md-2" style={{ position: "relative" }}>
              {x.online ? <div className={s.profileStatus}></div> : ""}
              <img className={s.imgIcon} src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
            </div>
              <div className="col-md-6">
                <h3 className={s.chatHeader}>{x.name}</h3>
                <div className={s.chatDetails}>
                    {x.message}
                </div>
              </div>
              <div className={`col-md-4 ${s.chatOtherDetails}`}>
                <ul>
                  <li className={s.chatDetails}>02 Feb</li>
                  <li style={{ float: "right" }}>
                      <div className={s.chatNotification}>5</div>
                  </li>
                </ul>
              </div>
            </div>
          )};
      </div>
    )
  }
}

export default Dialogs