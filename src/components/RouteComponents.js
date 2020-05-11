import Login from '../pages/auth/login';
import { logoutUser } from '../actions/auth';
import { Redirect, Route } from 'react-router';
import React from 'react';

export const AdminRoute = ({currentUser, dispatch, component, ...rest}) => {
  if (!currentUser || currentUser.role !== 'admin' || !Login.isAuthenticated(localStorage.getItem('token'))) {
    return (<Redirect to="/app/main"/>)
  } else if (currentUser && currentUser.role === 'admin') {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const UserRoute = ({dispatch, component, ...rest}) => {
  if (!Login.isAuthenticated()) {
    dispatch(logoutUser());
    return (<Redirect to="/login"/>)
  } else {
    return ( // eslint-disable-line
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const AuthRoute = ({dispatch, component, ...rest}) => {
  const {from} = rest.location.state || {from: {pathname: '/app'}};

  if (Login.isAuthenticated()) {
    return (
      <Redirect to={from}/>
    );
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};
