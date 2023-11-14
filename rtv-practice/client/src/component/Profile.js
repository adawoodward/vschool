import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider.js';
import IssueList from './IssueList.js';

export default function Profile() {
  const { user: { username }, issues } = useContext(UserContext);

  // Effect to re-render when issues change
  useEffect(() => {
    console.log('Issues have changed:', issues);
  }, [issues]);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h2>Your Issues</h2>
      <IssueList issues={issues} />
    </div>
  );
}

