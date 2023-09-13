import React from 'react';
import Header from './Components/common/header';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      <Header />
      <div className='container-space'>
        <Outlet />
      </div>

    </div>
  )
}

export default Main
