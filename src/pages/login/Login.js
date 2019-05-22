import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, FormGroup, Input, Label, Button } from 'reactstrap';
import cx from "classnames";
import Widget from '../../components/Widget';
import s from './Login.module.scss';
import { loginUser, receiveToken } from '../../actions/user';
import jwt from "jsonwebtoken";
import microsoft from '../../images/microsoft.png';

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        if (!token) return;
        const date = new Date().getTime() / 1000;
        const data = jwt.decode(token);
        return date < data.exp;
    }

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        };

        this.doLogin = this.doLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.microsoftLogin = this.microsoftLogin.bind(this);
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

    googleLogin() {
        this.props.dispatch(loginUser({social: "google"}));
    }

    microsoftLogin() {
        this.props.dispatch(loginUser({social: "microsoft"}));
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const token = params.get('token');
        if (token) {
            this.props.dispatch(receiveToken(token));
        }
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(localStorage.getItem('token'))) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div className={s.root}>
                <Container>
                    <h5 className={`${s.logo}`}>
                        <i className="fa fa-circle text-gray" />
                        Sing App
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
                            <p className={s.widgetLoginInfo}>or sign in with</p>
                            <div className={s.socialButtons}>
                                <Button onClick={this.googleLogin} color="primary" className={cx(s.socialButton, "mb-2")}>
                                    <i className={cx(s.socialGoogle, s.socialIcon)}/>
                                    <p className={s.socialText}>GOOGLE</p>
                                </Button>
                                <Button onClick={this.microsoftLogin} color="success" className={s.socialButton}>
                                    <i className={cx(s.socialMicrosoft, s.socialIcon)}
                                       style={{backgroundImage: `url(${microsoft})`}}/>
                                    <p className={s.socialText}>MICROSOFT</p>
                                </Button>
                            </div>
                            <div className="clearfix">
                                <div className="btn-toolbar float-right">
                                    <button type="reset" className="btn btn-default btn-sm">Create an Account</button>
                                    <button type="submit" href="/app" className="btn btn-inverse btn-sm">{this.props.isFetching ? 'Loading...' : 'Login'}</button>
                                </div>
                            </div>
                            <div className="row no-gutters mt-3">
                                <div className="col-5">
                                    <a className="mt-sm" href="#">Trouble with account?</a>
                                </div>
                                <div className="col-7">
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
                    2019 &copy; Sing App - React Admin Dashboard Template.
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

