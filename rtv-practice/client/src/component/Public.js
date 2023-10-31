import React from 'react'
import IssueList from './IssueList.js'

export default function Public(props){
    const { issues } = props
    return (
      <div className="issue-list">
        <IssueList />
        {/* instead of <Todo title={todo.title} imgUrl={todo.imgUrl}, spread it into the props object */}
        {/* { issues.map(issue => <Issue {...issue} key={issue._id}/>) } */}
      </div>
    )
}