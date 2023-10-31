import React, { useContext, useState } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider'

export default function CommentForm({ issueId }) {
    const [text, setText] = useState('')
    const { postNewComment } = useContext(UserContext)

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        if(text) {
            postNewComment({ text, issueId })
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

// import React, { useState } from 'react'

// const initInputs = {
//   text: ""
// }

// // receive addTodo as props
// export default function CommentForm(props){
//   const [inputs, setInputs] = useState(initInputs)
//   const { postNewComment } = props

//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     // add todo
//     postNewComment(inputs)
//     setInputs(initInputs)
//   }

//   const { text } = inputs
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         name="text" 
//         value={text} 
//         onChange={handleChange} 
//         placeholder="Text"/>
//       <button>Add Comment</button>
//     </form>
//   )
// }