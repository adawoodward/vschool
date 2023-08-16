import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
// import Makeup from './Makeup'

const ItemDetail = () => {
    // const { makeupId } = useParams()
    const { _id } = useParams()
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    console.log(product)

    const fetchMakeup = () => {
        // axios.get(`/${makeupId}`)
        // axios.get(`/makeup/${makeupId}`)
        axios.get(`/makeup/${_id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])

  return (
    <>
    <div className='container'>
        <h1>Detail Page: {product.makeupId}</h1>
        <div>{product.title}</div>
        <div>{product.brand}</div>
    </div>

    </>
  )
}

export default ItemDetail