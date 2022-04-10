import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[60vh] flex flex-col gap-8 items-center justify-center">
        <h1 className="font-bold text-4xl">404 NOT FOUND</h1>
        This page is too lousy such that it can't find the stuff you want.
      </div>
      <Footer />
    </div>
  )
}

export default NotFound