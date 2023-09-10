import React from 'react'
import Header from './componenets/Header/header'
import Footer from './componenets/Footer/footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-slate-50'>
    <Header className="bg-slate-700"/>
    <Outlet/>
    <Footer className="bg-slate-700" />
    </div>
  )
}

export default Layout