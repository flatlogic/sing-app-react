import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, FormGroup, Input, Label } from 'reactstrap';
import Widget from '../../components/Widget';
import s from './Login.module.scss';
import { loginUser } from '../../actions/user';

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeLogin(event) {
    this.setState({ login: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    e.preventDefault();
    this.props.dispatch(loginUser({ login: this.state.login, password: this.state.password }));
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

    // cant access login page while logged in
    if (this.props.isAuthenticated) { // eslint-disable-line
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div className={s.root}>
        <Container>
          <h5 className={`${s.logo}`}>
            <i className="fa fa-circle text-gray" />
            sing
            <i className="fa fa-circle text-warning" />
          </h5>
          <Widget className={`${s.widget} mx-auto`} title={<h3 className="mt-0">Login to your Web App</h3>}>
            <p className={s.widgetLoginInfo}>
              Use Facebook, Twitter or your email to sign in.
            </p>
            {/* eslint-disable */}
            <p className={s.widgetLoginInfo}>
              Don't have an account? Sign up now!
            </p>
            {/* eslint-disable */}
            <form className="mt" onSubmit={this.doLogin}>
              {
                this.props.errorMessage && ( // eslint-disable-line
                  <Alert className="alert-sm" bsStyle="danger">
                    {this.props.errorMessage}
                  </Alert>
                )
              }
              <div className="form-group">
                <input className="form-control no-border" value={this.state.login} onChange={this.changeLogin} type="text" required name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <input className="form-control no-border" value={this.state.password} onChange={this.changePassword} type="password" required name="password" placeholder="Password" />
              </div>
              <div className="clearfix">
                <div className="btn-toolbar float-right">
                  <button type="reset" className="btn btn-secondary btn-sm">Create an Account</button>
                  <button type="submit" href="/app" className="btn btn-inverse btn-sm">{this.props.isFetching ? 'Loading...' : 'Login'}</button>
                </div>
              </div>
              <div className="row no-gutters mt-3">
                <div className="col">
                  <a className="mt-sm" href="#">Trouble with account?</a>
                </div>
                <div className="col =">
                  <FormGroup className="abc-checkbox float-right" check>
                    <Input id="checkbox1" type="checkbox" />{' '}
                    <Label className="fw-normal" for="checkbox1" check>
                      Keep me signed in
                    </Label>
                  </FormGroup>
                </div>
              </div>
            </form>
          </Widget>
        </Container>
        <footer className={s.footer}>
          2017 &copy; Sing. Admin Dashboard Template.
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));

