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
  } = useContext(UserContext);

  const isLiked = likedUsers.includes(currentUser._id); // Check if current user liked the issue
  const isDisliked = dislikedUsers.includes(currentUser._id); // Check if current user disliked the issue

  const totalLikes = likedUsers.length;
  const totalDislikes = dislikedUsers.length;

  return (
    <div className='issue'>
      <h1>{title}</h1>
      <h3>{brand}</h3>
      <h3>{category}</h3>
      <h3>{description}</h3>
      <img src={imgUrl} alt={imgUrl} width={300} />
      <div className='vote-button'>
      {/* Like Button */}
      <button
        onClick={() => {
          if (!isLiked) upVotePost(_id);
        }}
        disabled={isLiked}
      >
        {/* Upvote */}Like
        <i className='far fa-thumbs-up' style={{fontSize: '40px'}}></i>
      </button>
      {/* Dislike Button */}
      <button
        onClick={() => {
          if (!isDisliked) downVotePost(_id);
        }}
        disabled={isDisliked}
      > Dislike
        <i className='far fa-thumbs-down' style={{fontSize: '40px'}}></i>
      </button>
      </div>
      <div className='vote'>
      <p>Total Upvotes: {totalLikes}</p>
      <p>Total Downvotes: {totalDislikes}</p>
      </div>

      <Link to={`/posts/${_id}`}>
        <button>Read more..</button>
      </Link>
    </div>
  );
}
