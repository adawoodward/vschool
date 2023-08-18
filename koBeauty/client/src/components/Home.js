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


  return (
    <>
      <h1>Home Page</h1>
    <h4>Filter by Category</h4>
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
  />) }
    </>
  
  )
}

export default Home