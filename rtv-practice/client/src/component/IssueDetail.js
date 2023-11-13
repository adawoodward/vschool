import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import CommentForm from './CommentForm';
import EditForm from './EditForm';

const IssueDetail = () => {
    const { userAxios, comments, setComments, postNewComment, setUserState } = useContext(UserContext);
    const { _id } = useParams();
    const [issueDetail, setIssueDetail] = useState({});
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imgUrl: ''
    }); // Add formData state

    const fetchIssue = async () => {
        try {
            const res = await userAxios.get(`/api/issue/issues/${_id}`);
            console.log(res.data);
            setIssueDetail(res.data);
            setFormData(res.data)
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

    async function deleteIssue() {
        try {
            const url = `/api/issue/${_id}`;
            console.log("Deleting issue at URL:", url);
            await userAxios.delete(url);
            // Update the state to remove the deleted issue
            // setIssueDetail({})
            setUserState(prevUserState => ({
                ...prevUserState,
                issues: prevUserState.issues.filter(issue => issue._id !== _id)
            }));
            // setIssues(prevIssues => prevIssues.filter(issue => issue._id !== _id));
            navigate('/profile')
        } catch (error) {
            console.error('Error deleting issue:', error);
        }
    }
    
    async function deleteComment(commentId) {
        try {
            await userAxios.delete(`/api/comment/${commentId}`)
            await updateComments()
        } catch (error) {
            console.error('Error deleting comment:', error)
        }
    }

    // Define the handleSave function
    const handleSave = async (updatedFormData) => {
        try {
        // Make API request to update the issue with updatedFormData
        await userAxios.put(`/api/issue/${_id}`, updatedFormData);
      
        // After successful update, set isEditing to false
        setIsEditing(false);

        // Refetch the issue and comments to update the UI
        await fetchIssue();
        await updateComments();

        // Add the following line to trigger a re-render in the Profile component
        setUserState(prevUserState => ({
            ...prevUserState,
            issues: prevUserState.issues.map(issue => (issue._id !== _id ? issue : { ...issue, ...updatedFormData })),
        }));
        } catch (error) {
        console.error('Error updating issue:', error);
        }
    };
      

    return (
        <>
            <div className='detail-container'>
                <br />
                <h1>Detail Page</h1>
                <hr />
                <br />
                {isEditing ? (
                <EditForm
                formData={formData}
                setFormData={setFormData}
                onCancel={() => setIsEditing(false)}
                onSave={handleSave}
                />) : (
                <>
                <div>Title: {issueDetail?.title}</div>
                <div>Description: {issueDetail?.description}</div>
                <div>ImgUrl: {issueDetail?.imgUrl}</div>
                </>
                )}
                {isEditing ? (<div></div>) : (<button className='edit' onClick={() => setIsEditing(true)}>Edit Issue</button>)}
                {/* {isEditing ? (<button className='save' onClick={handleSave}>Save Changes</button>) : (<button className='edit' onClick={() => setIsEditing(true)}>Edit Issue</button>)} */}
                <button onClick={deleteIssue}>Delete Issue</button>
                <div>Comment</div>
                {issueDetail._id ? (
                    <CommentForm postComment={postComment} issueId={issueDetail._id} />
                ) : (
                    <p>Loading...</p>
                )}

                <div className='comment'>
                {comments?.map((comment) => (
                    <div key={comment._id}>
                        {comment.text}
                        <button onClick={() => deleteComment(comment._id)}>Delete Comment</button>
                    </div>
                ))}
                </div>

                <br />
            </div>
        </>
    );
}

export default IssueDetail;

