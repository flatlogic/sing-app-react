import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Alert, Button } from 'reactstrap';
import Widget from '../../components/Widget';
import microsoft from '../../images/microsoft.png';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'admin@flatlogic.com',
            password: 'password',
        };

    }

    changeEmail(event) {
        this.setState({ email: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
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
                        <Link className="d-block text-center" to="/register">Create an Account</Link>
                    </Widget>
                </Container>
                <footer className="auth-footer">
                {new Date().getFullYear()} &copy; Sing App - React Admin Dashboard Template. By <a rel="noopener noreferrer" target="_blank" href="https://flatlogic.com">Flatlogic</a>
                </footer>
            </div>
        );
    }
}


export default Login;

