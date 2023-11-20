import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import ReviewForm from './ReviewForm';
import EditForm from './EditForm';
import StarRating from './StarRating';

const PostDetail = () => {
    const { user } = useContext(UserContext);

    const { userAxios, reviews, setReviews, postNewReview, setUserState } = useContext(UserContext);
    const { _id } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        category: '',
        description: '',
        imgUrl: ''
    }); // Add formData state

    const fetchPost = async () => {
        try {
            const res = await userAxios.get(`/api/post/posts/${_id}`); 
            console.log(res.data);
            setPostDetail(res.data); // updates postDetail state with the retrieved data
            setFormData(res.data) // sets formData state with the same data retrieved 
            return res.data;
        } catch (err) {
            console.error(err.response);
            throw err;
        }
    };

    const fetchReviews= async (postId) => {
        try {
            const res = await userAxios.get(`/api/review/posts/${postId}`);
            console.log(res.data);
            setReviews(res.data || []); // updated review state with res.data, and it will update the reviews on frontend
            console.log(reviews);
        } catch (err) {
            console.error("Error fetching reviews: ", err.response);
            throw err;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postData = await fetchPost();
                if (postData._id) { // if postData._id exists, it calls fecthReview to fetch reviews related to the post with the same _id
                    await fetchReviews(postData._id); 
                } else {
                    console.log("Invalid postId");
                }
            } catch (error) {
                console.error("Error fetching post: ", error);
            }
        };
        fetchData();
    }, []);

    // Function to check if the current user is the creator of the post
    const isCurrentUserPostCreator = () => {
        return user._id === postDetail.user; // Assuming postDetail.user contains the user ID of the post creator
    };


    // function to update the reviews 
    const updateReviews = async () => {
        if (postDetail._id) {
            await fetchReviews(postDetail._id);  // If the postDetail has a valid _id, it calls the fetchReviews function, passing the _id as an argument to retrieve reviews associated with that specific post from the server
        } // If there's no valid _id, the function won't make the call to fetch reviews
    };

    async function postReview(newReview) {
        if (!postDetail._id) {
            console.error("Invalid postId");
            return;
        }
        console.log("postId: ", postDetail._id);
    
        try {
            await postNewReview(newReview, postDetail._id); // call postNewReviews to add the new review to the post with postDetail._id
            await updateReviews(); // after posting review, it calls updateReviews function to fetch and update the reviews
            console.log(reviews);
        } catch (error) {
            console.error("Error updating reviews: ", error);
        }
    }

    async function deletePost() {
        try {
            const url = `/api/post/${_id}`;
            console.log("Deleting post at URL:", url);
            await userAxios.delete(url);
            setUserState(prevUserState => ({
                ...prevUserState,
                posts: prevUserState.posts.filter(post => post._id !== _id)
            })); // updating userState by removing the deleted post from posts array
            navigate('/profile') 
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }
    
    async function deleteReview(reviewId) {
        try {
            await userAxios.delete(`/api/review/${reviewId}`)
            await updateReviews() // to refresh the reviews after deleting
        } catch (error) {
            console.error('Error deleting review:', error)
        }
    }

    // functionality for saving changes made to an post
    const handleSave = async (updatedFormData) => { // takes updatedFormData as an argument
        try {
        // Make API request to update the post with updatedFormData
        await userAxios.put(`/api/post/${_id}`, updatedFormData);
      
        // After successful update, set isEditing to false
        setIsEditing(false);

        // Refetch the post and reviews to update the UI
        await fetchPost();
        await updateReviews();

        // Add the following line to trigger a re-render in the Profile component
        setUserState(prevUserState => ({
            ...prevUserState,
            posts: prevUserState.posts.map(post => (post._id !== _id ? post : { ...post, ...updatedFormData })),
        })); // maps through prevUserState.posts array and looks for the specific post with the same _id, replaces old data with updatedFormData
        } catch (error) {
        console.error('Error updating post:', error);
        }
    };
      

    return (
        <>
            <div className='detail-container'>
                <br />
                <h1>Detail Page</h1>
                <br />
                {/* it passes these functions and the form data as props to the EditForm component */}
                {isEditing ? (
                <EditForm
                formData={formData}
                setFormData={setFormData}
                onCancel={() => setIsEditing(false)}
                onSave={handleSave}
                />) : (
                <div className='detail'>
                <div>Title: {postDetail?.title}</div>
                <br></br>                
                <div>Brand: {postDetail?.brand}</div>
                <br></br>
                <div>Category: {postDetail?.category}</div>
                <br></br>
                <div className='detail-description'>Description:<br></br> {postDetail?.description}</div>
                <br></br>
                <img src={postDetail?.imgUrl} alt={postDetail?.imgUrl} width={300} />

                <br></br>
                </div>
                )}

                <div className='edit-delete-buttons'>
                {!isEditing && isCurrentUserPostCreator() && (
                    <button className='edit' onClick={() => setIsEditing(true)}>Edit Post</button>
                )}
                {!isEditing && isCurrentUserPostCreator() && (
                    <button className='delete' onClick={deletePost}>Delete Post</button>
                )}
                {!isCurrentUserPostCreator() && (
                    <p>You can't edit this post.</p>
                )}
                </div>
                <br></br>
          
                <div className='review-container'>
                {postDetail._id ? (
                    <ReviewForm postReview={postReview} postId={postDetail._id} />
                ) : (
                    <p>Loading...</p>
                )}
                <br></br>
                <hr></hr>
                <div className='review'>
                <br></br>
                <h2>REVIEWS</h2>
                <br></br>
                {Array.isArray(reviews) && reviews.map((review) => (
                    <div key={review._id} className='review-item'>
                        <br></br>
                        <p>Reviewed by {review.user?.username}</p>
                        <p>{review.text}</p>
                        <br></br>
                        {/* <div>{review.rating}</div> */}
                        <StarRating rating={review.rating} /> {/* Use the StarRating component */}
                        <br></br>
                        <img src={review.imgUrl} width={200} alt={review.imgUrl}/>
                        <br></br>
                        <br></br>
                        {/* <button onClick={() => deleteReview(review._id)}>Delete Review</button> */}
                        {/* <button onClick={() => deleteReview(review._id)}>
                            {user._id === review.user ? 'Delete Review' : <div></div>}
                        </button> */}
                         {user._id === review.user._id && (
                         <button onClick={() => deleteReview(review._id)}>
                            Delete Review
                        </button>
                        )}
                        <br></br>
                        <br></br>
                        <hr></hr>
                    </div>
                ))}
                </div>
                </div>

                <br />
            </div>
        </>
    );
}

export default PostDetail;

