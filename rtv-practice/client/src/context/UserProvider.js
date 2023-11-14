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
                // extracts the user and token data from the response
                const { user, token } = res.data
                // stores the token and user data in the browser's localStorage
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserIssues()      // fetch the user-specific issues associated with the logged-in user
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                })) // merging the received user and token into the previous userState
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
        }) // setUserState to reset the userState to an empty state object
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

    function getAllIssues(){
        userAxios.get('/api/issue')
            .then((res) => {
                setAllIssues(res.data);
            })
            .catch((err) => {
                console.error('Error fetching all issues:', err);
            });
    }

    function getUserIssues() {
        // since userAxios has the token built into it
        userAxios.get("/api/issue/user")
            .then(res => {
                console.log('Retrieved issues:', res.data)
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data // because this is initial get request, we can just set that full array todos
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // this addTodo will expect to receive a new todo as a parameter coming from the form  
    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,               // adding the new issue here as res.data
                    issues: [...prevState.issues, res.data]
                })) // updating the state with the newly added issue
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const editIssue = async (issueId, updatedData) => {
        try {
            // Make API request to update the issue
            await userAxios.put(`/api/issue/${issueId}`, updatedData);
    
            // Update the state
            setAllIssues(prevIssues => {
                return prevIssues.map(issue => (issue._id === issueId ? { ...issue, ...updatedData } : issue));
            }); // issues matches with issueId will create a new changed object {...issue, ...updatedData}
        } catch (error) {
            console.error('Error editing issue:', error);
        }
    };

      // takes two parameter: newComment (the comment to be posted) & issueId (identifies the issue for which the comment is posted).
    function postNewComment(newComment, issueId) {
        console.log('Posting comment for issueId:', issueId);
        userAxios
            .post(`/api/comment/issues/${issueId}`, newComment)
            .then((res) => {
                setComments((prev) => [...prev, res.data]);
            }) // updating the comments state, takes the previous state(prev) and adds the new comment(res.data)
            .catch((err) => console.log(err));
    }

//     async function upVoteIssue(issueId) {
//     try {
//             const res = await userAxios.put(`/api/issue/upvote/${issueId}`)
//             return res.data
//         } catch (err) {
//             console.log(err)
//             throw err
//         }
//   }
  
//     async function downVoteIssue(issueId) {
//     try {
//           const res = await userAxios.put(`/api/issue/downvote/${issueId}`)
//           return res.data
//       } catch (err) {
//           console.log(err)
//           throw err
//       }
//     }

function upVoteIssue(issueId) {
    userAxios
      .put(`/api/issue/upvote/${issueId}`) // using userAxios to send a PUT request to this endpoint
      .then(res => {
        // Update the specific issue in the state after upvoting
        setAllIssues(prevIssues =>
          prevIssues.map(issue => (issue._id !== issueId ? issue : res.data))
        ); // updating allIssues state, for the issue that matches the 'issueId', it replaces issue with the updated issue data from 'res.data'
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: prevUserState.issues.map(issue =>
            issue._id !== issueId ? issue : res.data
          ) // updating userState, checking the specific issue using 'issueId', replacing it with updated issue data
        }));
      })
      .catch(err => console.log(err));
  }
  
  console.log(allIssues)

  function downVoteIssue(issueId) {
    userAxios
      .put(`/api/issue/downvote/${issueId}`)
      .then(res => {
        console.log(res.data)
        // Update the specific issue in the state after downvoting
        setAllIssues(prevIssues => prevIssues.map(issue => (issue._id !== issueId ? issue : res.data)));
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: prevUserState.issues.map(issue =>
             issue._id !== issueId ? issue : res.data
          )
        }));
      })
      .catch(err => console.log(err));
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
                postNewComment,
                upVoteIssue,
                downVoteIssue,
                comments,
                setComments,
                allIssues,
                setAllIssues,
                userAxios,
                setUserState,
                editIssue,
                userState,
                getAllIssues
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}