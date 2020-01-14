import React, { Component } from 'react';
import moment from 'moment';

class OnlineStatus extends Component {

  wasOnline() {
    let calendarDate = moment(this.props.user.prevOnline).calendar();
    let firstLetter = calendarDate[0].toLowerCase();
    let substring = calendarDate.substr(1);

    return firstLetter + substring;
  }

  render() {
    const { user } = this.props;
    return (
      <p className="text-muted mb-0">
        {user.isOnline ? 
          <span className="text-info">Online</span>
        : <span>{`Last seen ${this.wasOnline()}`}</span>}
      </p>
    )
  }
}

export default OnlineStatus;