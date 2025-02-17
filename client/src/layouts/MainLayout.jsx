import React from 'react'
import Navbar from '../components/Navbar'
import HeaderImg from '../components/HeaderImg'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <HeaderImg />
        <Navbar />
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 '>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout