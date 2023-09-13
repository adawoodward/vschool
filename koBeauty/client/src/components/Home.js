import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'

const Home = () => {
  // const { id } = props
  const [makeups, setMakeups] = useState([])
  const [randomMakeup, setRandomMakeup] = useState({})

  function getMakeups() {
    axios.get("/makeup")
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getMakeups()
  }, [])

  console.log(makeups)

  function getRandomMakeup() {
    const randomNum = Math.floor(Math.random() * makeups.length)
    console.log(randomNum)
    // const randomMakeupTitle = randoms[randomNum].title
    const randomMakeup = makeups[randomNum]
    console.log(randomMakeup)
    axios.get(`/makeup/${randomMakeup?.id}`)
    .then((res) => {
      setRandomMakeup(res.data)
      return res.status(200).json(res.data)
    })
    .catch(err => console.error(err.response))
  }

  useEffect(() => {
    getRandomMakeup()
  }, [])


  return (
    <>
      <h1>Home Page</h1>
      <div>{randomMakeup._id}</div>

  {/* { makeups?.map(makeup => 
    <List 
    {...makeup}
    key={makeup.title}
  />) } */}
    </>
  
  )
}

export default Home