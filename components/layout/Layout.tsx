import React, { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-purple-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
