import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const active = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <nav>
      {!user && (
        <NavLink to="/login" className={active}>
          Login
        </NavLink>
      )}
      {user && <button onClick={logout}>logout</button>}
      <NavLink to="/" end={true} className={active}>
        Home
      </NavLink>

      {user?.role === 'user' && (
        <NavLink to="/user" className={active}>
          User Panel
        </NavLink>
      )}
      {user?.role === 'admin' && (
        <NavLink to="/admin" className={active}>
          Admin Panel
        </NavLink>
      )}

      <NavLink to="*">NotFind</NavLink>
    </nav>
  );
}
