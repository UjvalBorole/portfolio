import React from 'react'
import Header from './componenets/Header/header.jsx'
import Footer from './componenets/Footer/footer.jsx'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
     <div className="bg-gray-50 min-h-screen flex flex-col bg-white">
      {/* 🔹 Header at top */}
      <Header />

      {/* 🔹 Main content expands to fill space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 🔹 Footer sticks to bottom */}
      <Footer />
    </div>
  )
}

export default Layout