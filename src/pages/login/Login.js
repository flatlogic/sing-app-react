import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button } from 'reactstrap';
import Widget from '../../components/Widget';
import { loginUser, receiveToken } from '../../actions/user';
import jwt from "jsonwebtoken";
import microsoft from '../../images/microsoft.png';
import config from "../../config";

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        // We check if app runs with backend mode
        if (!config.isBackend && token) return true;
        if (!token) return;
        const date = new Date().getTime() / 1000;
        const data = jwt.decode(token);
        return date < data.exp;
    }

    constructor(props) {
        super(props);

        this.state = {
            email: 'admin@flatlogic.com',
            password: 'password',
        };

        this.doLogin = this.doLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.microsoftLogin = this.microsoftLogin.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    changeEmail(event) {
        this.setState({ email: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    doLogin(e) {
        e.preventDefault();
        this.props.dispatch(loginUser({ email: this.state.email, password: this.state.password }));
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

    signUp() {
        this.props.history.push('/register');
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
            <div className="auth-page">
                <Container>
                    <h5 className="auth-logo">
                        <i className="fa fa-circle text-primary" />
                        Sing App
                        <i className="fa fa-circle text-danger" />
                    </h5>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Login to your Web App</h3>}>
                        <p className="widget-auth-info">
                            Use your email to sign in.
                        </p>
                        <Alert className="alert-sm text-center mt-2" color="secondary">
                            This is a real app with Node.js backend - use
                            <br/>
                            <span className="font-weight-bold">"admin@flatlogic.com / password"</span>
                            <br/>
                            to login!
                        </Alert>
                        <form className="mt" onSubmit={this.doLogin}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <div className="form-group">
                                <input className="form-control no-border" value={this.state.email} onChange={this.changeEmail} type="email" required name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control no-border" value={this.state.password} onChange={this.changePassword} type="password" required name="password" placeholder="Password" />
                            </div>
                            <Button type="submit" color="info" className="auth-btn mb-3" size="sm">{this.props.isFetching ? 'Loading...' : 'Login'}</Button>
                            <p className="widget-auth-info">or sign in with</p>
                            <div className="social-buttons">
                                <Button onClick={this.googleLogin} color="primary" className="social-button mb-2">
                                    <i className="social-icon social-google"/>
                                    <p className="social-text">GOOGLE</p>
                                </Button>
                                <Button onClick={this.microsoftLogin} color="success" className="social-button">
                                    <i className="social-icon social-microsoft"
                                       style={{backgroundImage: `url(${microsoft})`}}/>
                                    <p className="social-text">MICROSOFT</p>
                                </Button>
                            </div>
                        </form>
                        <p className="widget-auth-info">
                            Don't have an account? Sign up now!
                        </p>
                        <Link className="d-block text-center" to="register">Create an Account</Link>
                    </Widget>
                </Container>
                <footer className="auth-footer">
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

