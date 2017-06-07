import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Container } from 'reactstrap';
import Widget from '../../components/Widget';
import s from './Login.scss';
import { loginUser } from '../../actions/user';

class Login extends React.Component {
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
    this.props
      .dispatch(loginUser({ login: this.state.login, password: this.state.password })); // eslint-disable-line
    e.preventDefault();
  }

  render() {
    return (
      <div className={s.root}>
        <Container>
          <Row>
            <Col xs={10} xsOffset={1} sm={6} smOffset={3} lg={4} lgOffset={4}>
              <p className="text-center">React Dashboard</p>
              <Widget className={s.widget}>
                <h4 className="mt-0">Login to your Web App</h4>
                <p className="fs-sm text-muted">
                  User your username and password to sign in<br />
                  Don&#39;t have an account? Sign up now!
                </p>
                <form className="mt" onSubmit={this.doLogin}>
                  <div className="form-group">
                    <input className="form-control no-border" value={this.state.login} onChange={this.changeLogin} type="text" required name="username" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input className="form-control no-border" value={this.state.password} onChange={this.changePassword} type="password" required name="password" placeholder="Password" />
                  </div>
                  <div className="clearfix">
                    <div className="btn-toolbar float-right">
                      <button type="reset" className="btn btn-default btn-sm">Create an account</button>
                      <button type="submit" className="btn btn-success btn-sm">Login</button>
                    </div>
                    <a className="mt-sm float-right fs-sm">Trouble with account?</a>
                  </div>
                </form>
              </Widget>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Login);
