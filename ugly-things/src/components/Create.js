import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const postData = () => {
        axios.post(`https://api.vschool.io/ada/thing/`, {
            title,
            description,
            imgUrl
        })
        console.log(title)
        console.log(description)
        console.log(imgUrl)
    }

    return (
        <div>
            <form className="create-form">
                <input 
                    type='text'
                    className="form--input"
                    placeholder='title' 
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                    type='text'
                    className='form--input'
                    placeholder='description'
                    name='description' 
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type='text'
                    placeholder='imgUrl' 
                    name='imgUrl'
                    onChange={(e) => setImgUrl(e.target.value)}
                />

                <button type='submit' onClick={postData}>Submit</button>
            </form>
            <div></div>
        </div>
    )
}


// export default Create