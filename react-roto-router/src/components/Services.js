import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function Services() {
    const navigate = useNavigate()

    return (
        <div>
            <h2>Services</h2>
            {/* <Link to="/servicedetail">Detail</Link> */}
            {/* <h3>Drain Cleaning</h3>
            <h3>Pipe Repair</h3>
            <h3>Emergency Plumbing</h3>
            <h3>Water Heater Service</h3> */}
            <button onClick={()=> navigate("/")}>Return to Home</button> 
            {/* <button onClick={()=> navigate("/sevicedetail")}>Detail</button> */}
            <button onClick={()=> navigate(1)}>Go Forward 1</button> 
            <button onClick={()=> navigate(-1)}>Go Back 1</button> 
        </div>
    )
}