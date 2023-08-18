import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'
import Footer from './components/Footer'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import List from './components/List.js'
import axios from 'axios'


function App() {
  const [makeups, setMakeups] = useState([])

  function getMakeups() {
    axios.get("/makeup")
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err.response))
  }

  function addMakeup(newMakeup) {
    axios.post("/makeup", newMakeup) 
      .then(res => {
        setMakeups(prevMakeups => [...prevMakeups, res.data])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMakeups()
  }, [])

  console.log(makeups)

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getMakeups()
    } else {
      axios.get(`/makeup/search/category?category=${e.target.value}`)
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err))
    }
  }

  // function deleteMakeup(makeupId) {
  //   axios.delete(`/makeup/${makeupId}`)
  //   .then(res => {
  //     setMakeups(prevMakeups => prevMakeups.filter(makeup => makeup._id !== makeupId))
  //   })
  //   .catch(err => console.log(err))
  // }

  return (
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/makeup' element={<List />} />
          <Route path='/makeup/:makeupId' element={<ItemDetail />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Header />
        {/* <h4>Filter by Category</h4>
          <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Makeup items</option>
            <option value="Eyes">Eyes</option>
            <option value="Lips">lips</option>
            <option value="Cheeks">Cheeks</option>
            <option value="Face">Face</option>
            <option value="Makeup-tools">Makeup-tools</option>
          </select>
        { makeups?.map(makeup => 
          <List 
          {...makeup}
          key={makeup.title}
          // deleteMakeup={deleteMakeup}
          // editMakeup={editMakeup}
        />) } */}
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
