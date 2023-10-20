import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Auth />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>
  )
}