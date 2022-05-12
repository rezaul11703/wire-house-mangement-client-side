import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <SpinnerCircularFixed />
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;

};

export default RequireAuth;    