import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'
import Footer from './components/Footer'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import List from './components/List.js'
import axios from 'axios'
import './styling/style.css'
import FileBase64 from 'react-file-base64';

function App() {
  const [makeups, setMakeups] = useState([])

  function getMakeups() {
    axios.get("/makeup")
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getMakeups()
  }, [])

  console.log(makeups)

  return (
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/makeup' element={<List />} />
          <Route path='/makeup/:id' element={<ItemDetail />} />
          {/* <Route exact path='/cart' element={<Cart />} /> */}
        </Routes>
        <Header />
        <br></br>
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
