import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar--header'>
                <h1>Meal Planner</h1>
            </div>
            <div className='navbar--links'>
                <ul>
                    <Link to="/"> <li>Home</li> </Link>
                    <Link to="/categories"> <li>Categories</li> </Link>
                    <Link to="/random"> <li>Random Meal</li> </Link>
                    <Link to="/randomThree"> <li>Today's Meal Plan</li> </Link>
                    <Link to="/savedMeals"> <li>Saved List</li> </Link>

                </ul>
            </div>
        </div>
    )
}

export default Navbar