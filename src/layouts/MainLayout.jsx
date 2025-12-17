import React from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
