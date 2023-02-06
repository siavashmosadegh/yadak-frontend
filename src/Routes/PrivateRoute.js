import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routePaths from './NameSpace';

export const PrivateRoute = (props) => {
  const isLoggedin = useSelector((state) => state.Principal.isLoggedin);
  return isLoggedin ? <Route {...props} /> : <Redirect to={routePaths.login} />;
};
