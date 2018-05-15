import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
} from 'reactstrap';

import Filters from './components/Filters/Filters';
import MessageTable from './components/MessageTable/MessageTable';

import s from './Email.scss';

class Email extends Component {
  state = {
    isNotificationOpen: true,
    filter: null,
    openedMessage: null,
    compose: false,
    composeData: null,
    alertAfter: false,
  }

  componentDidMount() {
    setTimeout(() => { this.fixAlert(); }, 0);
  }

  fixAlert() {
    this.setState({ alertAfter: true });
  }

  filter = (filter) => {
    this.setState({ filter, compose: false, composeData: null });
  }

  closeNotification() {
    this.setState({ isNotificationOpen: false });
  }

  openMessage = (id) => {
    this.setState(pvState => ({
      openedMessage: id,
      compose: id === null ? false : pvState.compose,
      composeData: id === null ? null : pvState.composeData,
    }));
  }

  changeCompose = (compose, data) => {
    this.setState({ compose });

    if (data) {
      this.setState({ composeData: data });
    }
  }

  render() {
    const {
      isNotificationOpen,
      filter,
      openedMessage,
      alertAfter,
      compose,
      composeData,
    } = this.state;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>Email</BreadcrumbItem>
        </Breadcrumb>
        <div className={s.pageTopLine}>
          <h1 className="page-title">Email - <span className="fw-semi-bold">Inbox</span></h1>
          <Alert
            isOpen={isNotificationOpen}
            color="success"
            toggle={() => this.closeNotification()}
            className={cx(s.alert, { [s.alertAfter]: alertAfter })}
          >
            Hey! This is a <span className="fw-semi-bold">real app</span> with CRUD and Search functions. Have fun!
          </Alert>
        </div>
        <div className={s.view}>
          <Filters
            filter={this.filter}
            openMessage={this.openMessage}
            compose={this.changeCompose}
          />
          <MessageTable
            filter={filter}
            openedMessage={openedMessage}
            openMessage={this.openMessage}
            compose={compose}
            changeCompose={this.changeCompose}
            composeData={composeData}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Email);
