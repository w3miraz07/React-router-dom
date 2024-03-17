import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import About from '../about/About'

const RootLayout = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    <About/>
    </>
  )
}

export default RootLayout