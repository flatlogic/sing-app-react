import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import DocumentationLayoutComponent from '../documentation/DocumentationLayout';
import Login from '../pages/login';
import Register from '../pages/register';
import { logoutUser } from '../actions/user';

const PrivateRoute = ({dispatch, component, ...rest }) => {
    if (!Login.isAuthenticated(localStorage.getItem('token'))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {

  state = {
    steps: [
      {
        content: 'Tabs or spaces? 🤔',
        placement: 'bottom',
        target: '#toggleSidebar',
        textAlign: 'center',
      },
      {
        content: "A button! That's rare on the web",
        placement: 'bottom',
        target: '.dropdown-toggle',
      },
      {
        content: "Sometimes I wonder what's inside my mind",
        placement: 'bottom',
        target: '.la.la-globe',
      },
      {
        content: 'Modal, Portal, Quintal!',
        placement: 'bottom',
        target: '.la.la-cog',
      },
      {
        content: 'Modal, Portal, Quintal!',
        placement: 'bottom',
        target: '.helper-button'
      },
      {
        content: 'Modal, Portal, Quintal!',
        placement: 'bottom',
        target: '.purchase-button'
      }
    ],
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.modalIsOpen && this.state.modalIsOpen) {
      this.start();
    }
  }

  handleJoyrideCallback = (CallBackProps) => {
    const { status, type } = CallBackProps;

    if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status)) {
      this.setState({ run: false });
    }

    // tslint:disable:no-console
    console.groupCollapsed(type);
    console.log(CallBackProps);
    console.groupEnd();
    // tslint:enable:no-console
  };

  start = () => {
    this.setState({
      run: true,
    });
  };
  
  render() {
    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
          <Joyride
          callback={this.handleJoyrideCallback}
          continuous={true}
          run={true}
          floaterProps={{
            wrapperOptions: {
              offset: 0,
              placement: 'top',
              position: true,
            },
            title: <h1>hhh</h1>
          }}
          showSkipButton={true}
          spotlightClicks={true}
          steps={this.state.steps}
          spotlightPadding={-10}
          disableOverlay={true}
          styles={{
            options: {
              arrowColor: '#ffffff',
              backgroundColor: '#ffffff',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#000',
              textColor: '#495057',
              spotlightPadding: 0
            },
          }}
        />
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
                    <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
                    <PrivateRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    <Route path="/documentation" exact
                           render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
                    <Route path="/documentation" component={DocumentationLayoutComponent}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/error" exact component={ErrorPage}/>
                    <Redirect from="*" to="/app/main/analytics"/>
                </Switch>
            </HashRouter>
        </div>

    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
