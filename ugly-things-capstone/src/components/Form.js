import React, {useContext, useState} from "react"
import {Context} from '../Context'
import axios from "axios"

export default function Form(props) {
  
    // const handleEdit = (id) => {
    //     const update = {
    //         title: newInput.title,
    //         description: newInput.description,
    //         imgUrl: newInput.imgUrl
    //     }
    //     axios.put(`https://api.vschool.io/ada/thing/${id}`, update)
    //         .then(res => console.log(res.data))
    //     setList(prevList => prevList.map(item => (item._id === id ? {...item, title: newInput.title, description: newInput.description, imgUrl: newInput.imgUrl} : item)))
    // }

    const {postUglyThing} = useContext(Context)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        postUglyThing(formData)
        console.log("submission successful")
        setFormData({
            title: "",
            description: "",
            imgUrl: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" onChange={handleChange} name="title" value={formData.title} required/>
                <input type="text" placeholder="img URL" onChange={handleChange} name="imgUrl" value={formData.imgUrl} required />
                <input type="text" placeholder="description" onChange={handleChange} name="description" value={formData.description} required/> 
                <button className="button">Submit</button>
            </form>
        </div>
    )


}