import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Auth from './component/Auth'
import Profile from './component/Profile'
import Public from './component/Public'
import ProtectedRoute from './component/protectedRoute'
import { UserContext } from './context/UserProvider'


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios'

function App() {
  const { token, logout, getAllComments } = useContext(UserContext)

  useEffect(() => {
    getAllComments()
  }, [])

  return (
    <div className="App">
      { token && <Navbar logout={ logout } /> }
      <Routes>
        <Route
          path='/'
          element={ token ? <Navigate to="/profile"/> : <Auth /> } 
        />
        <Route 
          path='/profile'
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/public"
          element={
          <ProtectedRoute token={token} redirectTo="/">
            <Public/>
          </ProtectedRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
