import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Update(props) {
    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [newTitleInput, setNewTitleInput] = useState('')
    const [newDescriptionInput, setNewDescriptionInput] = useState('')
    const [newImgUrl, setNewImgUrl] = useState('')
    const [ApiData, setApiData] = useState([])

    // let {newTitleInput, newDescriptionInput, newImgUrl} = newInput

    useEffect(()=> {
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setDescription(localStorage.getItem('description'))
        setImgUrl(localStorage.getItem('img URL'))
    }, [])

    function handleEditChange(event) {
        const {name, value} = event.target
        setNewTitleInput(prevItem => ({...prevItem, [name]: value}))
        setDescription(prevItem => ({...prevItem, [name]: value}))
    }

    const handleEdit = (id) => {
        let update = {
            title: newInput.title,
            description: newInput.description,
            imgUrl: newInput.imgUrl
        }
        axios.put(`https://api.vschool.io/ada/thing/${id}`, update)
            .then(res => console.log(res.data))
        setList(prevList => prevList.map(item => (item._id === id ? {...item, title: newInput.title, description: newInput.description, imgUrl: newInput.imgUrl} : item)))
    }

    function handleEditSubmit(e) {
        handleEdit(props.id, newInput)
        setNewInput({
            title: "",
            description: "",
            imgUrl: ""
        })
        setIsEditing(false)
    }

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
                onClick={(e) => setTitle(e.target.value)} 
                onChange={handleEditChange}
            />

            <input 
                type='text'
                className='form--input'
                placeholder='description'
                name='description' 
                value={description}
                onClick={(e) => setDescription(e.target.value)}
                onChange
            />

            <input
                type='text'
                placeholder='imgUrl' 
                name='imgUrl'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
            />

            <button type='submit' onClick={updateApiData}>Save</button>
        </form>
        <div>{elements}</div>
    </div>)
}