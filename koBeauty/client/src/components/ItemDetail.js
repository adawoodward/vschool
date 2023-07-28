import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ItemDetail = () => {
    const {makeupId} = useParams()

    const [singleMakeup, setSingleMakeup] = useState()

    const fetchDetails = () => {
        axios.get(`/makeup/${makeupId}`)
        .then(res => res.json())
        .then(data => setSingleMakeup(data))
        .then(res => setSingleMakeup(res.data))
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    console.log(singleMakeup)

  return (
    <>
        <div>Item Detail</div>
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