import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import List from './List'

const Home = () => {
  // const { id } = props
  // const { id } = useParams()
  const [makeups, setMakeups] = useState([])
  const [randomMakeup, setRandomMakeup] = useState({})
  // const [random, setRandom] = useState({})

  function getMakeups() {
    axios.get("/makeup")
      .then(res => setMakeups(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    getMakeups()
  }, [])

  console.log(makeups)

  const getRandomMakeup = () => {
    const randomNum = Math.floor(Math.random() * makeups.length)
    console.log(randomNum)
    // const randomMakeupTitle = randoms[randomNum].title
    const random = makeups[randomNum]
    console.log(random)
    const randomId =  random?._id
    // const randomId = random.id
    // setRandomMakeup(random)
    // console.log(randomMakeup)
    // const randomId = JSON.parse(randomMakeup?._id)
    // console.log(randomMakeup._id)
    // const randomId = randomMakeup.id
    console.log(randomId)
    // axios.get(`/makeup/${random?._id}`)
    axios.get(`/makeup/${randomId}`)
    .then((res) => {
      // console.log(res.data)
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
      <h2>Featured Product</h2>
      <div>Title: {randomMakeup?.title}</div>
      <div>ID: {randomMakeup?.id}</div>

  {/* { makeups?.map(makeup => 
    <List 
    {...makeup}
    key={makeup.title}
  />) } */}
    </>
  
  )
}

export default Home