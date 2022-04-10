import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Category from './Category';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

function Layout() { 
  return (
    <div>
      <Navbar />
      <div className="min-h-screen"><Outlet /></div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotFound />} path="*" />
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route path="/category/:cat" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;