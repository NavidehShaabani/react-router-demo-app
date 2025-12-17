import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function ProtectedRouteRole({ roles }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div>is loading ...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
  } else if (roles && !roles.includes(user.role)) {
    return <Navigate to="/forbidden" />;
  } else {
    return <Outlet />;
  }
}
