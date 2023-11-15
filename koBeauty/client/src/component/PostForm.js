import React, { useState } from 'react';

const initInputs = {
  title: "",
  brand: "",
  category: "",
  description: "",
  imgUrl: ""
}

// receive addTodo as props
export default function PostForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addPost } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addPost(inputs)
    setInputs(initInputs)
  }

  const { title, brand, category, description, imgUrl } = inputs
  return (
    <>
    <h1>Add Issue Here</h1>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="title" 
        value={brand} 
        onChange={handleChange} 
        placeholder="Brand"/>
      <label>
        Category:
        <select name="category" value={category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Face">Face</option>
          <option value="Eyes">Eyes</option>
          <option value="Lips">Lips</option>
          <option value="Cheeks">Cheeks</option>
          <option value="Makeup-tools">Makeup-tools</option>
        </select>
      </label>  
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>
      <button>Create Post</button>
    </form>
    </>
  )
}