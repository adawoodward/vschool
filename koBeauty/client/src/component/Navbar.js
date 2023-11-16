import React from 'react'
import { Link } from 'react-router-dom'
                             
function Navbar(props){
  const { logout } = props // destructuring to call it logout not props.logout
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link> 
      <Link to="/public">Public</Link>
      <Link to='/post'>Post</Link>
      <Link to='/post/search/category'>Search By Category</Link>
      <Link to="/post/search/brand">Search By Brand</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar