import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  return userData ? <Outlet /> : <Navigate to="/login"/>;
};

export default PrivateRoute;
