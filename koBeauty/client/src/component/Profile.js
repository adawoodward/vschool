import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider.js';
import PostList from './PostList.js';

export default function Profile() {
  const { user: { username }, posts } = useContext(UserContext);

  // Effect to re-render when issues change
  useEffect(() => {
    console.log('Posts have changed:', posts);
  }, [posts]);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h2>Your Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
