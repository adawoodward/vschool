import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Update() {
    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    useEffect(()=> {
        setId(localStorage.getItem('_id'))
        setTitle(localStorage.getItem('title'))
        setDescription(localStorage.getItem('description'))
        setImgUrl(localStorage.getItem('img URL'))
    }, [])

    const updateApiData = () => {
        axios.put(`https://api.vschool.io/ada/thing/${id}`, {
            title,
            description,
            imgUrl
        })
    }

    return (
    <div>
        <form className="create-form">
            <input 
                type='text'
                className="form--input"
                placeholder='title' 
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type='text'
                className='form--input'
                placeholder='description'
                name='description' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type='text'
                placeholder='imgUrl' 
                name='imgUrl'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
            />

            <button type='submit' onClick={updateApiData}>Update</button>
        </form>
    </div>)
}