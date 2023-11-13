import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider.js';
import IssueList from './IssueList.js';

export default function Profile() {
  const { user: { username }, issues } = useContext(UserContext);

  // Effect to re-render when issues change
  useEffect(() => {
    // You can perform any additional logic here if needed
    // For now, let's just log a message
    console.log('Issues have changed:', issues);
  }, [issues]);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h2>Your Issues</h2>
      <IssueList issues={issues} />
    </div>
  );
}


// import React, { useContext, useEffect, useState } from 'react'
// import { UserContext } from '../context/UserProvider.js'
// import Issue from './Issue.js'
// import IssueList from './IssueList.js'


// export default function Profile(){
//   // pulling out context here         // to avoid consuming again
//   const { 
//     user: { username }, 
//     addIssue, 
//     issues,
//     setIssues
//   } = useContext(UserContext)

//     // State to trigger re-render when issues change
//     const [triggerRender, setTriggerRender] = useState(false);

//     // Effect to re-render when issues change
//     useEffect(() => {
//       setTriggerRender(prev => !prev);
//     }, [issues]);

//   return (
//     <div className="profile">
//       <h1>Welcome @{username}!</h1>
//       {/* <h3>Add AN ISSUE</h3> */}
//       {/* <IssueForm addIssue={addIssue}/> */}
//       <h2>Your Issues</h2>
//       {/* <IssueList issues={issues} /> */}

//       <IssueList issues={issues} triggerRender={triggerRender}/>
//     </div>
//   )
// }