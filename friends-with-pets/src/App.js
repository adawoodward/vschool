import React from 'react';
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import Pet from "./components/Pet";
// import data from './data';

export default function App() {
  return (
    <div>
      <h1>Friends with Pets</h1>
      <div>
        <FriendList />
            <Friend />
      </div>
    </div>
  )
}