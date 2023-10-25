import React from 'react'
import IssueList from './IssueList.js'
import Issue from './Issue.js'

export default function Public(){
  return (
    <div className="public">
        <div>{Issue}</div>
        <div>{IssueList}</div>
    </div>
  )
}