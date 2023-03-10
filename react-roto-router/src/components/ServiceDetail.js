import React from 'react'
import { useParams } from "react-router-dom" //params 1
import servicesData from './servicesData.js'

function ServiceDetail() {
    const {serviceId} = useParams()
    const foundService = servicesData.find(service => service._id === serviceId)

    // console.log(useParams())
    // console.log(foundService)
    // console.log(serviceId)

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{foundService.name} </h3>
            <p>{foundService.price}</p>
            <p>{foundService.description}</p>
        </div>
    )
}

export default ServiceDetail