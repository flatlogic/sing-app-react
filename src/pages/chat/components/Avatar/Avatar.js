import React, { PureComponent } from 'react';
import uuid from 'uuid/v4';
import s from './Avatar.module.scss';

class Avatar extends PureComponent {

  initials = (user) => {
    return `${user?.name?.charAt(0).toUpperCase()}${user?.surname?.charAt(0).toUpperCase()}`;
  }

  render() {
    const { user, size, showStatus, group, stroke, classProp } = this.props;
    return (
      !group ? 
        <div className={`${s.avatar} ${classProp ? classProp : ""}`} style={{
          height: size + 'px',
          width: size + 'px',
          minWidth: size + 'px',
          }}
        >
          <div className={`${s.imageWrapper} ${stroke ? s.stroke : ''}`} style={{
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
      
      : (
        <div className={s.sharedDialog}>
          {user.avatar.map(img => (
          <div className={s.imgWrap} key={uuid()}>
            <img src={img} alt="alt"/>
          </div>
          ))}
        </div>
      )
    )
  }
}

export default Avatar