import React, {useContext, useState} from "react"
import {Context} from '../Context'

export default function Edit(props) {
    const {deleteItem, handleEdit, newInput, setNewInput} = useContext(Context)
    const {title, description, imgUrl} = props

    function handleEditChange(event) {
        const {name, value} = event.target
        setNewInput(prevItem => ({...prevItem, [name]: value}))
    }

    const [isEditing, setIsEditing] = useState(false)

    function handleEditSubmit(e) {
        handleEdit(props.id, newInput)
        setNewInput({
            title: "",
            description: "",
            imgUrl: ""
        })
        setIsEditing(false)
    }

    const toggleEdit = () => {
        setIsEditing(prev => !prev)
    };

    return (
        <div>
            {!isEditing && <div id={props.id} className="ugly--things--list">
                <h2>{props.title}</h2>    
                <h3>{props.description}</h3>
                <img src={props.imgUrl} />
                <button onClick={() => deleteItem(props.id)}>Delete</button>
                <button onClick={toggleEdit}>Edit</button>
            </div>}
            {isEditing && <div className="edited--ugly--things--list">
            <input placeholder="new title here" onChange={handleEditChange} name="title" value={newInput.title} required/>
            <img src={newInput.imgUrl} height="200px" />
            {/* <img src={props.imgUrl} height="200px" /> */}
            <input placeholder="new description here" onChange={handleEditChange} name="description" value={newInput.description} required/>
            <button onClick={handleEditSubmit}>Save</button>
            </div>}
        </div>
    )

}