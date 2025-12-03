import React from 'react'
import Navbar from '../MainComponents/Navbar'
import { Outlet } from 'react-router'
import Footer from '../MainComponents/Footer'

const HomeLayout = () => {
  return (
    <div>
        <Navbar> </Navbar>
        <Outlet> </Outlet>
        <Footer> </Footer>
    </div>
  )
}

export default HomeLayout