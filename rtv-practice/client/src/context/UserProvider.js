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
        issues: [],
        errMsg: ""
    }

    const [comments, setComments] = useState([])
    const [allIssues, setAllIssues] = useState([])
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
                getUserIssues()
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
            issues: []
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

    function getUserIssues() {
        // since userAxios has the token built into it
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data // because this is initial get request, we can just set that full array todos
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

//       // Add a function to fetch issue details by ID and set them in the state
//     function fetchIssue(_id) {
//         userAxios.get(`/api/issue/issues/${_id}`)
//             .then((res) => {
//             setUserState((prevUserState) => ({
//                 ...prevUserState,
//                 issueDetail: res.data,
//             }));
//         })
//             .catch((err) => console.error(err));
//   }

    // this addTodo will expect to receive a new todo as a parameter coming from the form  
    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,               // adding the new todo here as res.data
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function updateComments() {
        if (userState.issueDetail._id) {
            setComments(userState.issueDetail._id);
        }
    }

    function postComment(newComment, issueId) {
        if (!issueId) {
            console.error('Invalid issueId');
            return;
        }

        // fetchIssue(issueId)

        postNewComment(newComment, issueId)
            .then(() => {
                return updateComments();
            })
            .then(() => {
                console.log(comments);
            })
            .catch((error) => {
                console.error('Error updating comments: ', error);
            });
    }

    function postNewComment(newComment, issueId) {
        console.log('Posting comment for issueId:', issueId);
        userAxios
            .post(`/api/comment/issues/${issueId}`, newComment)
            .then((res) => {
                setComments((prev) => [...prev, res.data]);
            })
            .catch((err) => console.log(err));
    }

    // function postComment(newComment) {
    //     if (!issueDetail._id) {
    //         console.error("Invalid issueId");
    //         return;
    //     }
    
    //     postNewComment(newComment, issueDetail._id) // Pass issueDetail._id as the issueId
    //         .then(() => {
    //             return updateComments();
    //         })
    //         .then(() => {
    //             console.log(comments);
    //         })
    //         .catch((error) => {
    //             console.error("Error updating comments: ", error);
    //         });
    // }
    

    // function postNewComment(newComment, issueId) {
    //     console.log("Posting comment for issueId:", issueId); // Debugging statement
    //     userAxios.post(`/api/comment/issues/${issueId}`, newComment)
    //         .then(res => {
    //             // Update the comments state with the new comment
    //             setComments(prev => [...prev, res.data]);
    //         })
    //         .catch(err => console.log(err));
    // }
    
    function upVoteIssue(issueId) {
        userAxios.put(`/main/issues/upVote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
                setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
            })
            .catch(err => console.log(err))
    }
    
    function downVoteIssue(issueId) {
        userAxios.put(`/main/issues/downVote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ?  issue : res.data))
                setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
            })
            .catch(err => console.log(err))
    }
    

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                postComment,
                postNewComment,
                upVoteIssue,
                downVoteIssue,
                comments,
                setComments,
                ...allIssues,
                setAllIssues,
                userAxios
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}