import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <h2>Home View</h2>
            <p>Plumbing Service and Repair in Utah.
            What lurks in your pipes? Let Superior clean your pipes for maximum efficiency.</p>
            <button onClick={() => navigate("/services")}>Go to Services page</button>
            <button onClick={() => navigate(-1)}>Go Back 1</button>
            <button onClick={() => navigate(1)}>Go Forward 1</button>
            <button onClick={() => navigate(2)}>Go Forward 2</button>
        </div>
    )
}