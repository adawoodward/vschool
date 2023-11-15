import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import PostList from './PostList';

export default function Public() {
  const { userAxios, setUserState, upVotePost, downVotePost, getAllPosts, allPosts } = useContext(UserContext);

  const { _id } = useParams();
  console.log(allPosts)
  useEffect(() => {
    // Fetch all issues from the server
    getAllPosts()
  }, []);

  // Function to handle upvoting an issue
  const handleUpVote = (postId) => {
    upVotePost(postId)
  };

  // Function to handle downvoting an issue
  const handleDownVote = (postId) => {
    downVotePost(postId)
  };

  return (
    <div className="public">
      <h1>Public Posts</h1>
      <h2>All Posts</h2>
      <PostList
        posts={allPosts}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote}
      />
    </div>
  );
}
