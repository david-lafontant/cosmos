import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;