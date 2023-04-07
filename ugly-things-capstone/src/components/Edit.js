import React, {useContext, useState} from "react"
import {Context} from '../Context'
import axios from "axios"


function Edit(props) {
    const {deleteItem, handleEdit, newInput, setNewInput, flexDirection, width} = useContext(Context)
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
        // <div className="card" style={{display: "flex", flexDirection, width: "33%"}}>
        <div className="card" style={{width}}>
            {!isEditing && <div id={props.id} className="ugly--things--list" >
                <h3>{props.title.length < 10 ? `${props.title}` : `${props.title.substring(0, 10)}...`}</h3>    
                {/* <h4>{meal.strMeal.length < 20 ? `${meal.strMeal}` : `${meal.strMeal.substring(0, 25)}...`}</h4> */}

                <h6 style={{padding:'5px', marginRight:'15px'}}>{props.description}</h6>
                <img src={props.imgUrl} height="200px" />
                <button className="delete" onClick={() => deleteItem(props.id)}>Delete</button>
                <br></br>
                <button className="edit" onClick={toggleEdit}>Edit</button>
            </div>}
            <br></br>
            {isEditing && <div className="edited--ugly--things--list">
            <img src={props.imgUrl} height="200px" />
            <br></br>
            <input placeholder="new title here" onChange={handleEditChange} name="title" value={newInput.title} required />
            <br></br>
            <input placeholder="new description here" onChange={handleEditChange} name="description" value={newInput.description} required />
            <br></br>
            <input placeholder="new img URL here" onChange={handleEditChange} name="imgUrl" value={newInput.imgUrl} height="200px" required />
            <br></br>
            <button className="save" onClick={handleEditSubmit}>Save</button>
            </div>}
        </div>
    )

}

export default Edit