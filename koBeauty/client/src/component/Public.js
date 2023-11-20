import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import PostList from './PostList';

export default function Public() {
  const { upVotePost, downVotePost, getAllPosts, allPosts } = useContext(UserContext);

  // const { _id } = useParams();
  console.log(allPosts)
  useEffect(() => {
    getAllPosts()
  }, []);

  // Function to handle upvoting an post
  const handleUpVote = (postId) => {
    upVotePost(postId)
  };

  // Function to handle downvoting an post
  const handleDownVote = (postId) => {
    downVotePost(postId)
  };

  return (
    <div className="public">
      <br></br>
      <br></br>
      <h1 style={{textAlign: 'center'}}>All Posts</h1>
      <br></br>
      <br></br>
      <PostList
        posts={allPosts}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote}
      />
    </div>
  );
}
