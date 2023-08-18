import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import List from './List'

const ItemDetail = () => {
    // const { makeupId } = useParams()
    const { _id } = useParams()
    // const [product, setProduct] = useState([])
    const [product, setProduct] = useState({})

    const navigate = useNavigate()

    const fetchMakeup = () => {
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

    console.log(product)

  return (
    <>
    <div className='detail-container'>
        <h1>Detail Page</h1>
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