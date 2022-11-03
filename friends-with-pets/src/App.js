import React from 'react';
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";

export default function App() {
  return (
    <div>
      <h1>Friends with Pets</h1>
        <FriendList />
            <Friend />
    </div>
  )
}