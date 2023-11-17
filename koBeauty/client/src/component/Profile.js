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
      <div className='account'>
      <h1>Welcome @{username}!</h1>
      <br></br>
      <h2>Your Posts</h2>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
