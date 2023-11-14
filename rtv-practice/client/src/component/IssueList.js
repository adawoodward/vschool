import React from 'react';
import Issue from './Issue.js';
import { Link } from 'react-router-dom';

export default function IssueList(props) {
  const { issues, handleUpVote, handleDownVote } = props;

  // Check if 'issues' is an array before mapping
  if (!Array.isArray(issues)) {
    return <div className="issue-list">No issues to display</div>;
  }

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue 
        key={issue._id} 
        issue={issue}
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote} />
      ))}
    </div>
  );
}
