import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import List from './List'
import { Link } from "react-router-dom";
import ItemDetail from './ItemDetail';


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
  // const [randomMakeup, setRandomMakeup] = useState({})

  const getRandomMakeup = () => {
    const randomNum = Math.floor(Math.random() * makeups.length)
    console.log(randomNum)
    const random = makeups[randomNum]
    console.log(random)
    const randomTitle = makeups[randomNum]?.title
    const randomId = makeups[randomNum]?._id
    const randomBrand = makeups[randomNum]?.brand
    const randomCategory = makeups[randomNum]?.category
    setRandomMakeup(random)
    setRandomMakeup({
      title: randomTitle, 
      _id: randomId,
      brand: randomBrand,
      category: randomCategory
    })
    console.log(randomMakeup)
  }

  useEffect(() => {
    getRandomMakeup()
  }, [])

  return (
    <div>
      <br></br>
      <h1>KoBeauty</h1>
      <br></br>
      <hr></hr>
      <div className='link-container'><Link to="/makeup">Makeup Product PAGE</Link></div>
      <hr></hr>
      {/* <div>
        <h3>BEST OF K-BEAUTY AWARDS</h3>
        <p>Treat yourself to these award winning products!</p>
      </div>
      <div>
        <h3>FALL ESSENTIALS</h3>
        <p>Get the perfect items for your fall makeup trends!</p>
      </div> */}
      <br></br>
      <div>
        <h3>OUR STORY</h3>
        <p>“Our hope is that learning about beauty from a Korean perspective will change the way you think about your skin and how you treat it.”</p>
        <p>It matters to us what you put on your skin. That's why we scour thousands of products, testing each one to ensure our curations are authentic, safe and provide exceptional results, helping you embrace your real skin.</p>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <br></br>
        <h3>Our Pick For You</h3>
      </div>
      <br></br>
      <div>
        <div>
          <div>{randomMakeup?.title === undefined ? "SKINFOOD's Peach Cotton Multi Finish Powder" : `${randomMakeup?.brand}'s ${randomMakeup?.title}`}</div>
          <br></br>
          <div>{randomMakeup?.title === undefined ? <Link to='http://localhost:3001/makeup/64c3eb9f27a705f6011ed19a'><button className='button-1' role='button'>Read More..</button></Link> : <Link to= {`/makeup/${randomMakeup?._id}`}> <button className='button-1' role='button'>Read More..</button> </Link>} </div>
          <br></br>
          <button onClick={getRandomMakeup} className='button-1' role='button'>Something Else?</button>
          <br></br>
        </div>
        <br></br>
        <hr></hr>
        {/* {makeups.map((item, index) => {
          return (
            <div>
              <h1>{item.title}</h1>
              {index !== 2 && <h1>{item.title}</h1>}
            </div>
          )
        })} */}
      </div>

      <br></br>
      <br></br>
      <h3>Our Best 3 Brands</h3>
      <div className='brand-container'>
      <div className='brand-column'>
        <h3>LANEIGE</h3>
        <div>
          {makeups.map((item) => {
            if (item.brand === "Laneige") {
              console.log(item)
              return <h4 key={item._id}>{item?.title}</h4>
            } 
            return null
          })}
        </div>
        </div>
        <div className='brand-column'>
          <h3>SKINFOOD</h3>
          <div>
            {makeups.map((item) => {
            if (item.brand === "SKINFOOD") {
              console.log(item)
              return <h4 key={item._id}>{item?.title}</h4>
            } 
            return null
          })}
          </div>
        </div>
        <div className='brand-column'>
          <h3>Etude</h3>
          <div>
            {makeups.map((item) => {
            if (item.brand === "Etude") {
              console.log(item)
              return <h4 key={item._id}>{item?.title}</h4>
            } 
            return null
          })}
          </div>
          <br></br>
        </div>
        </div>
        <hr></hr>
        </div>
    
)}

export default Home