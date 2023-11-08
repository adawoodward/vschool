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

