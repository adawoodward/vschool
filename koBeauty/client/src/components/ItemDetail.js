import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import Makeup from './Makeup'

const ItemDetail = () => {
    const { makeupId } = useParams()

    const [singleMakeup, setSingleMakeup] = useState([])

    const fetchDetails = () => {
        axios.get(`makeup/${makeupId}`)
        .then(res => setSingleMakeup(res.data))
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchDetails()
    }, [])

  return (
    <>
        <div>Item Detail????</div>
        {singleMakeup?.map(item => {
            return (
                <div key={item.makeupId}>
                    <h1>{item.title}</h1>
                </div>
            )
        })}
    </>
  )
}

export default ItemDetail