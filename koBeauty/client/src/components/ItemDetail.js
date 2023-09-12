import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { ObjectId } from 'mongodb'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    // const { title } = props
    const { id } = useParams()
    // const { id } = req.query
    // const [item, setItem] = useState({})
    const [itemDetails, setItemDetails] = useState({})
    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const { data } = await axios.get(`/makeup/${id}`)
    //             res.json(data)
    //             setProduct(data)
    //             console.log(product)
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     }
    //     fetch()
    // }, [])

    const fetchMakeup = () => {
        axios.get(`/makeup/${id}`)
        .then((res) => {
            // console.log(res)
            // console.log(res.data)
            setItemDetails(res.data)
            return res.status(200).json(res.data)
        })
        .catch(err => console.error(err.response))
    }

    useEffect(() => {
        fetchMakeup()
    }, [])

    // console.log(product._id)
    // console.log(product.title)
    

  return (
    <>
    <div className='detail-container'>
        <h1>Detail Page</h1>
        <div>Title: {itemDetails?.title}</div>
        <p>ID: {id} </p> 

        {/* <div>
            { products?.product.find(item => item.id === id).map((item, i) => 
                (
                    <>
                    <div key={i}>
                        {item.title}
                    </div>
                    </>
                )
            ) }
        </div> */}
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