import React, { useState } from 'react';

const initInputs = {
  title: "",
  brand: "",
  category: "",
  description: "",
  imgUrl: ""
}

// receive addPost as props
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
    <div className='post-form'>
      <br></br>
    <h1>Add Issue Here</h1>
    <form onSubmit={handleSubmit}>
      <br></br>
      <p>Title:</p>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <br></br>
      <p>Brand:</p>
      <input 
        type="text" 
        name="brand" 
        value={brand} 
        onChange={handleChange} 
        placeholder="Brand"/>
      <br></br>
      <label>
        Category:
        <br></br>
        <select name="category" value={category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Face">Face</option>
          <option value="Eyes">Eyes</option>
          <option value="Lips">Lips</option>
          <option value="Cheeks">Cheeks</option>
          <option value="Makeup-tools">Makeup-tools</option>
        </select>
      </label>  
      <br></br>
      <p>Description:</p>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
        <br></br>
      <p>ImgUrl:</p>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>
        <br></br>
      <button>Create Post</button>
    </form>
    </div>
  )
}