import React, { Suspense } from 'react'
import SideBar from './side-bar'
import Header from './header'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <Suspense>
      <div className="flex">
        <Header />
        <SideBar />
        <Outlet />
      </div>
    </Suspense>
  )
}

export default DefaultLayout
