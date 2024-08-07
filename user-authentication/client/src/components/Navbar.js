import React from 'react'
import { Link } from 'react-router-dom'
                             // receive as props
function Navbar(props){
  const { logout, token } = props // destructuring to call it logout not props.logout
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link> 
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
      {/* { token && <button onClick={logout}>Logout</button> } */}
    </div>
  )
}

export default Navbar