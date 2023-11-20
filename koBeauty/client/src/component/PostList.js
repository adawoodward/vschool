import React from 'react';
import Post from './Post'

export default function PostList(props) {
  const { posts, handleUpVote, handleDownVote } = props;

  // Check if 'posts' is an array before mapping
  if (!Array.isArray(posts)) {
    return <div className="post-list">No post to display</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => ( // for each post in the array, it renders an Post component
        <Post 
        key={post._id} 
        post={post}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote} />
      ))}
    </div>
  );
}
