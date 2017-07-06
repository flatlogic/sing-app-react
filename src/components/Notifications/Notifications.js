import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  ButtonGroup,
  Button,
} from 'reactstrap';
import NotificationsDemo from './notifications-demo/Notifications';
import MessagesDemo from './notifications-demo/Messages';
import ProgressDemo from './notifications-demo/Progress';

import s from './Notifications.scss';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationsTabSelected: 1,
    };
  }

  changeNotificationsTab(tab) {
    this.setState({
      notificationsTabSelected: tab,
    });
  }
  render() {
    let notificationsTab;

    switch (this.state.notificationsTabSelected) {
      case 1:
        notificationsTab = (<NotificationsDemo />);
        break;
      case 2:
        notificationsTab = (<MessagesDemo />);
        break;
      case 3:
        notificationsTab = (<ProgressDemo />);
        break;
      default:
        notificationsTab = (<NotificationsDemo />);
        break;
    }
    return (
      <section className={`${s.notifications} card navbar-notifications`}>
        <header className={[s.cardHeader, 'card-header'].join(' ')}>
          <div className="text-center mb-sm">
            <strong>You have 13 notifications</strong>
          </div>
          <ButtonGroup id="notification-buttons">
            <Button color="secondary" onClick={() => this.changeNotificationsTab(1)} active={this.state.notificationsTabSelected === 1}>Notifications</Button>
            <Button color="secondary" onClick={() => this.changeNotificationsTab(2)} active={this.state.notificationsTabSelected === 2}>Messages</Button>
            <Button color="secondary" onClick={() => this.changeNotificationsTab(3)} active={this.state.notificationsTabSelected === 3}>Progress</Button>
          </ButtonGroup>
        </header>
        {notificationsTab}
        <footer className={[s.cardFooter, 'text-sm', 'card-footer'].join(' ')}>
          <Button
            color="link"
            className={[s.btnNotificationsReload, 'btn-xs', 'float-right', 'py-0'].join(' ')}
            id="load-notifications-btn"
          >
            <i className="fa fa-refresh" />
          </Button>
          <span className="fs-mini">Synced at: 21 Apr 2014 18:36</span>
        </footer>
      </section>
    );
  }
}

export default withStyles(s)(Notifications);
