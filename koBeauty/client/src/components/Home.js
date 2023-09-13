import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'

const Home = () => {
  const [makeups, setMakeups] = useState([])

  function getMakeups() {
    axios.get("/makeup")
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getMakeups()
  }, [])

  console.log(makeups)

  return (
    <>
      <h1>Home Page</h1>

  {/* { makeups?.map(makeup => 
    <List 
    {...makeup}
    key={makeup.title}
  />) } */}
    </>
  
  )
}

export default Home