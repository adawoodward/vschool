// import React from 'react'
// import IssueList from './IssueList.js'

// export default function Public(props){
//     const { issues } = props
//     return (
//       <div className="issue-list">
//         <IssueList />
//         {/* instead of <Todo title={todo.title} imgUrl={todo.imgUrl}, spread it into the props object */}
//         {/* { issues.map(issue => <Issue {...issue} key={issue._id}/>) } */}
//       </div>
//     )
// }


import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

export default function Public() {
  // Access issues from the UserContext
  const { userAxios } = useContext(UserContext)
  const [allIssues, setAllIssues] = useState([])
  // const { issues } = useContext(UserContext);

  useEffect(() => {
    userAxios.get('/api/issue')
    .then((res) => {
      setAllIssues(res.data)
    })
    .catch((err) => {
      console.error('Error fetching all issues:', err)
    })
  }, [userAxios])

  return (
    <div className="public">
      <h1>Public Issues</h1>
      <IssueList issues={allIssues} />
      {/* <IssueList issues={issues} /> */}
    </div>
  );
}
