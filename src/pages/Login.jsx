import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  function handleLogin() {
    const fakeuser = {
      id: 1,
      name: 'nana',
      role: 'admin',
    };
    login(fakeuser);

    navigate(from, { replace: true });
  }
  return (
    <div>
      login page
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
