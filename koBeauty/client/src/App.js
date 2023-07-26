import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
