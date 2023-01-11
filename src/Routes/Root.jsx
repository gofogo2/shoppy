import React from 'react'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <div>This is Root</div>
      <Outlet/>
    </div>
  )
}

export default Root
