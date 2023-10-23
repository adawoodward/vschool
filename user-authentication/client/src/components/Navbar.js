import React from 'react'
import { Link } from 'react-router-dom'
                             // receive as props
export default function Navbar(props){
  const { logout } = props // destructuring to call it logout not props.logout
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}