import React from 'react';
import Post from './Post'

export default function PostList(props) {
  const { posts, handleUpVote, handleDownVote } = props;

  // Check if 'issues' is an array before mapping
  if (!Array.isArray(posts)) {
    return <div className="post-list">No post to display</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => ( // for each issue in the array, it renders an Issue component
        <Post 
        key={post._id} 
        post={post}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote} />
      ))}
    </div>
  );
}
