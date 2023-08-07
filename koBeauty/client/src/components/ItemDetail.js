import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import Makeup from './Makeup'

const ItemDetail = () => {
    const { makeupId } = useParams()
    // const { _id } = useParams()

    // const [singleMakeup, setSingleMakeup] = useState({})
    const [singleMakeup, setSingleMakeup] = useState([])

    console.log(singleMakeup)

    const fetchMakeup = () => {
        axios.get(`/${makeupId}`)
        // axios.get("/makeup")
        .then(res => setSingleMakeup(res.data))
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])

  return (
    <>
        <div>Make-up items????</div>
        { singleMakeup?.map(item => {
            return (
                <div key={item._id}>
                <h1>{item.title}</h1>
               
                {/* <Link path={`/makeup/${item._id}`} key={item._id} >
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item._id}</p>
                    </div>
                </Link> */}

                    <button>click<Link path={`/makeup/${item._id}`} key={item._id}  /></button>
              
           
                </div>

                // <div key={item._id}>
                //     <h1>{item.title}</h1>
                // </div>
            )
        }) 
        }
    </>
  )
}

export default ItemDetail