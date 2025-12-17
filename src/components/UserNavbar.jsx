import React from 'react';
import { NavLink } from 'react-router-dom';
export default function UserNavbar() {
  const active = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <nav>
      <NavLink end to="/user" className={active}>
        user profile
      </NavLink>
      <NavLink to="/user/details" className={active}>
        details
      </NavLink>
      <NavLink to="/" end className={active}>
        MainPage
      </NavLink>
    </nav>
  );
}
