import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

export default function CommentForm({ issueId, postComment }) {
    const [text, setText] = useState('')
    const { user } = useContext(UserContext)

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        if (text && user) {
            postComment({ text, issue: issueId })
            setText('')
        }
    }

    return (
      <div className='comment-form'>
          <h3>Add a Comment</h3>
          {user ? (
              <form onSubmit={handleCommentSubmit}>
                  <textarea
                      name="text"
                      value={text}
                      onChange={handleInputChange}
                      placeholder="Write your comment here"
                  />
                  <br></br>
                  <button type="submit">Submit Comment</button>
              </form>
          ) : (
              <p>Please sign in to post a comment.</p>
          )}
      </div>
  );
}
