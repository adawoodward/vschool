import React from 'react'
import { Link } from 'react-router-dom'
                             // receive as props
function Navbar(props){
  const { logout } = props // destructuring to call it logout not props.logout
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link> 
      <Link to="/public">Public</Link>
      <Link to='/post'>Post</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar