import React from 'react';
import { NavLink } from 'react-router-dom';
export default function AdminNavbar() {
  const active = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <nav>
      <NavLink end to="/admin" className={active}>
        Dashboard
      </NavLink>
      <NavLink to="/admin/setting" className={active}>
        Setting
      </NavLink>
      <NavLink to="/" end className={active}>
        MainPage
      </NavLink>
    </nav>
  );
}
