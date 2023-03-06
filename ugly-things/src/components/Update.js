import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Update() {
    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [newTitleInput, setNewTitleInput] = useState('')
    const [newDescriptionInput, setNewDescriptionInput] = useState('')
    const [newImgUrl, setNewImgUrl] = useState('')
    const [ApiData, setApiData] = useState([])


    useEffect(()=> {
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setDescription(localStorage.getItem('description'))
        setImgUrl(localStorage.getItem('img URL'))
    }, [])

    const updateApiData = (id, title, description, imgUrl) => {
        axios.put(`https://api.vschool.io/ada/thing/${id}`, {
            title,
            description,
            imgUrl
        })
        .then(()=> setApiData(prevData => {
            return prevData.map(item => item._id === id ? {
                ...item, title: newTitleInput, description: newDescriptionInput, imgUrl: newImgUrl
            } : item)
        }))
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