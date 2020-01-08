import React, { Component } from 'react';
import s from './Avatar.module.scss';

class Avatar extends Component {

  initials = (user) => {
    return user.name.charAt(0).toUpperCase() + user.surname.charAt(0).toUpperCase();
  }

  render() {
    const { user, size, showStatus } = this.props;
    return (
      <div className={s.avatar} style={{
        height: size + 'px',
        width: size + 'px',
        minWidth: size + 'px',
        }}
      >
        <div className={`${s.imageWrapper}`} style={{
          fontSize: size / 3 + 'px'
        }}>
          {user.avatar ? 
            <img src={user.avatar} alt="user avatar"/>
          : <span>{this.initials(user)}</span>}
          
        </div>
        {(user.isOnline && showStatus) ? 
          <span className={`${s.status} bg-success`}></span>
        :null}
        
    </div>
    )
  }
}

export default Avatar