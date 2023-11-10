import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import Issue from './Issue.js'
import IssueList from './IssueList.js'
import IssueForm from './IssueForm.js'


export default function Profile(){
  // pulling out context here         // to avoid consuming again
  const { 
    user: { 
      username 
    }, 
    addIssue, 
    issues
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      {/* <h3>Add AN ISSUE</h3> */}
      {/* <IssueForm addIssue={addIssue}/> */}
      <h2>Your Issues</h2>
      <IssueList issues={issues}/>
    </div>
  )
}