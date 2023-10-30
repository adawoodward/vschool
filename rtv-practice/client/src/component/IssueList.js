import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
  const { issues } = props
  return (
    <div className="issue-list">
      {/* instead of <Todo title={todo.title} imgUrl={todo.imgUrl}, spread it into the props object */}
      { issues.map(issue => <Issue {...issue} key={issue._id}/>) }
    </div>
  )
}