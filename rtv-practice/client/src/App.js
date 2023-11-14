import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './component/Auth'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Public from './component/Public'
import IssueDetail from './component/IssueDetail'
import ProtectedRoute from './component/ProtectedRoute'
import { UserContext } from './context/UserProvider'
import IssueForm from './component/IssueForm'


function App() {
  const { token, logout, addIssue } = useContext(UserContext)

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
        path="/issues/:_id" 
        element={<IssueDetail />} />
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
          <IssueForm addIssue={addIssue} />
        </ProtectedRoute>}
      />
    </Routes>
  </div>
  );
}

export default App;
