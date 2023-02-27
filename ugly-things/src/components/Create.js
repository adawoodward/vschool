import React from 'react'

const Create = () => (
    <form>
        <div>
            <label>Title</label>
            <input placeholder='Title' />
        </div>
        <div>
            <label>ImgURL</label>
            <input placeholder='Img URL' />
        </div>
        <div>
            <label>Description</label>
            <input placeholder='Description' />
        </div>
        <button type='submit'>Submit</button>
    </form>
)

export default Create