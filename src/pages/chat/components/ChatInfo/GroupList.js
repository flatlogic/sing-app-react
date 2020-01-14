import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import { openUsersList } from '../../../../actions/chat';
import ChatSearch from '../ChatSearch';
import OnlineStatus from '../OnlineStatus';
import s from './ChatInfo.module.scss';

class GroupList extends Component {

  findUser = (id) => {
    return this.props.users.find(u => u.id === id);
  }

  groupUsers = () => {
    return this.props.uids.map(uid => this.findUser(uid)) || [];
  }

  closeModal = () => {
    this.props.close()
    this.props.dispatch(openUsersList())
  }

  render() {
    const owner = this.props.user;
    owner.isOnline = true;
    return (
      <div className={`${s.groupListModal} animated fadeIn`}>
        <div className={s.groupListModalWrapper}>
          <div className={s.backdrop}></div>
          <section className={`${s.groupListModal} chat-section`}>
            <header className={s.groupListHeader}>
              <h5>{this.props.users.length} members</h5>
              <span className="text-muted" onClick={this.closeModal}>
                <i className={`la la-times ${s.laLg}`}></i>
              </span>
            </header>
            <ChatSearch classProp="mb-2 p-0" />
            <ul className={s.groupList}>
              {this.groupUsers().map(user => {
                if(user) {
                  return (
                    <li key={user.id}>
                      <Avatar
                        classProp="mr-2"
                        user={user}
                        size={40}
                        showStatus={false}
                      />
                      <div>
                        <p className="mb-0">{user.name} {user.surname}</p>
                        <small>
                          <OnlineStatus user={user} />
                        </small>
                      </div>
                    </li>
                  )
                } else {
                  return null;
                }}
              )}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.chat.users,
    user: state.chat.user,
  }
}

export default connect(mapStateToProps)(GroupList);