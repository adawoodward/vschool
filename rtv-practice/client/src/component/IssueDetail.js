import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import CommentForm from './CommentForm';

const IssueDetail = () => {
    const { userAxios, comments, setComments, postNewComment } = useContext(UserContext);
    const { _id } = useParams();
    const [issueDetail, setIssueDetail] = useState({});

    const fetchIssue = async () => {
        try {
            const res = await userAxios.get(`/api/issue/issues/${_id}`);
            console.log(res.data);
            setIssueDetail(res.data);
            return res.data;
        } catch (err) {
            console.error(err.response);
            throw err;
        }
    };

    const fetchComments = async (issueId) => {
        try {
            const res = await userAxios.get(`/api/comment/issues/${issueId}`);
            console.log(res.data);
            setComments(res.data);
            console.log(comments);
        } catch (err) {
            console.error("Error fetching comments: ", err.response);
            throw err;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const issueData = await fetchIssue();
                if (issueData._id) {
                    await fetchComments(issueData._id);
                } else {
                    console.log("Invalid issueId");
                }
            } catch (error) {
                console.error("Error fetching issue: ", error);
            }
        };
    
        fetchData();
    }, []);

    // Define this function to update the comments state
    const updateComments = async () => {
        if (issueDetail._id) {
            await fetchComments(issueDetail._id);
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const issueData = await fetchIssue();
    //             if (issueData._id) {
    //                 await fetchComments(issueData._id);
    //             } else {
    //                 console.log("Invalid issueId");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching issue: ", error);
    //         }
    //     };
    
    //     fetchData();
    // }, [fetchIssue, fetchComments]);
    
    // const fetchIssue = async () => {
    //     try {
    //         const res = await userAxios.get(`/api/issue/issues/${_id}`);
    //         console.log(res.data);
    //         setIssueDetail(res.data);
    //         return res.data;
    //     } catch (err) {
    //         console.error(err.response);
    //         throw err; // Re-throw the error to be caught in the Promise chain
    //     }
    // };
    
    
    // // Define this function to update the comments state
    // const updateComments = async () => {
    //     if (issueDetail._id) {
    //     await fetchComments(issueDetail._id);
    // }
    // };

    // const fetchComments = async (issueId) => {
    //     try {
    //         const res = await userAxios.get(`/api/comment/issues/${issueId}`);
    //         console.log(res.data);
    //         setComments(res.data);
    //         console.log(comments)
    //     } catch (err) {
    //         console.error("Error fetching comments: ", err.response);
    //         throw err;
    //     }
    // };
    
    //////////////////////////

    // const fetchIssue = () => {
    //     return userAxios
    //         .get(`/api/issue/issues/${_id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setIssueDetail(res.data);
    //             return res.data;
    //         })
    //         .catch((err) => {
    //             console.error(err.response);
    //             throw err; // Re-throw the error to be caught in the Promise chain
    //         });
    // };

    // const fetchComments = () => {
    //     if (issueDetail._id) {
    //         return userAxios
    //             .get(`/api/comment/issues/${issueDetail._id}`)
    //             .then((res) => {
    //                 console.log(res.data);
    //                 setComments(res.data);
    //             })
    //             .catch((err) => {
    //                 console.error("Error fetching comments: ", err.response);
    //                 throw err;
    //             });
    //     } else {
    //         console.log("Invalid issueId");
    //         return Promise.resolve();
    //     }
    // };

    async function postComment(newComment) {
        if (!issueDetail._id) {
            console.error("Invalid issueId");
            return;
        }
        console.log("issueId: ", issueDetail._id);
    
        try {
            await postNewComment(newComment, issueDetail._id);
            await updateComments();
            console.log(comments);
        } catch (error) {
            console.error("Error updating comments: ", error);
        }
    }
    

    // async function postComment(newComment) {
    //     if (!issueDetail._id) {
    //         console.error("Invalid issueId");
    //         return;
    //     }
    //     console.log("issueId: ", issueDetail._id);
    //         // postNewComment(newComment, issueDetail._id);
    //     postNewComment(newComment, newComment.issue)
    //     .then(()=> {
    //         return updateComments()
    //     })
    //     .then(() => {
    //         console.log(comments)
    //     })
    //     .catch((error) => {
    //         console.error("Error updating comments: ", error)
    //     })
    // }

    const filteredComments = Array.isArray(comments)
        ? comments.filter((comment) => comment.issue === issueDetail._id)
        : [];

    return (
        <>
            <div className='detail-container'>
                <br />
                <h1>Detail Page</h1>
                <hr />
                <br />
                <div>Title: {issueDetail?.title}</div>
                <div>Description: {issueDetail?.description}</div>
                <div>ImgUrl: {issueDetail?.imgUrl}</div>
                <div>Comment</div>
                {issueDetail._id ? (
                    // <CommentForm issueId={issueDetail._id} onSubmit={postComment} />
                    <CommentForm postComment={postComment} issueId={issueDetail._id} />
                ) : (
                    <p>Loading...</p>
                )}
                {/* <p>
                    {filteredComments.map((comment) => (
                        <div key={comment._id}>{comment.text}</div>
                    ))}
                </p> */}
                <div>
                {comments?.map((comment) => (
                    <div key={comment._id}>{comment.text}</div>
                ))}
                </div>

                <br />
            </div>
        </>
    );
};

export default IssueDetail;


// import React, { useEffect, useState, useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { UserContext } from '../context/UserProvider'
// import CommentForm from './CommentForm'

// const IssueDetail = () => {

//     const { userAxios, comments, setComments, postNewComment } = useContext(UserContext)
//     const { _id } = useParams()
//     const [issueDetail, setIssueDetail] = useState({})

//     const fetchIssue = () => {
//         userAxios.get(`/api/issue/issues/${_id}`)
//         .then((res) => {
//             console.log(res.data)
//             setIssueDetail(res.data)
//             return res.status(200).json(res.data)
//         })
//         .catch(err => console.error(err.response))
//     }

//     // useEffect(() => {
//     //     fetchIssue()
//     //     fetchComments()
//     // }, [])

//     useEffect(() => {
//         fetchIssue()
//             .then(() => fetchComments())
//             .catch((error) => {
//                 console.error("Error fetching issue: ", error);
//             });
//     }, []);
    

//     const fetchComments = () => {
//       if (issueDetail._id) {
//         userAxios.get(`/api/comment/issues/${issueDetail._id}`)
//         .then((res) => {
//             console.log(res.data)
//             setComments(res.data)
//         })
//         .catch((err) => {
//             console.error("Error fetching comments: ", err.response)
//        })
//       } else {
//         console.log("Invalid issueId")
//       }

//     }

//     function postComment(newComment) {
//         if (!issueDetail._id) {
//             console.error("Invalid issueId")
//             return
//         }
//         console.log("issueId: ", issueDetail._id)
//         postNewComment(newComment, issueDetail._id)
//     }

//     const filteredComments = Array.isArray(comments) ? comments.filter(comments => comments.issue == issueDetail._id) : []

//     return (
//         <>
//         <div className='detail-container'>
//         <br></br>
//         <h1>Detail Page</h1>
//         <hr></hr>
//         <br></br>
//         <div>Title: {issueDetail?.title}</div>
//         <div>Description: {issueDetail?.description}</div>
//         <div>ImgUrl: {issueDetail?.imgUrl}</div>
//         <div>Comment</div>
//         {
//             issueDetail._id ? (
//                 <CommentForm issueId={issueDetail._id} onSubmit={postComment} />
//             ) : (
//                 <p>Loading...</p>
//             )
//         }
//         {/* <CommentForm issueId={_id} onSubmit={postComment} /> */}
//         <p>{filteredComments.map(comment => (
//             <div key={comment._id}>
//                 {comment.text}
//             </div>
//         ))}</p>
//         <br></br>
//         </div>
//         </>
//     )
// }

// export default IssueDetail