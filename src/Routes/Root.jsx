import React from 'react'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <Outlet/>
    </div>
  )
}

export default Root
