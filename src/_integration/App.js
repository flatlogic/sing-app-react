import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdminRoute, UserRoute, AuthRoute } from './RouteComponents';
import { ConnectedRouter } from 'connected-react-router';
import { getHistory } from './index';

import 'styles/theme.scss';

import ErrorPage from 'pages/error';
import LayoutComponent from 'components/Layout';
import DocumentationLayoutComponent from 'documentation/DocumentationLayout';
import Login from 'pages/auth/login';
import Verify from 'pages/auth/verify';
import Register from 'pages/auth/register';
import Reset from 'pages/auth/reset';
import Forgot from 'pages/auth/forgot';

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  render() {
    if (this.props.loadingInit) {
      return <div/>;
    }

    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            <ConnectedRouter history={getHistory()}>
              <HashRouter>
                <Switch>
                  <Route path="/documentation" exact
                    render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
                  <Route path="/documentation" component={DocumentationLayoutComponent}/>
                  <Route path="/" exact render={() => <Redirect to="/app"/>}/>
                  <Route path="/app" exact render={() => <Redirect to="/app/dashboard"/>}/>
                  <UserRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
                  <AdminRoute path="/admin" currentUser={this.props.currentUser} dispatch={this.props.dispatch}
                              component={LayoutComponent}/>
                  <AuthRoute path="/register" exact component={Register}/>
                  <AuthRoute path="/login" exact component={Login}/>
                  <AuthRoute path="/verify-email" exact component={Verify}/>
                  <AuthRoute path="/password-reset" exact component={Reset}/>
                  <AuthRoute path="/forgot" exact component={Forgot}/>
                  <Route path="/error" exact component={ErrorPage}/>
                  <Redirect from="*" to="/app/dashboard"/>
                </Switch>
              </HashRouter>
            </ConnectedRouter>


        </div>

    );
  }
}

function mapStateToProps(store) {
    return {
      currentUser: store.auth.currentUser,
      loadingInit: store.auth.loadingInit,
    };
}

export default connect(mapStateToProps)(App);
