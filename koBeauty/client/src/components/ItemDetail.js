import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import Makeup from './Makeup'

const ItemDetail = () => {
    const { makeupId } = useParams()
    // const { _id } = useParams()

    const [singleMakeup, setSingleMakeup] = useState([])

    const [detail, setDetail] = useState({})


    console.log(singleMakeup)


    const fetchMakeup = (makeupId) => {
        // axios.get(`/${makeupId}`)
        axios.get("/makeup")
        .then(res => {
            console.log(res)
            setSingleMakeup(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])

    const handleClick = (makeupId) => {
        axios.get(`/${makeupId}`)
        .then((res) => {
            console.log(res.data)
            setDetail(res.data);
        })
        .catch(err => console.log(err.response))
    };

    useEffect(() => {
        handleClick()
    }, [])


  return (
    <>
        <div>Make-up items????</div>
                <div key={singleMakeup._id}>
                    <h1>{singleMakeup.title}</h1>
                <Link to={`/makeup/${singleMakeup._id}`}><button >link??</button></Link>
            </div>

    </>
  )
}

export default ItemDetail