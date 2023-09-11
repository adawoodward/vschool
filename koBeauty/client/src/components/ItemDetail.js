import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    // const { makeupId } = useParams()
    const { id } = useParams()
    const [item, setItem] = useState({})

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
            console.log(res)
            console.log(res.data)
            console.log("data: ", res.json())
            return res.json(res.data)
        })
        .then((data) => {
            console.log(data)
            setItem(data)
        })
        .catch(err => console.log(err.response))
    }
    console.log(item)

    useEffect(() => {
        fetchMakeup()
    }, [])

    // console.log(product._id)
    // console.log(product.title)
    

  return (
    <>
    <div className='detail-container'>
        <h1>Detail Page</h1>
        <div>Title: {item.title}</div>
        <p>ID: {item.id} </p>

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