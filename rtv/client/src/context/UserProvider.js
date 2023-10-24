import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// this userAxios has all the methods and all the functionality that axios has
const userAxios = axios.create()
// configuring to always have authorization header set in with the token
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        feeds: [],
        errMsg: ""
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
            .catch(err => handleAuthErr(err.response.data.errMsg))
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
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            feeds: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserFeeds() {
        // since userAxios has the token built into it
        userAxios.get("/api/feed/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    feeds: res.data // because this is initial get request, we can just set that full array todos
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // this addTodo will expect to receive a new todo as a parameter coming from the form  
    function addFeed(newFeed) {
        userAxios.post("/api/feed", newFeed)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,               // adding the new todo here as res.data
                    feeds: [...prevState.todos, res.data]
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
                addTodo,
                resetAuthErr
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}