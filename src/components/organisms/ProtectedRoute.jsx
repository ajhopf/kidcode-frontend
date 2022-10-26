import React from 'react';
import AdminLogin from '../pages/AdminLogin';

export default function ProtectedRoute(props) {
  const adminToken = props.adminToken;

  if (!adminToken) {
    return <AdminLogin />;
  }

  return props.children;
}
