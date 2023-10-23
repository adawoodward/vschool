import React, { useState } from "react";
import axios from 'axios'

export const UserContext = React.createContext()

// this userAxios has all the methods and all the functionality that axios has
const userAxios = axios.create()
// configuring to always have authorization header set in with the token
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("toekn") || "", 
        todos: [] 
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserTodos()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    function getUserTodos() {
        // since userAxios has the token built into it
        userAxios.get("/api/todo/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    todos: res.data // because this is initial get request, we can just set that full array todos
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // this addTodo will expect to receive a new todo as a parameter coming from the form  
    function addTodo(newTodo) {
        userAxios.post("/api/todo", newTodo)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,               // adding the new todo here as res.data
                    todos: [...prevState.todos, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addTodo
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}