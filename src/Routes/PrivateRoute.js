import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routePaths from './NameSpace';

export const PrivateRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  return isLoggedIn === true ? <Outlet /> : <Navigate to={routePaths.login} />;
};

// const navigate = useNavigate();
// const isLoggedin = useSelector((state) => state.Auth.isLoggedin);
// return isLoggedin ? <Route {...props} /> : <React.Fragment>{navigate(routePaths.login)}</React.Fragment>;