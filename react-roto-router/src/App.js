import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Services from './components/Services.js'
import ServiceDetail from './components/ServiceDetail.js'
import "./styling/style.css"


export default function App() {
  return (
      // <Router>
      <div>
      <nav style={{margin: 0, backgroundColor: "lightblue"}}>
        <Link to="/" style={{padding:5}}>Home</Link>
        <Link to="/about" style={{padding:5}}>About</Link>
        <Link to="/services" style={{padding:5}}>Services</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services/>} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} /> 
      </Routes>

      <footer style={{textAlign: "center"}}>
        <p>Contact us!</p>
        <p>888-888-8888</p>
        <p>Thank you for visiting our website</p>
      </footer>
      </div>
  )
}