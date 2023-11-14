import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';

export default function Issue(props) {
  const { issue } = props;
  const { title, description, imgUrl } = issue; // Destructure issue directly
  const { _id, likedUsers, dislikedUsers } = issue;

  // Get the UserContext and functions
  const {
    upVoteIssue,
    downVoteIssue,
    user: currentUser,
  } = useContext(UserContext);

  const isLiked = likedUsers.includes(currentUser._id); // Check if current user liked the issue
  const isDisliked = dislikedUsers.includes(currentUser._id); // Check if current user disliked the issue

  const totalLikes = likedUsers.length;
  const totalDislikes = dislikedUsers.length;

  return (
    <div className='issue'>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <img src={imgUrl} alt={imgUrl} width={300} />
      <div className='vote-button'>
      {/* Like Button */}
      <button
        onClick={() => {
          if (!isLiked) upVoteIssue(_id);
        }}
        disabled={isLiked}
      >
        {/* Upvote */}
        <i className='far fa-thumbs-up' style={{fontSize: '40px'}}></i>
      </button>


      {/* Dislike Button */}
      <button
        onClick={() => {
          if (!isDisliked) downVoteIssue(_id);
        }}
        disabled={isDisliked}
      >
        <i className='far fa-thumbs-down' style={{fontSize: '40px'}}></i>
      </button>
      </div>
      <div className='vote'>
      <p>Total Upvotes: {totalLikes}</p>
      <p>Total Downvotes: {totalDislikes}</p>
      </div>

      <Link to={`/issues/${_id}`}>
        <button>Read more..</button>
      </Link>
    </div>
  );
}


// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserProvider';
// import { Link } from 'react-router-dom';


// export default function Issue(props) {
//     const { comments } = useContext(UserContext);
//     const { issue } = props;
//     const { title, description, imgUrl } = props;
//     // const { _id } = useParams

//     // Ensure that comments is an array before filtering
//     const _id = issue ? issue._id : null;
//     // const filteredComments = Array.isArray(comments) ? comments.filter(comment => comment.issue === _id) : [];

//     // Rest of your component code
//     return (
//         <div className='issue'>
//             <h1>{title}</h1>
//             <h3>{description}</h3>
//             <img src={imgUrl} alt={imgUrl} width={300} />
//             {/* <p>{filteredComments.map(comment => (
//                 <div key={comment._id}>
//                     {comment.text}
//                 </div>
//             ))}</p> */}
//         <Link to={`/issues/${_id}`}>
//           <button>Detail</button>
//         </Link>
//         </div>
//     )
// }
