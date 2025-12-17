import React, { Suspense } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import ErrorBoundry from '../components/ErrorBoundry';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import UserLayout from '../layouts/UserLayout';

const Details = React.lazy(() => import('../pages/users/Details'));
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const NotFound = React.lazy(() => import('../pages/NotFind'));
const Forbidden = React.lazy(() => import('../pages/Forbidden'));
const Setting = React.lazy(() => import('../pages/admin/setting'));
const Dashboard = React.lazy(() => import('../pages/admin/Dashboard'));
const Profile = React.lazy(() => import('../pages/users/Profile'));

import ProtectedRouteRole from './ProtectedRouteRole';

export default function AppRouter() {
  return (
    <Suspense fallback={<p>is loading ...</p>}>
      <ErrorBoundry>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />}></Route>

            <Route path="/login" element={<Login />}></Route>
          </Route>
          <Route element={<ProtectedRouteRole roles={['admin']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="setting" element={<Setting />}></Route>
            </Route>
          </Route>

          <Route element={<ProtectedRouteRole roles={['user']} />}>
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<Profile />}></Route>
              <Route path="details" element={<Details />}></Route>
            </Route>
          </Route>

          <Route path="/forbidden" element={<Forbidden />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ErrorBoundry>
    </Suspense>
  );
}
