import React from 'react';
import Header from './Components/common/header';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
    <Header />
    <Outlet />
  </div>
  )
}

export default Main
