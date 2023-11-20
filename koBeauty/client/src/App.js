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
import Category from './component/Category'
import Brand from './component/Brand'
import Hero from './component/Hero'
import UserUpvotedPosts from './component/UserUpvotedPost'


function App() {
  const { token, logout, addPost } = useContext(UserContext)

  return (
    <div className="App">      
    { token && <Navbar logout={ logout } /> }
    <Routes>
      <Route exact path='/post/random' element={<Hero />} />

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
        path="/post/:_id" 
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
      <Route 
        path="/post/search/category"
        element={
        <ProtectedRoute token={token} redirectTo="/">
          <Category />
        </ProtectedRoute>}
      />
      <Route
          path="/post/search/brand"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Brand />
            </ProtectedRoute>
          }
      />
      <Route
          path="/likes"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <UserUpvotedPosts />
            </ProtectedRoute>
          }
      />  
    </Routes>
  </div>
  );
}

export default App;
