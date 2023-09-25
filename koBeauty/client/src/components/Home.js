import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import List from './List'
import { Link } from "react-router-dom";


const Home = () => {
  // const { id } = props
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
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

  const [randomMakeup, setRandomMakeup] = useState(makeups[0])
  console.log(randomMakeup)

  const getRandomMakeup = () => {
    const randomNum = Math.floor(Math.random() * makeups.length)
    console.log(randomNum)
    const random = makeups[randomNum]
    console.log(random)
    const randomTitle = makeups[randomNum]?.title
    const randomId = makeups[randomNum]?._id
    // setRandomMakeup(random)
    setRandomMakeup({title: randomTitle, _id: randomId})

    console.log(randomMakeup)

    return (
      <>
      <div>Title: {randomTitle}</div>
      <div>ID: {randomId}</div>
      </>
    )
    // const randomObject = makeups[Math.floor(Math.random() * makeups.length)]
    // // setRandomMakeup(randomObject)
    // return randomObject


    // axios.get(`makeup/${random?._id}`)
    // .then((res) => {
    //   console.log(res.data)
    //   setRandomMakeup(res.data)
    //   return res.status(200).json(res.data)
    // })
    // .catch(err => console.error(err.response))
  }

  useEffect(() => {
    getRandomMakeup()
  }, [])

  const [eyes, setEyes] = useState([])

  const fetchEyesCategory = () => {

  }

  useEffect(() => {
    fetchEyesCategory()
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <div className='link-container'><Link to="/makeup">Makeup Product PAGE</Link></div>


      <div>
        <h3>BEST OF K-BEAUTY AWARDS</h3>
        <p>Treat yourself to these award winning products!</p>
      </div>
      <div>
        <h3>FALL ESSENTIALS</h3>
        <p>Get the perfect items for your fall makeup trends!</p>
      </div>
      <div>
        <h3>OUR STORY</h3>
        <p>“Our hope is that learning about beauty from a Korean perspective will change the way you think about your skin and how you treat it.”</p>
        <p>It matters to us what you put on your skin.
That’s why we scour thousands of products, testing each one to ensure our curations are authentic, safe and provide exceptional results, helping you embrace your real skin.</p>
      </div>


      <br></br>
      <Link to={`/makeup/${randomMakeup?._id}`}> <button>Detail</button> </Link>
      <br></br>
      <button onClick={getRandomMakeup}>Our Pick For You</button>
      <br></br>
      {/* <div>Title: {randomMakeup?.title}</div>
      <div>ID: {randomMakeup?._id}</div> */}
      <br></br>
      <br></br>
      <div>
        {eyes.map(eye => (
          <div key={eye.category}>
            <Link to={`/categories/${eye.category}`}><button>Eyes</button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home