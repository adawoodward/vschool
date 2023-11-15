import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './component/Auth'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Public from './component/Public'
import PostDetail from './component/PostDetail'
import ProtectedRoute from './component/ProtectedRoute'
import { UserContext } from './context/UserProvider'
import PostForm from './component/PostForm'


function App() {
  const { token, logout, addPost } = useContext(UserContext)

  return (
    <div className="App">
      <h1>KOBEAUTY</h1>
      
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
        path="/posts/:_id" 
        element={<PostDetail />} />
      <Route 
        path="/public"
        element={
        <ProtectedRoute token={token} redirectTo="/">
          <Public />
        </ProtectedRoute>}
      />
      <Route 
        path="/post"
        element={
        <ProtectedRoute token={token} redirectTo="/">
          <PostForm addPost={addPost} />
        </ProtectedRoute>}
      />
    </Routes>
  </div>
  );
}

export default App;
