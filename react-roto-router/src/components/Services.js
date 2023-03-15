import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Services() {

    const navigate = useNavigate()

    return (
        <div className='middle'>
            <h2>Services</h2>
            <p>Searching for a reliable, affordable plumber in Salt Lake City, Utah? Contact Superior Water & Air. Superior is a preferred plumbing provider assisting brands throughout the country which allows them to provide a number of plumbing services throughout Utah County. Whether you’re struggling with small plumbing issues like a leaky faucet, poor water pressure, or something larger like a burst pipe, our team of plumbers in Salt Lake City, UT will resolve the issue quickly.</p>

                <button onClick={()=> navigate("/")}>Return to Home</button> 
            {/* <button onClick={()=> navigate("/sevicedetail")}>Detail</button> */}
                <button onClick={()=> navigate(1)}>Go Forward 1</button> 
                <button onClick={()=> navigate(-1)}>Go Back 1</button> 
        </div>
    )
}