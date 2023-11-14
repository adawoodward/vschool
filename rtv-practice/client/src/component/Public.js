
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

export default function Public() {
  const { userAxios, setUserState, upVoteIssue, downVoteIssue } = useContext(UserContext);
  const [allIssues, setAllIssues] = useState([]);
  const { _id } = useParams();

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

  // Function to handle upvoting an issue
  const handleUpVote = (issueId) => {
    upVoteIssue(issueId)
      .then((updatedIssue) => {
        // Update the issue in the state after upvoting
        setAllIssues(prevIssues => prevIssues.map(issue => (issue._id !== issueId ? issue : updatedIssue)));
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: prevUserState.issues.map(issue => (issue._id !== issueId ? issue : updatedIssue))
        }));
      })
      .catch(err => {
        console.error('Error upvoting issue:', err);
      });
  };

  // Function to handle downvoting an issue
  const handleDownVote = (issueId) => {
    downVoteIssue(issueId)
      .then((updatedIssue) => {
        // Update the issue in the state after downvoting
        setAllIssues(prevIssues => prevIssues.map(issue => (issue._id !== issueId ? issue : updatedIssue)));
        setUserState(prevUserState => ({
          ...prevUserState,
          issues: prevUserState.issues.map(issue => (issue._id !== issueId ? issue : updatedIssue))
        }));
      })
      .catch(err => {
        console.error('Error downvoting issue:', err);
      });
  };

  return (
    <div className="public">
      <h1>Public Issues</h1>
      <h2>All Issues</h2>
      <IssueList
        issues={allIssues}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote}
      />
    </div>
  );
}


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserProvider';
// import IssueList from './IssueList';

// export default function Public() {
//   const { userAxios, upVoteIssue, downVoteIssue, setUserState } = useContext(UserContext);
//   const [allIssues, setAllIssues] = useState([]);
//   const { _id } = useParams();


//   useEffect(() => {
//     // Fetch all issues from the server
//     userAxios.get('/api/issue')
//       .then((res) => {
//         setAllIssues(res.data);
//       })
//       .catch((err) => {
//         console.error('Error fetching all issues:', err);
//       });
//   }, [userAxios]);

//   // const handleUpVote = async (issueId) => {
//   //   await upVoteIssue(issueId);
//   //   setUserState(prevUserState => ({
//   //     ...prevUserState,
//   //     issues: prevUserState.issues.map(issue => (issue._id !== _id ? issue : { ...issue, upvotes: issue.upvotes + 1 })),
//   //   }));
//   //   // Refetch the data from the server after updating the votes
//   //   userAxios.get('api/issue')
//   //   .then((res) => {
//   //     setAllIssues(res.data)
//   //   })
//   //   .catch((err) => {
//   //     console.error('Error fetching all issues:', err)
//   //   })
//   // };

//   // const handleDownVote = async (issueId) => {
//   //   await downVoteIssue(issueId);
//   //   setUserState(prevUserState => ({
//   //     ...prevUserState,
//   //     issues: prevUserState.issues.map(issue => (issue._id !== _id ? issue : { ...issue, downvotes: issue.downvotes + 1 })),
//   //   }));
//   //   // Refetch the data from the server after updating the votes
//   //   userAxios.get('/api/issue')
//   //   .then((res) => {
//   //     setAllIssues(res.data);
//   //   })
//   //   .catch((err) => {
//   //     console.error('Error fetching all issues:', err);
//   //   });
//   // };

//   return (
//     <div className="public">
//       <h1>Public Issues</h1>
//       <h2>All Issues</h2>
//       <IssueList
//         issues={allIssues}
//       />
//     </div>
//   );
// }


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
