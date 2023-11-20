import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])
    const [allPosts, setAllPosts] = useState([]);
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
                getUserPosts()      // fetch the user-specific issues associated with the logged-in user
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

    function getAllPosts(){
        userAxios.get('/api/post')
            .then((res) => {
                setAllPosts(res.data);
            })
            .catch((err) => {
                console.error('Error fetching all posts:', err);
            });
    }
    
    function getUserPosts() {
        // since userAxios has the token built into it
        userAxios.get("/api/post/user")
            .then(res => {
                console.log('Retrieved posts:', res.data)
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data // because this is initial get request, we can just set that full array posts
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addPost(newPost) {
        userAxios.post("/api/post", newPost)
            .then(res => {
                setAllPosts(prevAllPosts => {
                    return prevAllPosts ? [res.data, ...prevAllPosts] : [res.data];
                });
                setUserState(prevUserState => ({
                    ...prevUserState,
                    posts: prevUserState.posts ? [res.data, ...prevUserState.posts] : [res.data]
                }));
                navigate('/profile');
            })
            .catch(err => console.log(err.response.data.errMsg));
    }
    

    const editPost = async (postId, updatedData) => {
        try {
            // Make API request to update the post
            await userAxios.put(`/api/post/${postId}`, updatedData);
    
            // Update the state
            setAllPosts(prevPosts => {
                return prevPosts.map(post => (post._id === postId ? { ...post, ...updatedData } : post));
            }); // posts matches with postId will create a new changed object {...post, ...updatedData}
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

      // takes two parameter: newReview (the review to be posted) & postId (identifies the post for which the review is posted).
    function postNewReview(newReview, postId) {
        console.log('Posting review for postId:', postId);
        userAxios
            .post(`/api/review/posts/${postId}`, newReview)
            .then((res) => {
                setReviews((prevReviews) => [...prevReviews, res.data]);
            }) // updating the reviews state, takes the previous state(prev) and adds the new review(res.data)
            .catch((err) => console.log(err));
    }

function upVotePost(postId) {
    userAxios
      .put(`/api/post/upvote/${postId}`) // using userAxios to send a PUT request to this endpoint
    //   .then(() => {
    //     // Fetch updated post data after upvoting
    //     return userAxios.get(`/api/post/${postId}`);
    //   })
      .then(res => {
        console.log(res.data)
        // Update the specific issue in the state after upvoting
        setAllPosts(prevPosts => prevPosts.map(post => (post._id !== postId ? post : res.data))); // updating allPost state, for the post that matches the 'postId', it replaces post with the updated post data from 'res.data'
        setUserState(prevUserState => ({
          ...prevUserState,
          posts: prevUserState.posts?.map((post) =>
            post._id !== postId ? post : res.data
          ) // updating userState, checking the specific post using 'postId', replacing it with updated post data
        }));
      })
      .catch(err => console.log(err));
  }
  
  console.log(allPosts)

  function downVotePost(postId) {
    userAxios
      .put(`/api/post/downvote/${postId}`)
    //   .then(() => {
    //     // Fetch updated post data after downvoting
    //     return userAxios.get(`/api/post/${postId}`);
    //   })
      .then(res => {
        console.log(res.data)
        // Update the specific issue in the state after downvoting
        setAllPosts(prevPosts => prevPosts.map(post => (post._id !== postId ? post : res.data)));
        setUserState(prevUserState => ({
          ...prevUserState,
          posts: prevUserState.posts?.map((post) =>
             post._id !== postId ? post : res.data
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
                addPost,
                resetAuthErr,
                postNewReview,
                upVotePost,
                downVotePost,
                reviews,
                setReviews,
                allPosts,
                setAllPosts,
                userAxios,
                setUserState,
                editPost,
                userState,
                getAllPosts,
                getUserPosts
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}