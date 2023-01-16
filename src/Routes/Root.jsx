import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Views/Header';

const Root = () => {
  return (
    <div className='mx-10' >
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Root
