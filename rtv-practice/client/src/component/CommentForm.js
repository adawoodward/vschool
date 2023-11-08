import React, { useContext, useState } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider'

export default function CommentForm({ issueId, postComment }) {
    const [text, setText] = useState('')
    // const { postComment } = useContext(UserContext)

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        if (text) {
            postComment({ text, issue: issueId })
            setText('')
        }
    }

    return (
        <div>
          <h3>Add a Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              name="text"
              value={text}
              onChange={handleInputChange}
              placeholder="Write your comment here"
            />
            <button type="submit">Submit Comment</button>
          </form>
        </div>
      );
}
