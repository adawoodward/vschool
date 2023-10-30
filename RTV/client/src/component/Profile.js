import React, { useContext } from 'react'
import Issue from './Issue.js'
import { UserContext } from '../context/UserProvider'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'


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
      <h3>Add A ISSUE</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Issues</h3>
      <IssueList issues={issues}/>
    </div>
  )
}