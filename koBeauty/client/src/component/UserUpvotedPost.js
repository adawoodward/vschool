import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import Post from './Post';

export default function UserUpvotedPosts() {
  const { user, allPosts, getAllPosts } = useContext(UserContext);

  console.log(allPosts)
  useEffect(() => {
    // Fetch all issues from the server
    getAllPosts()
  }, []);

  // Filter the posts the user has upvoted
  // const userUpvotedPosts = allPosts.filter(post => post.likedUsers && post.likedUsers.includes(user._id));
  const userUpvotedPosts = allPosts.filter(post => post.likedUsers && post.likedUsers.some(id => id === user._id));

  console.log(userUpvotedPosts)

  // Check if there are upvoted posts to display
  if (userUpvotedPosts.length === 0) {
    return <div>No upvoted posts yet</div>;
  }

  return (
    <div className="user-upvoted-posts">
      <br></br>
      <br></br>
      <h2 style={{textAlign: 'center'}}>Posts Liked by @{user.username}</h2>
      <br></br>
      <br></br>
        <div className='liked-post'>
        {userUpvotedPosts.map(post => (
        <Post key={post._id} post={post} />
        ))}
        </div>
    </div>
  );
}
