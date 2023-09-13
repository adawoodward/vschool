import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemDetail from './ItemDetail'

export default function List(props) {
    
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const getProducts = async () => {
    //     try {
    //         const { data } = await axios.get('/makeup')
    //         setProducts(data)
    //     } catch (err) {
    //         console.error(err)
    //     }
    //     }
    //     getProducts()
    // }, [])


    function getProducts() {
        axios.get("/makeup")
          .then(res => setProducts(res.data))
          .catch(err => console.log(err.response))
      }

      useEffect(() => {
        getProducts()
      }, [])

    const { title, brand, category, _id } = props

    function handleFilter(e) {
        if (e.target.value === "reset") {
          getProducts()
        } else {
          axios.get(`/makeup/search/category?category=${e.target.value}`)
          .then(res => setProducts(res.data))
          .catch(err => console.log(err))
        }
      }


    return (
        <div className='list'>
            <>
            <h1>List Page</h1>
            <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Makeup items</option>
            <option value="Eyes">Eyes</option>
            <option value="Lips">lips</option>
            <option value="Cheeks">Cheeks</option>
            <option value="Face">Face</option>
            <option value="Makeup-tools">Makeup-tools</option>
          </select>
            {products?.map((product) => (
                <div key={product.title} className='product-card'>
                <h1>Title: {product.title}</h1>
                <h2>Brand: {product.brand}</h2>
                <h3>Category: {product.category}</h3>
                <p>ID: {product._id}</p>
                <Link to={`/makeup/${product._id}`}>
                    <button>Detail</button>
                    {/* <ItemDetail
                        key={product._id}
                        title={product.title}
                        brand={product.brand}
                        category={product.category}
                        id={product._id}
                    /> */}
                </Link>
                </div>

            ))}

              
            </>
        </div>
    )
}