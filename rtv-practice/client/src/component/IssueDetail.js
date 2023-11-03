import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import CommentForm from './CommentForm';

const IssueDetail = () => {
    const { userAxios, comments, setComments, postNewComment } = useContext(UserContext);
    const { _id } = useParams();
    const [issueDetail, setIssueDetail] = useState({});

    const fetchIssue = () => {
        return userAxios
            .get(`/api/issue/issues/${_id}`)
            .then((res) => {
                console.log(res.data);
                setIssueDetail(res.data);
                return res.data;
            })
            .catch((err) => {
                console.error(err.response);
                throw err; // Re-throw the error to be caught in the Promise chain
            });
    };

    const fetchComments = () => {
        if (issueDetail._id) {
            return userAxios
                .get(`/api/comment/issues/${issueDetail._id}`)
                .then((res) => {
                    console.log(res.data);
                    setComments(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching comments: ", err.response);
                    throw err;
                });
        } else {
            console.log("Invalid issueId");
            return Promise.resolve();
        }
    };

    function postComment(newComment) {
        if (!issueDetail._id) {
            console.error("Invalid issueId");
            return;
        }
        console.log("issueId: ", issueDetail._id);
        postNewComment(newComment, newComment.issue);

        // postNewComment(newComment, issueDetail._id);
    }

    useEffect(() => {
        fetchIssue()
            .then(fetchComments)
            .catch((error) => {
                console.error("Error fetching issue: ", error);
            });
    }, []);

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
                    <CommentForm issueId={issueDetail._id} onSubmit={postComment} />
                ) : (
                    <p>Loading...</p>
                )}
                <p>
                    {filteredComments.map((comment) => (
                        <div key={comment._id}>{comment.text}</div>
                    ))}
                </p>
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