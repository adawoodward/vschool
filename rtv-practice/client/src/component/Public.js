import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

export default function Public() {
  const { userAxios, upVoteIssue, downVoteIssue } = useContext(UserContext);
  const [allIssues, setAllIssues] = useState([]);

  useEffect(() => {
    // Fetch all issues from the server
    userAxios.get('/api/issue')
      .then((res) => {
        setAllIssues(res.data);
      })
      .catch((err) => {
        console.error('Error fetching all issues:', err);
      });
  }, [userAxios]);

  const handleUpVote = (issueId) => {
    upVoteIssue(issueId);
  };

  const handleDownVote = (issueId) => {
    downVoteIssue(issueId);
  };

  return (
    <div className="public">
      <h1>Public Issues</h1>
      <h2>All Issues</h2>
      <IssueList
        issues={allIssues}
        onUpVote={handleUpVote}
        onDownVote={handleDownVote}
      />
    </div>
  );
}


// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../context/UserProvider';
// import IssueList from './IssueList';

// export default function Public() {
//   // Access issues from the UserContext
//   const { userAxios, upVoteIssue, downVoteIssue } = useContext(UserContext)
//   const [allIssues, setAllIssues] = useState([])
//   // const { issues } = useContext(UserContext);

//   useEffect(() => {
//     userAxios.get('/api/issue')
//     .then((res) => {
//       setAllIssues(res.data)
//     })
//     .catch((err) => {
//       console.error('Error fetching all issues:', err)
//     })
//   }, [userAxios])

//   return (
//     <div className="public">
//       <h1>Public Issues</h1>
//       <h2>All Issues</h2>
//       <IssueList issues={allIssues} />
//       {/* <IssueList issues={issues} /> */}
//     </div>
//   );
// }
