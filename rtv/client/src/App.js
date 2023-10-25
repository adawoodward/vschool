import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import Issue from './component/Issue.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'
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
        {/* <Route 
          path="/myissue"
          element={
          <ProtectedRoute token={token} redirectTo="/">
            <MyIssue/>
          </ProtectedRoute>}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
