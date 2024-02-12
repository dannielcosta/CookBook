import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import React from 'react'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  return (
    <main>
      <Navbar/> 
      <Sidebar/>
      <Routes>
        <Route path="/" element= {<Dashboard /> }/> 
        <Route path="/about" element = {<About /> }/>
        <Route path= "/notFound" element= {<NotFound />} /> 
     
      </Routes>
      <Footer/>
    </main>
  )
}

export default App;
