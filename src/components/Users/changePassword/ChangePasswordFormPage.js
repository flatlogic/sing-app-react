import React, { Component } from 'react';
import ChangePasswordForm from 'components/Users/changePassword/ChangePasswordForm';
import { push } from 'connected-react-router';
import actions from '../../../actions/usersFormActions';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import cx from 'classnames';

import s from '../Users.module.scss';

class ChangePasswordFormPage extends Component {
  state = {
    dispatched: false,
    promoAlert: false,
  };

  doSubmit = (data) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePassword(data));
  };

  componentDidMount() {
    setTimeout(() => {
        this.showPromoAlert();
      }, 100);
  }

  showPromoAlert() {
    this.setState({promoAlert: true});
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-top-line">
          <h2 className="page-title">User - <span className="fw-semi-bold">Password</span></h2>
          <Alert
            color="primary"
            className={cx(s.promoAlert, {[s.showAlert]: this.state.promoAlert})}
          >
            This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com/admin-dashboards/sing-app-react-node-js" target="_blank">Sing App React with Node.js</a> integration!
          </Alert>
        </div>
        <ChangePasswordForm
          saveLoading={this.props.saveLoading}
          findLoading={this.props.findLoading}
          onSubmit={this.doSubmit}
          onCancel={() => this.props.dispatch(push('/app/main'))}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    findLoading: store.users.form.findLoading,
    saveLoading: store.users.form.saveLoading,
  };
}

export default connect(mapStateToProps)(ChangePasswordFormPage);
