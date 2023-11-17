import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';

export default function Post(props) {
  const { post } = props;
  const { title, brand, category, description, imgUrl } = post; // Destructure issue directly
  const { _id, likedUsers, dislikedUsers } = post;

  // Get the UserContext and functions
  const {
    upVotePost,
    downVotePost,
    user: currentUser,
    allPosts
  } = useContext(UserContext);

  const isLiked = likedUsers.includes(currentUser._id); // Check if current user liked the issue
  const isDisliked = dislikedUsers.includes(currentUser._id); // Check if current user disliked the issue
  const totalLikes = likedUsers.length;
  const totalDislikes = dislikedUsers.length;


  // // Check if allPosts is null before rendering
  // if (allPosts === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='post'>
      <h1 className='title'>{title}</h1>
      <h3>Brand: {brand}</h3>
      <h3>Category: {category}</h3>
      {/* <h3>Description: {description}</h3> */}
      <img src={imgUrl} alt={imgUrl} width={300} />
      <div className='vote-button'>
      <button
        onClick={() => {
          if (!isLiked) upVotePost(_id);
        }}
        disabled={isLiked}
      >
        <i className="fa-solid fa-heart" style={{fontSize: '20px'}}></i>
      </button>
      <button
        onClick={() => {
          if (!isDisliked) downVotePost(_id);
        }}
        disabled={isDisliked}
      > 
        <i className="fa-solid fa-heart-crack" style={{fontSize: '20px'}}></i>
      </button>
      </div>
      <div className='vote'>
      <p>Total Likes: {totalLikes}</p>
      <p>Total Dislikes: {totalDislikes}</p>
      </div>
      <br></br>
      <Link to={`/posts/${_id}`}>
        <button>Read more..</button>
      </Link>
    </div>
  );
}
