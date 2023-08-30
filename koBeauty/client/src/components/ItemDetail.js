import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import List from './List'

const ItemDetail = () => {
    // const { makeupId } = useParams()
    const { _id } = useParams()
    // const [product, setProduct] = useState([])
    const [product, setProduct] = useState({})

    const fetchMakeup = () => {
        // axios.get(`/makeup/${product._id}`)
        axios.get(`/makeup/${_id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])

    console.log(product._id)
    console.log(product.title)
    

  return (
    <>
    <div className='detail-container'>
        <h1>Detail Page</h1>
        <div>{product.title}</div>
        <p>{product._id}</p>
        {/* {product?.map((item) => (
            <div key={item._id}>
                <h1>Detail Page: {item._id}</h1>
                <div>{item.title}</div>
                <div>{item.brand}</div>
            </div>
        ))} */}
    </div>

    </>
  )
}

export default ItemDetail