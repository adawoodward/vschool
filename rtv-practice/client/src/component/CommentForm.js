import React, { useState } from 'react'

// function postNewComment(newComment, issueId) {
//     axios.post(`/api/comments/${issueId}`, newComment)
//         .then(res => {
//             // Update the comments state with the new comment
//             setComments(prev => [...prev, res.data]);
//         })
//         .catch(err => console.log(err));
// }

const initInputs = {
  text: ""
}

// receive addTodo as props
export default function CommentForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { postNewComment } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    // add todo
    postNewComment(inputs)
    setInputs(initInputs)
  }

  const { text } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Text"/>
      <button>Add Comment</button>
    </form>
  )
}