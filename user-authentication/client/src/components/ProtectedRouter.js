import React, { Component } from "react";
import { Route, Navigate, Outlet } from 'react-router-dom'

// render the component that we want to protect if the user has a token, 
// if not, we can redirect them to a different page such as login page  
function ProtectedRoute(props) {
    const { token, redirectTo, children } = props
    return token ? children : <Navigate to={redirectTo} />
}

export default ProtectedRoute;