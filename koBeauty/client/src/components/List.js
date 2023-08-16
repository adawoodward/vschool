import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function List(props) {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    function getProducts() {
        axios.get("/makeup")
          .then(res => setProducts(res.data))
          .catch(err => console.log(err.response))
      }

      useEffect(() => {
        getProducts()
      }, [])

      console.log(products.makeupId)

    // const { title, brand, category, _id } = props

    return (
        <div className='list'>
            <>
            {products.map((product) => (
                <div key={product._id} className='product-card'>
                <h1>Title: {product.title}</h1>
                {/* <h2>Brand: {product.brand}</h2> */}
                <h3>Category: {product.category}</h3>
                <Link to={`/makeup/${product._id}`}>
                    <div className='btn'>View Details</div>
                </Link>
                </div>

            ))}

              
            </>
        </div>
    )
}