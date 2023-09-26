import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { ObjectId } from 'mongodb'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    // const { title } = props
    const { id } = useParams()
    // const { id } = req.query
    const [itemDetail, setItemDetail] = useState({})

    const fetchMakeup = () => {
        axios.get(`/makeup/${id}`)
        .then((res) => {
            // console.log(res)
            // console.log(res.data)
            setItemDetail(res.data)
            return res.status(200).json(res.data)
        })
        .catch(err => console.error(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])    

  return (
    <>
    <div className='detail-container'>
        <br></br>
        <h1>Detail Page</h1>
        <hr></hr>
        <br></br>
        <div>Title: {itemDetail?.title}</div>
        <div>Brand: {itemDetail?.brand}</div>
        <div>Category: {itemDetail?.category}</div>
        <p>ID: {id} </p> 
        <br></br>
    </div>

    </>
  )
}

export default ItemDetail