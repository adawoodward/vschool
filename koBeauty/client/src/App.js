import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Makeup from './components/Makeup.js'
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

  return (
    <>
      { makeups?.map(makeup => 
      <Makeup 
        {...makeup}
        key={makeup.title}
      />) }
    </>
  );
}

export default App;
