import React from 'react'
import { Link } from 'react-router-dom'
                             // receive as props
export default function Navbar(props){
  const { logout, token } = props // destructuring to call it logout not props.logout
  return (
    <div className="navbar">
      { token && <Link to="/profile">Profile</Link> } 
      <Link to="/public">Public</Link>
      { token && <button onClick={logout}>Logout</button> }
    </div>
  )
}